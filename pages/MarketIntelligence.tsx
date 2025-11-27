import React, { useState } from 'react';
import { Search, MapPin, ExternalLink, TrendingUp, Store } from 'lucide-react';
import { searchMarketTrends, findLocalStores } from '../services/gemini';
import { SearchResult, ProcessingState } from '../types';

export const MarketIntelligence: React.FC = () => {
  const [mode, setMode] = useState<'trends' | 'local'>('trends');
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<SearchResult | null>(null);
  const [status, setStatus] = useState<ProcessingState>(ProcessingState.IDLE);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setStatus(ProcessingState.PROCESSING);
    setResult(null);

    try {
      if (mode === 'trends') {
        const data = await searchMarketTrends(query);
        setResult(data);
      } else {
        // Mock getting location for simplicity
        const data = await findLocalStores(query); 
        setResult(data);
      }
      setStatus(ProcessingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(ProcessingState.ERROR);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Inteligencia de Mercado</h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Aprovechá los datos en tiempo real de Google para tomar mejores decisiones de compra y venta.
        </p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-white p-1 rounded-full shadow-sm border border-gray-200 inline-flex">
          <button
            onClick={() => { setMode('trends'); setQuery(''); setResult(null); setStatus(ProcessingState.IDLE); }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
              mode === 'trends' ? 'bg-secondary text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <TrendingUp size={16} /> Radar de Tendencias
          </button>
          <button
            onClick={() => { setMode('local'); setQuery(''); setResult(null); setStatus(ProcessingState.IDLE); }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
              mode === 'local' ? 'bg-secondary text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <MapPin size={16} /> Buscador Local
          </button>
        </div>
      </div>

      {/* Search Input */}
      <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-10">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={mode === 'trends' ? "Ver precios para 'iPhone 15'..." : "Buscar 'reparación de pc' cerca..."}
            className="w-full bg-white border-2 border-transparent focus:border-secondary shadow-lg rounded-2xl py-4 px-6 pl-12 text-lg focus:outline-none transition-all"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
             {mode === 'trends' ? <Search size={20} /> : <Store size={20} />}
          </div>
          <button 
            type="submit" 
            disabled={status === ProcessingState.PROCESSING || !query}
            className="absolute right-2 top-2 bottom-2 bg-secondary text-white px-6 rounded-xl font-medium hover:bg-blue-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === ProcessingState.PROCESSING ? 'Buscando...' : 'Buscar'}
          </button>
        </div>
      </form>

      {/* Results */}
      {status === ProcessingState.SUCCESS && result && (
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
          {/* Main Answer */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4 text-secondary font-bold uppercase text-xs tracking-wider">
                 <SparklesIcon /> Resumen IA
              </div>
              <div className="prose prose-blue max-w-none text-gray-800 leading-relaxed whitespace-pre-line">
                {result.text}
              </div>
            </div>
          </div>

          {/* Sources / Grounding */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              {mode === 'trends' ? 'Fuentes' : 'Ubicaciones'}
            </h3>
            <div className="space-y-3">
              {result.groundingChunks && result.groundingChunks.length > 0 ? (
                result.groundingChunks.map((chunk, idx) => {
                    if (chunk.web) {
                        return (
                             <a
                                key={idx}
                                href={chunk.web.uri}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-white p-3 rounded-lg border border-gray-200 hover:border-secondary hover:shadow-md transition-all group"
                              >
                                <div className="text-xs text-gray-500 mb-1 truncate">{new URL(chunk.web.uri).hostname}</div>
                                <div className="text-sm font-medium text-gray-900 group-hover:text-blue-700 line-clamp-2">
                                  {chunk.web.title}
                                </div>
                                <div className="mt-2 flex justify-end">
                                    <ExternalLink size={12} className="text-gray-400" />
                                </div>
                              </a>
                        );
                    }
                    if (chunk.maps) {
                         return (
                             <a
                                key={idx}
                                href={chunk.maps.uri} // Usually a Google Maps link
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-white p-3 rounded-lg border border-gray-200 hover:border-secondary hover:shadow-md transition-all group"
                              >
                                <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                                    <MapPin size={10} /> Google Maps
                                </div>
                                <div className="text-sm font-medium text-gray-900 group-hover:text-blue-700 line-clamp-2">
                                  {chunk.maps.title}
                                </div>
                              </a>
                        );
                    }
                    return null;
                })
              ) : (
                <div className="text-sm text-gray-500 italic">No se citaron fuentes específicas.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
)