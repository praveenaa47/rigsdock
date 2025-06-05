import React, { useState } from 'react';
import { Menu, X, User, Package, Download, MapPin, Settings, BarChart3, Heart, LogOut } from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function UserAccount() {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Dashboard');

   const menuItems = [
    { name: 'Dashboard', icon: BarChart3 },
    { name: 'Orders', icon: Package },
    { name: 'Downloads', icon: Download },
    { name: 'Addresses', icon: MapPin },
    { name: 'Account details', icon: Settings },
    { name: 'Compare', icon: BarChart3 },
    { name: 'Wishlist', icon: Heart },
    { name: 'Log out', icon: LogOut }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (itemName) => {
    setActiveSection(itemName);
    setIsMobileMenuOpen(false);
  };
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="ml-2 md:ml-0 text-xl font-semibold text-gray-900">
               My Account
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-8 h-8 text-gray-600" />
                <span className="hidden sm:block text-sm font-medium text-gray-700">User</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className={`md:w-64 ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleMenuClick(item.name)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeSection === item.name
                          ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              {activeSection === 'Dashboard' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-600 mb-4">
                      From your account dashboard you can view your{' '}
                      <button 
                        onClick={() => handleMenuClick('Orders')}
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        recent orders
                      </button>
                      , manage your{' '}
                      <button 
                        onClick={() => handleMenuClick('Addresses')}
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        shipping and billing addresses
                      </button>
                      , and{' '}
                      <button 
                        onClick={() => handleMenuClick('Account details')}
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        edit your password and account details
                      </button>
                      .
                    </p>
                  </div>
                </div>
              )}

              {activeSection === 'Orders' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Orders</h2>
                  <div className="text-center py-12">
                    <Package className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-500">No orders found.</p>
                  </div>
                </div>
              )}

              {activeSection === 'Downloads' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Downloads</h2>
                  <div className="text-center py-12">
                    <Download className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-500">No downloads available.</p>
                  </div>
                </div>
              )}

              {activeSection === 'Addresses' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Addresses</h2>
                  <div className="text-center py-12">
                    <MapPin className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-500">No addresses found.</p>
                  </div>
                </div>
              )}

              {activeSection === 'Account details' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Details</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          defaultValue="Luka"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="luka@example.com"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Save Changes
                    </button>
                  </form>
                </div>
              )}

              {activeSection === 'Compare' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Compare</h2>
                  <div className="text-center py-12">
                    <BarChart3 className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-500">No products to compare.</p>
                  </div>
                </div>
              )}

              {activeSection === 'Wishlist' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Wishlist</h2>
                  <div className="text-center py-12">
                    <Heart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-500">No items in your wishlist.</p>
                  </div>
                </div>
              )}

              {activeSection === 'Log out' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Log Out</h2>
                  <p className="text-gray-600 mb-6">Are you sure you want to log out?</p>
                  <div className="flex space-x-4">
                    <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
                      Yes, Log Out
                    </button>
                    <button 
                      onClick={() => handleMenuClick('Dashboard')}
                      className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default UserAccount
