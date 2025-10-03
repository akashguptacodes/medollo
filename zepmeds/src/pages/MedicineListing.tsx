
import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import { Filter, Grid, List, Star } from 'lucide-react';

import { categories, medicines } from '../services/mockData'; // Replace with medicineCategories if needed
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const MedicinesListing: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [sortBy, setSortBy] = useState('popularity');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const searchQuery = searchParams.get('search') || '';
  const categoryParam = searchParams.get('category') || '';

  // Sync selectedCategory with URL param
useEffect(() => {
  setSelectedCategory(categoryParam);
}, [searchParams]);


  // Filter + Sort Logic
  const filteredItems = useMemo(() => {
    let filtered = medicines;

    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.manufacturer?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(item =>
        item.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    switch (sortBy) {
      case 'rating':
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case 'price-low':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...filtered].sort((a, b) => b.price - a.price);
      default:
        return filtered;
    }
  }, [searchQuery, selectedCategory, sortBy]);

  // Go to homepage and scroll to app-download section
  const goToAppDownload = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('app-download');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else {
      const el = document.getElementById('app-download');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2 font-display text-shadow">
              {searchQuery ? `Search results for "${searchQuery}"` : 'Our Medicines'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-sans">
              {filteredItems.length} items found
            </p>
          </div>

          <div className="flex items-center space-x-6 mt-6 md:mt-0">
            <div className="flex bg-gray-100 dark:bg-gray-700 rounded-xl p-1 shadow-inner">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-gray-600 shadow-lg text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-white dark:bg-gray-600 shadow-lg text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>

            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden shadow-lg"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'} lg:col-span-1`}>
            <Card className="p-8 sticky top-24 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-xl">
              <h3 className="font-black text-xl mb-6 text-gray-900 dark:text-white font-display">Filters</h3>

              <div className="mb-6">
                <h4 className="font-bold mb-4 text-gray-800 dark:text-gray-200 font-display">Categories</h4>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-600 p-2 rounded-lg">
                    <input
                      type="radio"
                      name="category"
                      value=""
                      checked={selectedCategory === ''}
                      onChange={() => setSelectedCategory('')}
                      className="mr-3"
                    />
                    <span className="text-gray-900 dark:text-white">All</span>
                  </label>
                  {categories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-600 p-2 rounded-lg"
                    >
                      <input
                        type="radio"
                        name="category"
                        value={category.name.toLowerCase()}
                        checked={selectedCategory === category.name.toLowerCase()}
                        onChange={() => setSelectedCategory(category.name.toLowerCase())}
                        className="mr-3"
                      />
                      <span className="text-gray-900 dark:text-white">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Medicines Grid/List */}
          <div className="lg:col-span-3">
            {filteredItems.length === 0 ? (
              <Card className="text-center py-16 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-xl">
                <p className="text-gray-500 dark:text-gray-400 text-xl mb-6 font-sans">
                  No items found matching your criteria.
                </p>
                <Button className="shadow-lg">
                  <Link to="/medicines">Show All</Link>
                </Button>
              </Card>
            ) : (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'
                    : 'space-y-6'
                }
              >
                {filteredItems.map((item) => (
                  <Tilt key={item.id} options={{ max: 12, scale: 1.03, speed: 300 }}>
                    <Card
                      className={`overflow-hidden group bg-white dark:bg-gray-800 border-0 shadow-xl transition-all duration-300 ${
                        viewMode === 'list' ? 'flex' : 'h-full flex flex-col'
                      }`}
                    >
                      <button onClick={goToAppDownload}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className={
                            viewMode === 'list'
                              ? 'w-32 h-32 object-cover'
                              : 'w-full h-48 object-cover'
                          }
                        />
                      </button>

                      <div className="p-6 flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-full">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{item.rating}</span>
                          </div>
                        </div>

                        <button onClick={goToAppDownload}>
                          <h3 className="font-bold text-lg text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 mb-1">
                            {item.name}
                          </h3>
                        </button>

                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.category}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{item.manufacturer}</p>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                          <div>
                            <span className="text-xl font-black text-gray-900 dark:text-white">₹{item.price}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">
                              ₹{item.originalPrice}
                            </span>
                            <div className="text-xs text-green-600 dark:text-green-400 font-bold">
                              {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Tilt>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicinesListing;
