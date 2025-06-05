import React, { useState } from 'react';
import { Star } from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const ProductDetail = () => {
  const [activeTab, setActiveTab] = useState('description');
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
    
  ];

  const product = {
    name: "Apple Airpods Pro (2nd Gen) with MagSafe Charging Case",
    brand: "Gallery",
    price: 299,
    maxPrice: 1900,
    rating: 4,
    features: [
      "Functional Crown",
      "Fhd Footage",
      "1.78\" Amoled"
    ],
    images: [
      "https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2017/10/lenovo-yoga-920-review-hero-01.jpg?itok=X2XzV-cq",
      "https://th.bing.com/th/id/OIP.Hk-T9-2lq2CMtHn7t-yOXwHaEx?pid=ImgDet&w=474&h=305&rs=1",
      "https://th.bing.com/th/id/OIP.UCJigVQaQMZExi9v8Nm-xwHaEx?pid=ImgDet&w=474&h=305&rs=1",
      "https://th.bing.com/th/id/OIP.E_EKOdA_pZUylvD2kTQiUgHaEx?pid=ImgDet&w=474&h=305&rs=1"
    ]
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={18}
        className={`${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section - Images */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {product.images.map((img, index) => (
              <div key={index} className="w-20 h-20 border rounded-xl overflow-hidden cursor-pointer">
                <img src={img} alt={`Preview ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="flex-1 max-w-md aspect-square bg-gray-100 rounded-xl overflow-hidden">
            <img src={product.images[0]} alt="Main Product" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right Section - Info */}
        <div>
          <p className="text-gray-500 text-sm mb-1">Brand: {product.brand}</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">{product.name}</h2>

          <div className="text-xl font-bold text-blue-700 mb-2">
            ${product.price} – ${product.maxPrice}
          </div>

          <div className="flex items-center gap-1 mb-4">
            {renderStars(product.rating)}
            <span className="ml-2 text-gray-600 text-sm">(1 review)</span>
          </div>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            {product.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg mb-4">
            Add To Cart
          </button>

          <div className="flex gap-4 mb-6">
            <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100">Add to Wishlist</button>
            <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100">Share</button>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-gray-600 items-center justify-between">
            <span className="flex items-center gap-2">🛡️ 100% Original</span>
            <span className="flex items-center gap-2">🏷️ Lowest Price</span>
            <span className="flex items-center gap-2">🚚 Free Shipping</span>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex border-b mb-6 overflow-x-auto">
          {['description', 'reviews', 'Shipping and Refund'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab ? 'border-blue-700 text-blue-700' : 'border-transparent text-gray-600 hover:text-blue-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'description' && (
          <div className="text-gray-700 text-base leading-relaxed">
            <h3 className="text-xl font-semibold mb-4">Product Description</h3>
            <p>
              The Apple AirPods Pro (2nd Gen) offer improved Active Noise Cancellation, a customizable fit, and exceptional sound clarity. Enjoy up to 6 hours of listening time with a single charge and up to 30 hours with the MagSafe Charging Case. Designed for comfort and functionality, these earbuds are ideal for everyday use, workouts, and travel.
            </p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="text-gray-700 text-base leading-relaxed">
            <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
            <div className="border p-4 rounded-md">
              <p className="font-medium">John D.</p>
              <div className="flex items-center gap-1 mb-1">{renderStars(4)}</div>
              <p className="text-sm text-gray-600">Great sound quality and excellent fit. The noise cancellation is top-notch. Totally worth the price!</p>
            </div>
          </div>
        )}

        {activeTab === 'Shipping and Refund' && (
          <div className="text-gray-700 text-base leading-relaxed">
            <h3 className="text-xl font-semibold mb-4">Shipping & Return Policy</h3>
            <p className="mb-2">
              We offer various shipping options to meet your needs, including standard and express shipping. Orders are typically processed within 24 hours.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Free shipping on orders over $99</li>
              <li>Delivery within 5-7 business days</li>
              <li>Easy 30-day return and exchange policy</li>
            </ul>
            <p>
              If you’re not satisfied with your purchase, returns are accepted within 30 days of delivery. Please refer to our return policy for more details.
            </p>
          </div>
        )}
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold">Related Products</h2>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    {products.map((product) => (
      <div
        key={product.id}
        className={`rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition-shadow relative`}
      >
        {product.discount && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
            {product.discount}
          </span>
        )}
        <div className="aspect-square mb-3 overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-sm font-semibold mb-1 min-h-[40px]">{product.name}</h3>
        <div className="flex text-yellow-400 text-sm mb-1">
          {renderStars(product.rating)}
        </div>
        <div className="text-sm text-center">
          {product.originalPrice && (
            <span className="text-gray-400 line-through mr-1">{product.originalPrice}</span>
          )}
          <span className="text-blue-600 font-bold">{product.price}</span>
        </div>
      </div>
    ))}
  </div>
</div>


      <Footer />
    </>
  );
};

export default ProductDetail;
