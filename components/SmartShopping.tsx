import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { SAMPLE_PRODUCTS } from '../data/products';
import { analyzeShoppingDeals } from '../services/gemini';
import { Sparkles, Zap, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SmartShopping: React.FC = () => {
  const [discountedProducts, setDiscountedProducts] = useState<Product[]>([]);
  const [aiAnalysis, setAiAnalysis] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDeals = async () => {
      // Filter products that have a discount
      const deals = SAMPLE_PRODUCTS.filter(
        p => p.originalPrice && p.originalPrice > p.price
      ).sort((a, b) => {
        // Sort by discount percentage descending
        const discountA = a.originalPrice ? (a.originalPrice - a.price) / a.originalPrice : 0;
        const discountB = b.originalPrice ? (b.originalPrice - b.price) / b.originalPrice : 0;
        return discountB - discountA;
      }).slice(0, 4); // Take top 4 deals

      setDiscountedProducts(deals);

      // Get AI analysis
      if (deals.length > 0) {
        try {
          const analysis = await analyzeShoppingDeals(deals);
          setAiAnalysis(analysis);
        } catch (e) {
          console.error(e);
        }
      }
      setLoading(false);
    };

    loadDeals();
  }, []);

  if (discountedProducts.length === 0) return null;

  return (
    <section className="py-8 bg-gradient-to-br from-indigo-900 to-secondary text-white rounded-2xl shadow-xl overflow-hidden relative my-8">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
       <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20">
            <Sparkles className="text-primary w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              Compra Inteligente <span className="text-primary text-sm font-normal px-2 py-0.5 bg-white/10 rounded-full border border-white/20">BETA</span>
            </h2>
            <p className="text-blue-100 mt-1 max-w-2xl">
              Nuestra IA analizó las tendencias y encontró estos descuentos imperdibles para vos.
            </p>
          </div>
        </div>

        {/* AI Insight Text */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 mb-8 relative">
           <Zap className="absolute top-4 right-4 text-yellow-400 w-5 h-5" />
           {loading ? (
             <div className="h-6 w-3/4 bg-white/20 rounded animate-pulse"></div>
           ) : (
             <p className="text-lg font-medium leading-relaxed italic">
               "{aiAnalysis}"
             </p>
           )}
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {discountedProducts.map((product) => {
            const discount = product.originalPrice 
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
              : 0;

            return (
              <Link to={`/product/${product.id}`} key={product.id} className="bg-white rounded-xl p-3 shadow-lg hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="relative aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100">
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm z-10 flex items-center gap-1">
                    <Tag size={12} /> {discount}% OFF
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-gray-800 font-medium text-sm line-clamp-2 h-10 leading-tight">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2">
                     <span className="text-gray-400 text-xs line-through decoration-red-400">
                       ${product.originalPrice?.toLocaleString('es-AR')}
                     </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary font-bold text-lg">
                      ${product.price.toLocaleString('es-AR')}
                    </span>
                    <div className="bg-secondary text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};