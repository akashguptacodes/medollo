import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight } from 'lucide-react';

const EmergencyBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-red-500 via-red-600 to-pink-600 text-white py-6 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="animate-pulse bg-red-400/30 rounded-full p-3">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <span className="font-bold text-lg">🚨 EMERGENCY MEDICINES AVAILABLE 24/7</span>
              <p className="text-red-100 text-sm">Critical medicines delivered in under 10 minutes</p>
            </div>
          </div>
          <Link
            to="/medicines?category=emergency"
            className="hidden md:flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-xl transition-all duration-200 font-semibold"
          >
            <span>Order Now</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner; 