import React from 'react';
import { Product } from '../types';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col h-full border border-gray-100">
      <div className="relative pt-[100%] overflow-hidden bg-gray-50 group">
        <img
          src={product.image}
          alt={product.title}
          className="absolute top-0 left-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-2xl font-light text-gray-900 mb-1">
          $ {product.price.toLocaleString('es-AR')}
        </div>
        <h3 className="text-sm text-gray-600 line-clamp-2 mb-2 flex-grow">
          {product.title}
        </h3>
        {product.price > 50 && (
            <span className="text-xs font-bold text-green-600 mb-2">Envío Gratis</span>
        )}
        <div className="flex items-center gap-1 text-xs text-gray-400 mt-auto">
             <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} stroke="currentColor" className={i < Math.floor(product.rating) ? "text-primary" : "text-gray-300"} />
                ))}
             </div>
             <span>({product.reviews})</span>
        </div>
      </div>
    </Link>
  );
};