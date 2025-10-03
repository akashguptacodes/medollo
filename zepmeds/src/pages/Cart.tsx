import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingCart, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingCart className="h-24 w-24 text-gray-300 dark:text-gray-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">Add medicines and health tests to get started</p>
            <div className="space-x-4">
              <Link to="/medicines">
                <Button size="large">Browse Medicines</Button>
              </Link>
              <Link to="/tests">
                <Button variant="outline" size="large">Book Health Tests</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">Shopping Cart</h1>
          <Button variant="ghost" onClick={clearCart} className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20">
            <Trash2 className="h-4 w-4 mr-2" />
            Clear Cart
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((cartItem) => (
              <Card key={cartItem.id} className="p-6 bg-white dark:bg-gray-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row gap-4">
                  <img
                    src={cartItem.item.image}
                    alt={cartItem.item.name}
                    className="w-full sm:w-24 h-32 sm:h-24 object-cover rounded-xl shadow-lg"
                  />
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                          {cartItem.item.name}
                        </h3>
                        {cartItem.type === 'medicine' && (
                          <>
                            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                              by {(cartItem.item as any).manufacturer}
                            </p>
                            <div className="flex items-center space-x-1 text-sm text-green-600 dark:text-green-400 font-bold">
                              <Clock className="h-4 w-4" />
                              <span>{(cartItem.item as any).deliveryTime}</span>
                            </div>
                          </>
                        )}
                        {cartItem.type === 'test' && (
                          <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                            {(cartItem.item as any).category} • Report in {(cartItem.item as any).reportTime}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(cartItem.id)}
                        className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-black text-gray-900 dark:text-white">
                          ₹{cartItem.item.price}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                          ₹{cartItem.item.originalPrice}
                        </span>
                      </div>

                      <div className="flex items-center border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-lg bg-white dark:bg-gray-700">
                        <button
                          onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
                          className="p-3 hover:bg-gray-100 dark:hover:bg-gray-600 disabled:opacity-50 rounded-l-xl transition-colors duration-200"
                          disabled={cartItem.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-6 py-3 border-x-2 border-gray-200 dark:border-gray-600 font-bold text-lg text-gray-900 dark:text-white">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
                          className="p-3 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-r-xl transition-colors duration-200"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-8 sticky top-24 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-2xl">
              <h3 className="text-2xl font-black mb-6 text-gray-900 dark:text-white">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-lg font-medium text-gray-900 dark:text-white">
                  <span>Items ({state.itemCount})</span>
                  <span>₹{state.total}</span>
                </div>
                <div className="flex justify-between text-lg font-medium text-gray-900 dark:text-white">
                  <span>Delivery Fee</span>
                  <span className="text-green-600 dark:text-green-400 font-bold">FREE</span>
                </div>
                <div className="border-t-2 border-gray-200 dark:border-gray-600 pt-4">
                  <div className="flex justify-between font-black text-2xl text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>₹{state.total}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2 text-green-800 font-bold">
                    <Clock className="h-5 w-5" />
                    <span className="font-medium">Estimated Delivery: 10-15 mins</span>
                  </div>
                </div>

                <Link to="/checkout" className="block">
                  <Button size="large" className="w-full shadow-xl">
                    Proceed to Checkout
                  </Button>
                </Link>

                <Link to="/medicines" className="block">
                  <Button variant="outline" size="large" className="w-full shadow-xl">
                    Continue Shopping
                  </Button>
                </Link>
              </div>

              <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8">
                <ShoppingCart className="h-16 w-16 text-gray-400" />
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl shadow-lg">
                <h4 className="font-bold text-blue-900 mb-3 text-lg">🎉 Available Offers</h4>
                <ul className="text-sm text-blue-800 space-y-2 font-medium">
                  <li>• Free delivery on orders above ₹299</li>
                  <li>• Buy 2 Get 1 Free on selected items</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;