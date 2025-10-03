import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Clock, Shield, Truck, Plus, Minus, Heart } from 'lucide-react';
import { medicines, healthTests } from '../services/mockData';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const { dispatch } = useCart();

  // Find medicine first, then health test
  const medicine = medicines.find(m => m.id === id);
  const test = healthTests.find(t => t.id === id);
  const product = medicine || test;
  const productType = medicine ? 'medicine' : 'test';

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link to="/medicines" className="text-blue-600 hover:text-blue-700">
            Browse Medicines
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          item: product,
          type: productType as 'medicine' | 'test'
        }
      });
    }
  };

  const renderMedicineDetails = (med: any) => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="font-semibold text-lg mb-4">Product Information</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Manufacturer:</span>
              <span className="font-medium">{med.manufacturer}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Category:</span>
              <span className="font-medium">{med.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Prescription:</span>
              <span className={`font-medium ${med.prescriptionRequired ? 'text-orange-600' : 'text-green-600'}`}>
                {med.prescriptionRequired ? 'Required' : 'Not Required'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Stock:</span>
              <span className={`font-medium ${med.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {med.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Dosage & Usage</h3>
          <p className="text-gray-600 text-sm mb-4">{med.dosage}</p>

          <h4 className="font-medium mb-2">Side Effects:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {med.sideEffects.map((effect: string, index: number) => (
              <li key={index}>• {effect}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );

  const renderTestDetails = (test: any) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div>
        <h3 className="font-semibold text-lg mb-4">Test Information</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Category:</span>
            <span className="font-medium">{test.category}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Report Time:</span>
            <span className="font-medium">{test.reportTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Home Collection:</span>
            <span className={`font-medium ${test.homeCollection ? 'text-green-600' : 'text-gray-600'}`}>
              {test.homeCollection ? 'Available' : 'Not Available'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Preparation:</span>
            <span className={`font-medium ${test.preparationRequired ? 'text-orange-600' : 'text-green-600'}`}>
              {test.preparationRequired ? 'Required' : 'None'}
            </span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-4">Test Description</h3>
        <p className="text-gray-600 text-sm">{test.description}</p>

        {test.preparationRequired && (
          <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-orange-800 text-sm font-medium">
              ⚠️ Fasting required for 8-12 hours before sample collection
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <span>/</span>
          <Link to={productType === 'medicine' ? '/medicines' : '/tests'} className="hover:text-gray-900">
            {productType === 'medicine' ? 'Medicines' : 'Tests'}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <Card className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </Card>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              {medicine && <p className="text-gray-600">by {medicine.manufacturer}</p>}

              <div className="flex items-center space-x-4 mt-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-500">({product.reviews} reviews)</span>
                </div>

                {medicine && medicine.deliveryTime && (
                  <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{medicine.deliveryTime}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
              <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </span>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">100% Genuine</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-600">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-gray-600">24/7 Available</span>
              </div>
            </div>

            {/* Quantity Selector (for medicines only) */}
            {/* {medicine && (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )} */}

            {/* Prescription Warning */}
            {medicine && medicine.prescriptionRequired && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-orange-800 text-sm">
                  ⚠️ This medicine requires a valid prescription. Please upload your prescription during checkout.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="mt-12 p-6">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-2 border-b-2 font-medium text-sm ${activeTab === 'description'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('details')}
                className={`py-2 border-b-2 font-medium text-sm ${activeTab === 'details'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
              >
                Details
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-2 border-b-2 font-medium text-sm ${activeTab === 'reviews'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
              >
                Reviews ({product.reviews})
              </button>
            </div>
          </div>

          <div className="py-6">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-600">{product.description}</p>
              </div>
            )}

            {activeTab === 'details' && (
              <div>
                {medicine ? renderMedicineDetails(medicine) : renderTestDetails(test)}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <p className="text-gray-600">Customer reviews will be displayed here.</p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;