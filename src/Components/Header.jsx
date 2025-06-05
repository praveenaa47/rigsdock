import React, { useState } from 'react'
import {
  User,
  ShoppingCart,
  Menu,
  ChevronDown,
  Search,
  Heart,
  X,
  Monitor,
  Keyboard,
  Mouse,
  Headphones,
  Gamepad2,
  Laptop,
  Store
} from "lucide-react";
import { Link } from 'react-router-dom';

function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  
  const cartItems = [
  {
    id: 1,
    title: "Phonokart USB Type C OTG Cable",
    price: 450,
    quantity: 1,
    image: "https://i.postimg.cc/BnbGWbqh/otg.png",
  },
];
 const departments = [
    {
      title: "Input Devices",
      icon: <Keyboard size={18} />,
      items: ["Keyboards", "Mice", "Touchpads", "Graphics Tablets"]
    },
    {
      title: "Output Devices",
      icon: <Monitor size={18} />,
      items: ["Monitors", "Speakers", "Printers", "Headphones"]
    },
    {
      title: "Gaming Laptops",
      icon: <Laptop size={18} />,
      items: ["Gaming Laptops", "Gaming Desktops", "Gaming Accessories"]
    },
    {
      title: "Audio Devices",
      icon: <Headphones size={18} />,
      items: ["Headphones", "Earbuds", "Speakers", "Microphones"]
    },
    {
      title: "Gaming Gear",
      icon: <Gamepad2 size={18} />,
      items: ["Controllers", "Gaming Chairs", "RGB Lighting", "Cooling"]
    },
    {
      title: "Our Stores",
      icon: <Store size={18} />,
      items: ["Store Locations", "Contact Info", "Store Hours", "Services"]
    }
  ];


  return (
    <>
      <header className="shadow-sm border-b">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-7 md:px-8" style={{ backgroundColor: "rgb(10, 95, 191)" }}>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to='/'>
            <img 
              src="https://i.postimg.cc/MKZkQfTh/logo.png"
              alt="logo"
              className="w-40 h-12"
            />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center border border-[rgb(10,95,191)] rounded-full overflow-hidden w-2/5 bg-white">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-4 py-2 outline-none"
            />
            <button
              className="px-4 py-2 text-white font-semibold flex items-center gap-1"
              style={{ backgroundColor: "rgb(10, 95, 191)" }}
            >
              <Search size={16} /> Search
            </button>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4 text-sm text-white">
            <Link to='/login' className="flex items-center gap-1 cursor-pointer">
              <User size={18} />
              <span>Log In</span>
            </Link>
            <div className="h-5 w-px bg-white"></div>
            <Link to='/wishlist' className="flex items-center gap-1 cursor-pointer">
              <Heart size={18} />
              <span>Wishlist</span>
            </Link>
            <div className="h-5 w-px bg-white"></div>
            <div
              className="flex items-center gap-1 relative cursor-pointer"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart size={20} />
              <span>My Cart</span>
              <span className="absolute -top-2 -right-2 bg-white text-neutral-950 text-xs px-1 rounded-full">
                0
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
<div className="hidden md:flex items-center justify-between px-7 py-4 bg-white text-base text-gray-800">
          <div className="flex items-center gap-6">
          <Link to="/shop"> <div 
              className="relative"
             onClick={() => setDepartmentOpen(prev => !prev)}
            >
              <div className="flex items-center gap-2 font-semibold cursor-pointer hover:text-blue-600 transition-colors">
                <Menu size={18} />
                <span>All Departments</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${departmentOpen ? 'rotate-180' : ''}`} />
              </div>
              
              {/* Dropdown Modal */}
              {departmentOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden">
                  <div className="grid grid-cols-1 divide-y divide-gray-100">
                    {departments.map((dept, index) => (
                      <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-blue-600">{dept.icon}</div>
                          <h3 className="font-semibold text-gray-800">{dept.title}</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-2 ml-7">
                          {dept.items.map((item, itemIndex) => (
                          <div
  onClick={() => window.location.href = '/shop'}
  className="text-sm text-gray-600 hover:text-blue-600 transition-colors py-1 cursor-pointer"
>
  {item}
</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div></Link> 
            <Link to='/shop' className="flex items-center gap-1 cursor-pointer">Shop</Link>
          <div 
  className="relative"
  onMouseEnter={() => setCategoryOpen(true)}
  onMouseLeave={() => setCategoryOpen(false)}
>
  <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
    Categories <ChevronDown size={16} />
  </div>

  {categoryOpen && (
    <div className="absolute top-full left-0 mt-2 w-[900px] bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-6 grid grid-cols-4 gap-4">
      {[
        { title: 'Cameras', items: ['Backup camera', 'Digital Camera', 'IP camera', 'Movie camera'] },
        { title: 'Phones', items: ['Basic Phones', 'Feature Phones', 'Smart Phones'] },
        { title: 'TV & Speaker', items: ['Home Theatre', 'Party Speakers', 'Televisions', 'TV & Audio'] },
        { title: 'Smart Devices', items: ['Digital Watches', 'Smart Cameras', 'Smart Phones', 'Smart Speakers'] },
        { title: 'Laptop & Computers', items: ['Convertible', 'MacBook', 'Personal', 'Ultraportable'] },
        { title: 'Chargers & Cables', items: ['Adapter Plug', 'Bettery Chargers', 'USB Type Cable', 'USB-C Charger'] },
      ].map((category, index) => (
        <div key={index}>
          <h4 className="font-semibold mb-2">{category.title}</h4>
          <div className="flex flex-col gap-1">
            {category.items.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => window.location.href = '/shop'}
                className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )}
</div>
            <div className="flex items-center gap-2 cursor-pointer">
              Top Rated Item's <ChevronDown size={16} />
              {/* <span className="bg-pink-100 text-pink-700 text-xs px-2 py-0.5 rounded-full">HOT</span> */}
            </div>
            <div className="flex items-center gap-1 cursor-pointer">New Arrivals <ChevronDown size={16} /></div>
          </div>
         <div className="flex items-center gap-4 me-4">
  <Link to="/seller" className="flex items-center gap-1 cursor-pointer">Become a Seller</Link>
  <div className="h-4 w-px bg-gray-400"></div>
  <Link to="/about" className="flex items-center gap-1 cursor-pointer">About</Link>
  <div className="h-4 w-px bg-gray-400"></div>
  <Link to="/user" className="flex items-center gap-1 cursor-pointer">MY Account</Link>
</div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden px-4 py-2 flex justify-between items-center bg-white border-t text-sm text-gray-800">
          <div className="flex items-center gap-2">
            <Menu />
            <span>Menu</span>
          </div>
          <div className="flex items-center gap-3">
            <User />
            <ShoppingCart onClick={() => setCartOpen(true)} />
          </div>
        </div>
      </header>

      {/* Cart Sidebar */}
  <div className={`fixed inset-0 z-50 flex transition-all duration-300 ${cartOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'}`}>
  {/* Overlay */}
  <div
    className="flex-1 bg-transparent backdrop-blur-md"
    onClick={() => setCartOpen(false)}
  ></div>

  {/* Sidebar */}
  <div className={`w-[90%] sm:w-[400px] h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${cartOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
    {/* Header */}
    <div className="flex justify-between items-center p-4 border-b">
      <h2 className="text-lg font-semibold">Shopping Cart</h2>
      <button onClick={() => setCartOpen(false)}>
        <X />
      </button>
    </div>

    {cartItems.length === 0 ? (
      // Empty state
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <p className="text-xl font-semibold mb-2">Your cart is empty</p>
        <p className="text-gray-600 mb-6">No items in your cart. Go on, fill it up with something you love!</p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full">
          Start Shopping Now
        </button>
      </div>
    ) : (
      <>
        {/* Free delivery bar */}
        <div className="px-4 py-3 border-b">
          <div className="flex items-center justify-between mb-2">
            <div className="w-full h-1 bg-green-200 rounded">
              <div className="h-1 bg-green-500 rounded" style={{ width: "100%" }}></div>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/891/891419.png"
              className="w-6 h-6 ml-2"
              alt="truck"
            />
          </div>
          <p className="text-sm text-center font-medium text-gray-800">Congratulations! Your order is eligible for FREE Delivery.</p>
        </div>

        {/* Scrollable cart content */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-start justify-between mb-4">
              <img src={item.image} alt={item.title} className="w-14 h-14 rounded object-cover" />
              <div className="flex-1 ml-3">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-sm">1 × <span className="text-blue-600 font-semibold">${item.price}</span></p>
              </div>
              <button className="text-red-500 text-xl font-bold">×</button>
            </div>
          ))}
        </div>

        {/* Fixed bottom subtotal and buttons */}
        <div className="border-t p-4 sticky bottom-0 bg-white">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-lg">Subtotal:</span>
            <span className="text-blue-600 font-semibold text-lg">
              ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </span>
          </div>
          <div className="flex gap-3">
            <Link to='/cart' className="flex-1 text-center bg-neutral-900 text-white font-semibold py-2 rounded-full">View Cart</Link>
            <Link to='/checkout' className="flex-1 text-center bg-blue-800 hover:bg-blue-800 text-white font-semibold py-2 rounded-full">Checkout</Link>
          </div>
        </div>
      </>
    )}
  </div>
</div>

    </>
  );
}

export default Header;
