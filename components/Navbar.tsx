import React from 'react';
import { ShoppingCart, Menu, Search, MapPin, Store } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary text-secondary shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Menu */}
          <div className="flex items-center gap-4">
            <button className="p-1 rounded-md hover:bg-yellow-500 focus:outline-none md:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-secondary text-primary p-1.5 rounded-lg font-bold text-xl group-hover:scale-105 transition-transform">
                M
              </div>
              <span className="font-bold text-xl tracking-tight hidden sm:block">Mercado AlienExpress</span>
            </Link>
          </div>

          {/* Search Bar (Visual Only) */}
          <div className="flex-1 max-w-2xl mx-4 hidden md:flex">
            <div className="relative w-full">
              <input
                type="text"
                className="w-full bg-white text-gray-800 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
                placeholder="Buscar productos, marcas y más..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 md:gap-6">
             <Link to="/market-intel" className="hidden md:flex flex-col items-center group text-sm font-medium hover:text-blue-800 transition-colors">
              <MapPin className="h-5 w-5 mb-0.5 group-hover:scale-110 transition-transform" />
              <span className="text-xs">Ubicaciones</span>
            </Link>

            <Link to="/seller" className="hidden md:flex flex-col items-center group text-sm font-medium hover:text-blue-800 transition-colors">
              <Store className="h-5 w-5 mb-0.5 group-hover:scale-110 transition-transform" />
              <span className="text-xs">Vender</span>
            </Link>

            <div className="relative cursor-pointer hover:text-blue-800 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </div>

            <div className="h-8 w-8 rounded-full bg-blue-100 border-2 border-secondary flex items-center justify-center text-secondary font-bold">
              AR
            </div>
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
             <div className="relative w-full">
              <input
                type="text"
                className="w-full bg-white text-gray-800 rounded-md py-2 px-4 pl-10 focus:outline-none shadow-sm"
                placeholder="Buscar productos..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            </div>
        </div>
      </div>
    </nav>
  );
};