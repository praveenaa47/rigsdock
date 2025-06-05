
import React, { useEffect, useState } from 'react';
import { X, Plus, Minus, Heart, RefreshCw, Gift,  } from 'lucide-react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';



function Cart() {
   const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
    const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Google Home Smart Voice Activated Speaker',
      price: 300,
      quantity: 1,
      image: 'https://i.pinimg.com/originals/e2/64/3a/e2643ac7dca80aefda710c077b2e28c2.jpg'
    }
  ]);
  
  const [couponCode, setCouponCode] = useState('');
  const [selectedShipping, setSelectedShipping] = useState('free');

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode === 'GET20OFF') {
      alert('Coupon applied successfully!');
    } else {
      alert('Invalid coupon code');
    }
  };

    const testimonials = [
    {
      id: 1,
      rating: 5,
      title: "Best Online Fashion Site",
      review: "Fashion lover combining classic elegance with modern trends. Curating stylish, versatile outfits that express confidence and personality every day.",
      name: "Marie Forleo",
      position: "Founder",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      rating: 5,
      title: "Chic Styles, Timeless Trends",
      review: "Style enthusiast mixing timeless pieces with trendy looks, curating outfits that express individuality, confidence, and creativity for every occasion.",
      name: "Tarzen Key",
      position: "Manager",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      rating: 5,
      title: "Bold Looks, Brave Souls",
      review: "Fashion enthusiast blending bold trends with timeless pieces, creating unique, confident outfits with individuality and refine every experience.",
      name: "Jarves Lance",
      position: "Developer",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      rating: 5,
      title: "Exceptional Quality & Service",
      review: "Outstanding shopping experience with premium quality products. The attention to detail and customer service exceeded all my expectations completely.",
      name: "Sarah Johnson",
      position: "Designer",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      rating: 5,
      title: "Fashion Forward Excellence",
      review: "Incredible variety of trendy and classic pieces. Perfect for creating versatile wardrobes that transition seamlessly from day to night effortlessly.",
      name: "Michael Chen",
      position: "Influencer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const totalSlides = testimonials.length;
  const slidesToShow = 3; 

  // Auto-play functionality
 const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = totalSlides - slidesToShow;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = totalSlides - slidesToShow;
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = selectedShipping === 'free' ? 0 : selectedShipping === 'flat' ? 5 : 10;
  const total = subtotal + shippingCost;

 if (cartItems.length === 0) {
    return (
      <>
      <Header/>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center bg-white rounded-lg shadow-sm p-8">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m-2.4 0L3 3m0 0h2m0 0l.4 2M7 13L5.4 5M7 13l-2.293-2.293a1 1 0 00-1.414 0L9 16h6m0 0v1a2 2 0 01-2 2H9a2 2 0 01-2-2v-1m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v7.293" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
              <p className="text-gray-600">Add some products to get started!</p>
            </div>
          <a 
            href="/shop" 
            className="inline-block bg-blue-800 hover:bg-blue-800 text-black font-semibold py-3 px-6 rounded-lg transition-colors text-base mt-4"
          >
            Continue Shopping
          </a>
        </div>
      </div>
      </div>
      <Footer/>
      </>
    );
  }

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          
          {/* Header */}
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Cart Summary</h1>
          
          {/* Coupon Banner */}
          <div className="bg-green-100 border border-green-200 rounded-lg p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-green-700 text-base sm:text-lg">
              Use GET20OFF coupon code to get 20% off on minimum order above $100
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-base font-medium transition-colors whitespace-nowrap">
              GET20OFF
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Cart Items Section */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Product Table Header - Hidden on mobile */}
              <div className="hidden md:grid grid-cols-12 gap-4 bg-white p-4 rounded-lg shadow-sm font-semibold text-gray-700 text-base">
                <div className="col-span-5">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-center">Subtotal</div>
              </div>

              {/* Cart Items */}
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm">
                  {/* Mobile Layout */}
                  <div className="md:hidden">
                    <div className="flex items-start gap-4 mb-4">
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 mt-1"
                      >
                        <X size={20} />
                      </button>
                     <img 
  src={item.image} 
  alt={item.name}
  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
/>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 mb-2 text-base">{item.name}</h3>
                        <p className="text-blue-600 font-semibold text-xl">${item.price}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-medium min-w-[40px] text-center text-base">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <p className="text-blue-600 font-semibold text-xl">${item.price * item.quantity}</p>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-5 flex items-center gap-4">
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X size={20} />
                      </button>
<img 
  src={item.image} 
  alt={item.name}
  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
/>                      <h3 className="font-medium text-gray-800 text-base">{item.name}</h3>
                    </div>
                    
                    <div className="col-span-2 text-center">
                      <span className="text-blue-600 font-semibold text-lg">${item.price}</span>
                    </div>
                    
                    <div className="col-span-3 flex items-center justify-center gap-3">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-medium min-w-[40px] text-center text-base">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <div className="col-span-2 text-center">
                      <span className="text-blue-600 font-semibold text-lg">${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Coupon Section */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                  />
                  <button
                    onClick={applyCoupon}
                    className="bg-blue-800 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap text-base"
                  >
                    Apply Coupon
                  </button>
                  <Link to='/shop' className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap text-base">
                    Shop More 
                  </Link>
                </div>
              </div>

              {/* Features Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-purple-50 p-6 rounded-lg">
                <div className="text-center bg-gray-300 p-5 gap-5">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <Heart className="text-purple-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-base">Loved by Thousands</h3>
                  <p className="text-gray-600 text-base">Join Thousands of Happy and Satisfied Customers!</p>
                </div>
                
                <div className="text-center bg-gray-300 p-5 gap-5 ">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <RefreshCw className="text-purple-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-base">Easy Returns</h3>
                  <p className="text-gray-600 text-base">Enjoy Hassle-Free Returns and Exchanges - Shop Now!</p>
                </div>
                
                <div className="text-center bg-gray-300 p-5 gap-5">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <Gift className="text-purple-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-base">Order Now & Get Gift!</h3>
                  <p className="text-gray-600 text-base">Order & Receive a Special Gift. Limited Time Only!</p>
                </div>
              </div>
            </div>

            {/* Cart Totals Section */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm sticky top-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Cart totals</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-base">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-blue-600 font-semibold text-lg">${subtotal}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-gray-800 mb-3 text-base">Shipping</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="shipping"
                          value="free"
                          checked={selectedShipping === 'free'}
                          onChange={(e) => setSelectedShipping(e.target.value)}
                          className="text-blue-600"
                        />
                        <span className="text-base">Free shipping</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="shipping"
                          value="flat"
                          checked={selectedShipping === 'flat'}
                          onChange={(e) => setSelectedShipping(e.target.value)}
                          className="text-blue-600"
                        />
                        <span className="text-base">Flat rate: <span className="text-blue-600">$5</span></span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="shipping"
                          value="pickup"
                          checked={selectedShipping === 'pickup'}
                          onChange={(e) => setSelectedShipping(e.target.value)}
                          className="text-blue-600"
                        />
                        <span className="text-base">Local pickup: <span className="text-blue-600">$10</span></span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="text-base text-gray-600">
                    Shipping to <span className="font-medium">Gujarat.</span>
                    <button className="text-blue-600 hover:underline ml-1">Change address</button>
                  </div>
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-blue-600">${total}</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-800 hover:bg-blue-800 text-white font-semibold py-4 rounded-lg transition-colors text-base">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of fashion enthusiasts trust us for their style needs
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonials Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white border border-gray-200 rounded-xl p-6 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                    {/* Stars */}
                    <div className="flex items-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {testimonial.title}
                    </h3>

                    {/* Review */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      "{testimonial.review}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalSlides - slidesToShow + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? 'bg-blue-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile View - Single Card */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    {/* Stars */}
                    <div className="flex items-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {testimonial.title}
                    </h3>

                    {/* Review */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      "{testimonial.review}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? 'bg-blue-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    
    </div>
    <Footer/>
    </>
    
  )
}

export default Cart
