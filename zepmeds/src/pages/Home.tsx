import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import EmergencyBanner from '../components/sections/EmergencyBanner';
import StatsSection from '../components/sections/StatsSection';
import CategoriesSection from '../components/sections/CategoriesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import GetApp from '../components/GetApp';
import FeaturedProductSection from '../components/sections/FeaturesSection';
import { MedicineGrid } from '../components/sections/MedicineGrid';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <HeroSection />
      <EmergencyBanner />
      <StatsSection />
      <FeaturedProductSection />
      <CategoriesSection />
      <MedicineGrid/>
      <TestimonialsSection />
      <section className="py-20 bg-white dark:bg-gray-800">
        <GetApp />
      </section>
    </div>
  );
};

export default Home;