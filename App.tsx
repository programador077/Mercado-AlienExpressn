import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { SellerStudio } from './pages/SellerStudio';
import { MarketIntelligence } from './pages/MarketIntelligence';
import { ProductDetails } from './pages/ProductDetails';
import { ChatAssistant } from './components/ChatAssistant';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/seller" element={<SellerStudio />} />
            <Route path="/market-intel" element={<MarketIntelligence />} />
            {/* Fallback route for demo purposes just goes to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        
        <footer className="bg-white border-t border-gray-200 py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Mercado AlienExpress. Envíos por Andreani y Oca. Solo para Argentina.</p>
            <p className="mt-2 text-xs">
              Potenciado por Google Gemini.
            </p>
          </div>
        </footer>

        <ChatAssistant />
      </div>
    </Router>
  );
};

export default App;