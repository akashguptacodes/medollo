import React, { useState } from 'react';
import { MapPin, Clock, CreditCard, Wallet, Banknote } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Checkout: React.FC = () => {
  const { state, dispatch } = useCart();
  const [selectedAddress, setSelectedAddress] = useState('home');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);

  const addresses = [
    {
      id: 'home',
      type: 'Home',
      address: '123 Main Street, HSR Layout, Bangalore 560102',
      landmark: 'Near City Mall'
    },
    {
      id: 'office',
      type: 'Office',
      address: '456 Tech Park, Electronic City, Bangalore 560100',
      landmark: 'Building A, 4th Floor'
    }
  ];

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      alert('Order placed successfully! Your medicines will be delivered in 10-15 minutes.');
      dispatch({ type: 'CLEAR_CART' });
      setIsProcessing(false);
    }, 2000);
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No items to checkout</h2>
          <Button>
            <a href="/medicines">Browse Medicines</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Delivery Address
              </h3>
              
              <div className="space-y-4">
                {addresses.map((addr) => (
                  <label key={addr.id} className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="address"
                      value={addr.id}
                      checked={selectedAddress === addr.id}
                      onChange={(e) => setSelectedAddress(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium">{addr.type}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          {addr.type.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{addr.address}</p>
                      <p className="text-gray-500 text-xs">{addr.landmark}</p>
                    </div>
                  </label>
                ))}
                
                <Button variant="outline" className="w-full">
                  + Add New Address
                </Button>
              </div>
            </Card>

            {/* Payment Method */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Payment Method
              </h3>
              
              <div className="space-y-4">
                <label className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <Wallet className="h-6 w-6 text-purple-600" />
                  <div>
                    <div className="font-medium">UPI</div>
                    <div className="text-sm text-gray-600">Pay using Google Pay, PhonePe, Paytm</div>
                  </div>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <CreditCard className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-medium">Credit/Debit Card</div>
                    <div className="text-sm text-gray-600">Visa, MasterCard, RuPay</div>
                  </div>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <Banknote className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-medium">Cash on Delivery</div>
                    <div className="text-sm text-gray-600">Pay when you receive</div>
                  </div>
                </label>
              </div>
            </Card>

            {/* Order Items */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Order Items ({state.itemCount})</h3>
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.item.image}
                      alt={item.item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.item.name}</h4>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹{item.item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₹{state.total}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery Fee</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Platform Fee</span>
                  <span>₹5</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>₹{state.total + 5}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2 text-green-800">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">Delivery in 10-15 mins</span>
                </div>
                <p className="text-sm text-green-700 mt-1">
                  Your order will be delivered to {addresses.find(a => a.id === selectedAddress)?.type}
                </p>
              </div>

              <Button
                size="large"
                className="w-full"
                onClick={handlePlaceOrder}
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : `Place Order • ₹${state.total + 5}`}
              </Button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By placing this order, you agree to our terms and conditions
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;