import React, { useState } from 'react'
import { Star, Grid, List, ChevronDown, ChevronUp, Heart  } from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

function Shop() {
    const [viewMode, setViewMode] = useState('horizontal'); 
  const [expandedFilters, setExpandedFilters] = useState({
    categories: true,
    highlight: true,
    brand: true,
    price: true,
    ratings: true
  });

  const navigate = useNavigate()

  const products = [
    {
      id: 1,
      name: "Apple AirPods Pro (2nd Gen) with MagSafe Charging Case",
      price: 299,
      originalPrice: 1900,
      // discount: 5,
      rating: 4,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      features: ["Brand-sony"],
      buttonText: "Add to cart"
    },
    {
      id: 2,
      name: "Apple HomePod Assistant and Voice Recognition",
      price: 397,
      originalPrice: null,
      // discount: null,
      rating: 4,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      features: ["Brand-sony"],
      buttonText: "Add to cart"
    },
    {
      id: 3,
      name: "Apple HomePod Assistant and Voice Recognition",
      price: 249,
      originalPrice: 349,
      // discount: 15,
      rating: 5,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      features: ["Brand-sony"],
      buttonText: "Add to carts"
    },
    {
      id: 4,
      name: "Apple HomePod Assistant and Voice Recognition",
      price: 349,
      originalPrice: 399,
      // discount: 10,
      rating: 5,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      features: ["Brand-sony"],
      buttonText: "Add to cart"
    },
    {
      id: 5,
      name: "Apple HomePod Assistant and Voice Recognition",
      price: 799,
      originalPrice: 899,
      // discount: 8,
      rating: 5,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      features: ["Brand-sony"],
      buttonText: "Add to cart"
    },
    {
      id: 6,
      name: "Apple HomePod Assistant and Voice Recognition",
      price: 1199,
      originalPrice: 1299,
      // discount: 12,
      rating: 5,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      features: ["Brand-sony"],
      buttonText: "Add to cart"
    },
    {
      id: 7,
      name: "Apple HomePod Assistant and Voice Recognition",
      price: 1199,
      originalPrice: 1299,
      // discount: 12,
      rating: 5,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      features: ["Brand-sony"],
      buttonText: "Add to cart"
    },
    {
      id: 8,
      name: "Apple HomePod Assistant and Voice Recognition",
      price: 1199,
      originalPrice: 1299,
      // discount: 12,
      rating: 5,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      features: ["Brand-sony"],
      buttonText: "Add to cart"
    },
  ];

  const categories = [
    { name: "Our Store", count: 24 },
    { name: "Storage Devices", count: 5 },
    { name: "Input Devices", count: 6 },
    { name: "Cooling Sysytem", count: 6 },
    { name: "Laptop Screw", count: 6 },
    { name: "Output Devices", count: 20 },
    { name: "Gaming Chairs", count: 7 }
  ];

  const highlights = [
    "All Products",
    "Best Seller",
    "New Arrivals",
    "Sale",
    "Hot Items"
  ];

  const brands = [
    "Apple",
    "Samsung",
    "Sony",
    "Google",
    "Microsoft",
    "Dell",
    "HP"
  ];

  const toggleFilter = (filterName) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

 const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const ProductCard = ({ product }) => {
    const handleProductClick = () => {
      navigate(`/product-details/${product.id}`);
    };

    const ImageWithWishlist = (
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover cursor-pointer"
          onClick={handleProductClick}
        />
        <button
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-1 rounded-full shadow"
          onClick={(e) => {
            e.stopPropagation();
            console.log(`Added ${product.name} to wishlist`);
          }}
        >
          <Heart className="text-red-500 w-5 h-5" />
        </button>
      </div>
    );

    if (viewMode === 'vertical') {
      return (
        <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
          <div className="h-56 mb-4 bg-gray-100 rounded-lg overflow-hidden">
            {ImageWithWishlist}
          </div>
          <h3 className="font-medium text-gray-900 mb-3 line-clamp-2 text-base">{product.name}</h3>
          <div className="flex items-center mb-3">{renderStars(product.rating)}</div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-semibold text-blue-800">${product.price}</span>
            {product.originalPrice && (
              <span className="text-base text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          <ul className="text-sm text-gray-600 mb-4 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>{feature}
              </li>
            ))}
          </ul>
          <button className="w-full bg-blue-800 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-800 transition-colors text-base">
            {product.buttonText}
          </button>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-40 h-40 bg-gray-100 rounded-lg overflow-hidden">
            {ImageWithWishlist}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-medium text-gray-900 mb-3">{product.name}</h3>
            <div className="flex items-center mb-4">{renderStars(product.rating)}</div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl font-semibold text-blue-800">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>
            <ul className="text-gray-600 mb-6 space-y-2 text-base">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>{feature}
                </li>
              ))}
            </ul>
            <button className="bg-blue-800 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors text-base">
              {product.buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <nav className="text-sm text-gray-600 text-center">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span>shop</span>
            </nav>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">SHOP</h1>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50">
       <div className="max-w-full px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters */}
 <div className="w-full lg:w-80 space-y-6">
              {/* Shop By Categories */}
            <div className="bg-white rounded-lg p-6">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFilter('categories')}
              >
                <h3 className="text-xl font-semibold text-gray-900">Shop By Categories</h3>
                {expandedFilters.categories ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </div>
              {expandedFilters.categories && (
                <div className="mt-5 space-y-3">
                  {categories.map((category, index) => (
                    <label key={index} className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-3 rounded">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-3 text-blue-600 w-4 h-4" />
                        <span className="text-gray-700 text-base">{category.name}</span>
                      </div>
                      <span className="text-gray-500 text-base">({category.count})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Highlight */}
            <div className="bg-white rounded-lg p-6">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFilter('highlight')}
              >
                <h3 className="text-xl font-semibold text-gray-900">Highlight</h3>
                {expandedFilters.highlight ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </div>
              {expandedFilters.highlight && (
                <div className="mt-5 space-y-3">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer py-3 px-3 rounded text-base ${
                        index === 0 ? 'text-blue-800 font-medium' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Filter by Brand */}
            <div className="bg-white rounded-lg p-6">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFilter('brand')}
              >
                <h3 className="text-xl font-semibold text-gray-900">Filter by Brand</h3>
                {expandedFilters.brand ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </div>
              {expandedFilters.brand && (
                <div className="mt-5 space-y-3">
                  {brands.map((brand, index) => (
                    <label key={index} className="flex items-center cursor-pointer hover:bg-gray-50 p-3 rounded">
                      <input type="checkbox" className="mr-3 text-blue-800 w-4 h-4" />
                      <span className="text-gray-700 text-base">{brand}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Filter by Price */}
            <div className="bg-white rounded-lg p-6">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFilter('price')}
              >
                <h3 className="text-xl font-semibold text-gray-900">Filter by Price</h3>
                {expandedFilters.price ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </div>
              {expandedFilters.price && (
                <div className="mt-5 space-y-4">
                  <div className="flex gap-3">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 text-base"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 text-base"
                    />
                  </div>
                  <button className="w-full bg-blue-800 text-white py-3 px-4 rounded-md hover:bg-blue-800 transition-colors text-base font-medium">
                    Filter
                  </button>
                </div>
              )}
            </div>

            {/* Filter by Ratings */}
            <div className="bg-white rounded-lg p-6">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFilter('ratings')}
              >
                <h3 className="text-xl font-semibold text-gray-900">Filter by Ratings</h3>
                {expandedFilters.ratings ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </div>
              {expandedFilters.ratings && (
                <div className="mt-5 space-y-3">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center cursor-pointer hover:bg-gray-50 p-3 rounded">
                      <input type="checkbox" className="mr-3 text-blue-800 w-4 h-4" />
                      <div className="flex items-center">
                        {renderStars(rating)}
                        <span className="ml-2 text-gray-700 text-base">& Up</span>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Products */}
          <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                <p className="text-gray-600 text-base">Showing 1–{products.length} of {products.length} results</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-white rounded-lg border border-gray-200 p-1">
                    <button
                      onClick={() => setViewMode('horizontal')}
                      className={`p-3 rounded ${viewMode === 'horizontal' ? 'bg-blue-800 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <List size={22} />
                    </button>
                    <button
                      onClick={() => setViewMode('vertical')}
                      className={`p-3 rounded ${viewMode === 'vertical' ? 'bg-blue-800 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <Grid size={22} />
                    </button>
                  </div>
                </div>
              </div>

              <div className={`gap-6 ${viewMode === 'vertical' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'space-y-6'}`}>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  <button className="px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 text-base">Previous</button>
                  <button className="px-4 py-3 bg-blue-800 text-white rounded-md text-base">1</button>
                  <button className="px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 text-base">2</button>
                  <button className="px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 text-base">3</button>
                  <button className="px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 text-base">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>



  )
}

export default Shop
