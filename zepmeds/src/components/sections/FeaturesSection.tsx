import React from 'react';
import { Tilt } from 'react-tilt';
import { Clock, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../services/variants';
import Card from '../ui/Card';

const FeaturedProductSection: React.FC = () => {
  const features = [
    {
      icon: <Clock className="h-10 w-10 text-white" />,
      title: "Lightning Fast",
      description: "Get your medicines delivered to your doorstep in under 15 minutes with our hyperlocal network.",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      cardBg: "bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700"
    },
    {
      icon: <Shield className="h-10 w-10 text-white" />,
      title: "100% Genuine",
      description: "All medicines sourced directly from licensed pharmacies and verified manufacturers.",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600",
      cardBg: "bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-gray-700"
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service for all your medical needs and emergencies.",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      cardBg: "bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-gray-700"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0
        }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 dark:from-cyan-400 dark:to-green-400 bg-clip-text text-transparent">
              Medollo?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-sans">
            We're revolutionizing medicine delivery with our ultra-fast service and commitment to quality healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Tilt key={index} options={{ max: 20, scale: 1.08, speed: 400 }}>
              <Card className={`p-8 text-center group ${feature.cardBg} border-0 h-full`}>
                <div className={`${feature.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl animate-float`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-display">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-sans">{feature.description}</p>
              </Card>
            </Tilt>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProductSection; 