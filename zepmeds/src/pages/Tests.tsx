import React, { useState } from 'react';
import { Calendar, Clock, Home, Star } from 'lucide-react';
import { healthTests } from '../services/mockData';
import { useCart } from '../context/CartContext';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Tests: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { dispatch } = useCart();

  const testCategories = [
    'All Tests',
    'Blood Test',
    'Sugar',
    'COVID',
    'Thyroid',
    'Liver Function',
    'Kidney Function'
  ];

  const filteredTests = selectedCategory && selectedCategory !== 'All Tests'
    ? healthTests.filter(test => test.category === selectedCategory)
    : healthTests;

  const handleBookTest = (test: any) => {
    dispatch({ type: 'ADD_ITEM', payload: { item: test, type: 'test' } });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Health Tests at Home</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Book lab tests online and get sample collection at your doorstep. 
              Fast, safe, and reliable health checkups.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center bg-white dark:bg-gray-800">
            <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Home Collection</h3>
            <p className="text-gray-600 dark:text-gray-300">Safe sample collection at your doorstep</p>
          </Card>
          <Card className="p-6 text-center bg-white dark:bg-gray-800">
            <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Fast Reports</h3>
            <p className="text-gray-600 dark:text-gray-300">Get reports within 2-24 hours</p>
          </Card>
          <Card className="p-6 text-center bg-white dark:bg-gray-800">
            <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Easy Booking</h3>
            <p className="text-gray-600 dark:text-gray-300">Schedule tests at your convenience</p>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Popular Health Tests</h2>
          <div className="flex flex-wrap gap-2">
            {testCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  selectedCategory === category || (selectedCategory === '' && category === 'All Tests')
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-purple-600 hover:text-purple-600 dark:hover:text-purple-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => (
            <Card key={test.id} className="overflow-hidden bg-white dark:bg-gray-800">
              <img 
                src={test.image} 
                alt={test.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 px-2 py-1 rounded">
                    {test.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{test.rating}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">({test.reviews})</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{test.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{test.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Report in {test.reportTime}</span>
                  </div>
                  {test.homeCollection && (
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Home className="h-4 w-4 mr-2" />
                      <span>Home collection available</span>
                    </div>
                  )}
                  {test.preparationRequired && (
                    <div className="text-sm text-orange-600 dark:text-orange-400">
                      ⚠️ Fasting required
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">₹{test.price}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">₹{test.originalPrice}</span>
                    <div className="text-sm text-green-600 dark:text-green-400">
                      {Math.round(((test.originalPrice - test.price) / test.originalPrice) * 100)}% OFF
                    </div>
                  </div>
                  <Button onClick={() => handleBookTest(test)}>
                    Book Test
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help Choosing Tests?</h3>
          <p className="text-blue-100 mb-6">
            Consult with our healthcare experts to get personalized test recommendations.
          </p>
          <Button variant="outline" className="border-white text-blue-500 hover:bg-white hover:text-blue-600">
            Talk to Expert
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tests;