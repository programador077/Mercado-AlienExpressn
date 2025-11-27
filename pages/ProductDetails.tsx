import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SAMPLE_PRODUCTS } from '../data/products';
import { Star, Truck, ShieldCheck, Heart, Share2, Award, ChevronLeft, MessageSquare } from 'lucide-react';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = SAMPLE_PRODUCTS.find(p => p.id === id);
  const [question, setQuestion] = useState('');
  const [questionsList, setQuestionsList] = useState<{q: string, a?: string, date: string}[]>([
    { q: "Hola, ¿tienen stock para envío inmediato?", a: "¡Hola! Sí, tenemos stock disponible para despacho hoy mismo por Andreani. Saludos.", date: "Hace 2 días" },
    { q: "¿Hacen factura A?", a: "Sí, realizamos factura A y B. Los datos se cargan al momento de la compra.", date: "Hace 5 días" }
  ]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Producto no encontrado</h2>
        <Link to="/" className="text-secondary hover:underline">Volver al inicio</Link>
      </div>
    );
  }

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    // Simulate adding a question
    setQuestionsList(prev => [
      { q: question, date: "Recién" },
      ...prev
    ]);
    setQuestion('');
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-secondary font-medium">Volver al listado</Link>
          <span className="mx-2">|</span>
          <span className="text-gray-800">{product.category}</span>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            
            {/* Left: Image */}
            <div className="md:col-span-2 p-6 md:p-8 flex items-center justify-center bg-white border-b md:border-b-0 md:border-r border-gray-100">
               <div className="relative w-full max-w-lg aspect-square">
                 <img 
                   src={product.image} 
                   alt={product.title} 
                   className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                 />
               </div>
            </div>

            {/* Right: Details */}
            <div className="p-6 md:p-8 flex flex-col">
              <span className="text-sm text-gray-500 mb-2">Nuevo  |  {Math.floor(Math.random() * 500) + 100} vendidos</span>
              <h1 className="text-2xl font-semibold text-gray-900 mb-3 leading-snug">
                {product.title}
              </h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} stroke="currentColor" className={i < Math.floor(product.rating) ? "text-primary" : "text-gray-300"} />
                  ))}
                </div>
                <span className="text-sm text-gray-500">({product.reviews} opiniones)</span>
              </div>

              {product.rating >= 4.5 && (
                 <div className="bg-orange-50 text-orange-800 text-xs font-bold px-2 py-1 rounded w-fit mb-4 flex items-center gap-1">
                   <Award size={12} /> MÁS VENDIDO
                 </div>
              )}

              <div className="text-4xl font-light text-gray-900 mb-2">
                $ {product.price.toLocaleString('es-AR')}
              </div>
              <p className="text-sm text-gray-500 mb-6">en 6x $ {(product.price / 6).toLocaleString('es-AR', {maximumFractionDigits: 0})} sin interés</p>

              {/* Shipping Info */}
              <div className="mb-6 space-y-3">
                 <div className="flex gap-3 text-green-600">
                    <Truck size={20} />
                    <div>
                      <p className="font-semibold text-sm">Llega gratis mañana</p>
                      <p className="text-xs text-gray-500">Comprando dentro de las próximas 2 h 30 min. Envíos por Andreani.</p>
                    </div>
                 </div>
                 <div className="flex gap-3 text-green-600">
                    <ShieldCheck size={20} />
                    <div>
                      <p className="font-semibold text-sm">Devolución gratis</p>
                      <p className="text-xs text-gray-500">Tenés 30 días desde que lo recibís.</p>
                    </div>
                 </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 mt-auto">
                <button className="w-full bg-secondary text-white py-3.5 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/10">
                  Comprar ahora
                </button>
                <button className="w-full bg-blue-50 text-secondary py-3.5 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
                  Agregar al carrito
                </button>
              </div>

               <div className="flex gap-4 mt-6 justify-center">
                  <button className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1">
                     <Heart size={16} /> Agregar a favoritos
                  </button>
                  <button className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1">
                     <Share2 size={16} /> Compartir
                  </button>
               </div>
            </div>
          </div>

          {/* Bottom Description */}
          <div className="border-t border-gray-200 p-6 md:p-8">
            <h2 className="text-xl font-normal text-gray-900 mb-4">Descripción</h2>
            <p className="text-gray-600 leading-relaxed text-lg max-w-4xl">
              {product.description}
            </p>
          </div>

          {/* Q&A Section */}
          <div className="border-t border-gray-200 p-6 md:p-8 bg-gray-50/50">
            <h2 className="text-xl font-normal text-gray-900 mb-6">Preguntas y respuestas</h2>
            
            <form onSubmit={handleAskQuestion} className="max-w-3xl mb-10">
              <h3 className="text-base font-semibold text-gray-800 mb-3">Preguntale al vendedor</h3>
              <div className="flex gap-3">
                <input 
                  type="text" 
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Escribí tu pregunta..." 
                  className="flex-grow border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent shadow-sm"
                />
                <button 
                  type="submit" 
                  disabled={!question.trim()}
                  className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Preguntar
                </button>
              </div>
            </form>

            <div className="max-w-3xl space-y-6">
              <h3 className="text-base font-semibold text-gray-800 mb-4">Últimas preguntas</h3>
              {questionsList.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-start gap-3">
                    <MessageSquare size={16} className="text-gray-400 mt-1" />
                    <p className="text-gray-800">{item.q}</p>
                  </div>
                  {item.a ? (
                     <div className="flex items-start gap-3 pl-8 relative">
                        <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-gray-200"></div>
                        <p className="text-gray-500 text-sm">
                          {item.a} <span className="text-gray-400 ml-2 text-xs">{item.date}</span>
                        </p>
                     </div>
                  ) : (
                    <div className="pl-8 text-xs text-gray-400 italic">Esperando respuesta del vendedor...</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};