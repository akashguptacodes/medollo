import React, { useState } from 'react';
import { User, MapPin, Clock, FileText, Heart, Settings, LogOut } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('orders');

  const mockOrders = [
    {
      id: 'ORD001',
      date: '2024-01-20',
      status: 'Delivered',
      items: ['Paracetamol 650mg', 'Cough Syrup'],
      total: 125,
      deliveryTime: '12 mins'
    },
    {
      id: 'ORD002',
      date: '2024-01-18',
      status: 'Delivered',
      items: ['Blood Sugar Test', 'CBC Test'],
      total: 550,
      deliveryTime: '8 mins'
    }
  ];

  const tabs = [
    { id: 'orders', label: 'My Orders', icon: Clock },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'prescriptions', label: 'Prescriptions', icon: FileText },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <User className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">John Doe</h3>
                  <p className="text-gray-600 text-sm">john.doe@example.com</p>
                  <p className="text-gray-600 text-sm">+91 9876543210</p>
                </div>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-100 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
                
                <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors">
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </Card>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <Card className="p-6">
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">My Orders</h2>
                  <div className="space-y-4">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">Order #{order.id}</h4>
                            <p className="text-sm text-gray-600">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              order.status === 'Delivered' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {order.status}
                            </span>
                            <p className="text-sm text-gray-600 mt-1">Delivered in {order.deliveryTime}</p>
                          </div>
                        </div>
                        <div className="mb-3">
                          <p className="text-sm text-gray-600">Items: {order.items.join(', ')}</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Total: ₹{order.total}</span>
                          <div className="space-x-2">
                            <Button size="small" variant="outline">View Details</Button>
                            <Button size="small">Reorder</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'addresses' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Saved Addresses</h2>
                  <div className="space-y-4 mb-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Home</h4>
                          <p className="text-gray-600">123 Main Street, HSR Layout</p>
                          <p className="text-gray-600">Bangalore 560102</p>
                        </div>
                        <div className="space-x-2">
                          <Button size="small" variant="outline">Edit</Button>
                          <Button size="small" variant="outline">Delete</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Office</h4>
                          <p className="text-gray-600">456 Tech Park, Electronic City</p>
                          <p className="text-gray-600">Bangalore 560100</p>
                        </div>
                        <div className="space-x-2">
                          <Button size="small" variant="outline">Edit</Button>
                          <Button size="small" variant="outline">Delete</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button>+ Add New Address</Button>
                </div>
              )}

              {activeTab === 'prescriptions' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">My Prescriptions</h2>
                  <div className="text-center py-12">
                    <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">No prescriptions uploaded yet</p>
                    <Button>Upload Prescription</Button>
                  </div>
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>
                  <div className="text-center py-12">
                    <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">No items in wishlist</p>
                    <Button>Browse Medicines</Button>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue="john.doe@example.com"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        defaultValue="+91 9876543210"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <Button>Save Changes</Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;