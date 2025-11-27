import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { SmartShopping } from '../components/SmartShopping';
import { SAMPLE_PRODUCTS } from '../data/products';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const [visibleProducts, setVisibleProducts] = useState(12);

  const showMore = () => {
    setVisibleProducts(prev => Math.min(prev + 12, SAMPLE_PRODUCTS.length));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-secondary to-blue-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
              <Sparkles size={14} className="text-primary" />
              <span>Potenciado por Gemini 2.5</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              El Futuro del <span className="text-primary">E-commerce</span> en Argentina.
            </h1>
            <p className="text-lg text-blue-100 max-w-lg">
              Comprá inteligente con IA, datos de mercado en tiempo real y herramientas interactivas. Envíos a todo el país por <strong>Andreani</strong> y <strong>Oca</strong>.
            </p>
            <div className="flex gap-4">
                <Link to="/market-intel" className="bg-primary text-secondary px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                  Explorar Tendencias
                </Link>
                <Link to="/seller" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-white/30 backdrop-blur-sm">
                  Empezar a Vender
                </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
             <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary rounded-full filter blur-3xl opacity-20"></div>
            <img 
              src="https://picsum.photos/800/600?random=hero" 
              alt="Shopping Hero" 
              className="relative z-10 rounded-2xl shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white/10"
            />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
        
        {/* Smart Shopping Section (AI) */}
        <SmartShopping />

        <div className="flex items-center justify-between mb-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-800">Recomendaciones de Hoy</h2>
          <button className="text-blue-600 font-medium hover:underline flex items-center gap-1">
            Ver historial <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {SAMPLE_PRODUCTS.slice(0, visibleProducts).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {visibleProducts < SAMPLE_PRODUCTS.length && (
          <div className="flex justify-center mb-12">
            <button 
              onClick={showMore}
              className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 hover:border-secondary transition-all shadow-sm"
            >
              Ver más productos
            </button>
          </div>
        )}
        
        {/* Promo Section */}
        <div className="mt-8 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8">
             <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Seller Studio: Publicaciones con IA</h3>
                <p className="text-gray-600 mb-6">
                    ¿No tenés fotógrafo profesional? No hay problema. Usá nuestro editor con <span className="font-semibold text-secondary">Gemini 2.5 Flash Image</span> para mejorar tus fotos de producto con simples indicaciones de texto como "agregar fondo de estudio" o "mejorar iluminación".
                </p>
                <Link to="/seller" className="text-secondary font-bold hover:underline flex items-center gap-2">
                    Probar Seller Studio <ArrowRight size={18} />
                </Link>
             </div>
             <div className="md:w-1/3 w-full h-48 bg-gray-100 rounded-lg overflow-hidden relative">
                 <img src="https://picsum.photos/600/400?grayscale" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Editor Demo" />
                 <div className="absolute inset-0 flex items-center justify-center">
                     <div className="bg-white/90 backdrop-blur px-4 py-2 rounded shadow-lg text-sm font-medium">
                         "Agregar fondo colorido"
                     </div>
                 </div>
             </div>
        </div>
      </main>
    </div>
  );
};