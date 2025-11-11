import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Droplet, Home, LayoutDashboard } from 'lucide-react';
import BioFlowWebsite from './BioFlowWebsite';
import BioFlowMarketplace from './BioFlowMarketplace';

// Navigation component that appears on both views
const Navigation = () => {
  const location = useLocation();
  const isMarketplace = location.pathname === '/dashboard';

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center space-x-2">
      <Link
        to="/"
        className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all text-sm shadow-lg ${
          !isMarketplace
            ? 'bg-red-600 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-300'
        }`}
      >
        <Home className="w-4 h-4" />
        <span className="hidden sm:inline">Home</span>
      </Link>
      <Link
        to="/dashboard"
        className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all text-sm shadow-lg ${
          isMarketplace
            ? 'bg-red-600 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-300'
        }`}
      >
        <LayoutDashboard className="w-4 h-4" />
        <span className="hidden sm:inline">Dashboard</span>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<BioFlowWebsite />} />
        <Route path="/dashboard" element={<BioFlowMarketplace />} />
      </Routes>
    </Router>
  );
};

export default App;
