import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Moon, Sun, Heart } from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { BASE_URL } from "../Services/baseUrl";


const categories = [
  {
    title: "PC Peripherals",
    items: ["Monitors", "Keyboards", "Mice", "Webcams"],
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",
  },
  {
    title: "PC Components",
    items: ["Motherboards", "Graphics Cards", "SSDs", "RAM"],
    image:
      "https://www.bhphotovideo.com/images/images2500x2500/msi_radeon_r7_370_gaming_1162653.jpg",
  },
  {
    title: "Gaming",
    items: [
      "Digital Watches",
      "Smart Cameras",
      "Smart Phones",
      "Smart Speakers",
    ],
    image:
      "https://th.bing.com/th/id/OIP.njd9XyKRyn6zrmzfo6uTaAHaHa?rs=1&pid=ImgDetMain",
  },
  {
    title: "Input Device",
    items: ["Backup camera", "Digital Camera", "IP camera", "Movie camera"],
    image:
      "https://cdn.britannica.com/64/170564-050-7A0A86A2/motherboard-for-computer.jpg",
  },
  {
    title: "Cooling system",
    items: ["Convertible", "MacBook", "Personal", "Ultraportable"],
    image:
      "https://cdn.mos.cms.futurecdn.net/9fdc0e6c7e4e1e175a8b986dc221e1cb-1200-80.png",
  },
  {
    title: "Output Devices",
    items: ["Home Theatre", "Party Speakers", "Televisions", "TV & Audio"],
    image:
      "https://th.bing.com/th/id/R.dfda04f98f3fb46a7a935c167ad709b0?rik=D7CSkA9A6wiV4w&riu=http%3a%2f%2fwww.bhphotovideo.com%2fimages%2fimages2500x2500%2fEpson_C11CB53201_Artisan_1430_Inkjet_Printer_838610.jpg&ehk=fEGFJQQ7id3DUaL%2fO2n51TZip4eAQ6cJmH2IH2CmbQw%3d&risl=&pid=ImgRaw&r=0",
  },
];

const promoItems = [
  {
    id: 1,
    title: "Apple I Watch S7",
    subtitle: "For Cellular",
    price: "$225.00",
    image:
      "https://img.freepik.com/premium-photo/red-xbox-controller-with-black-controller-it_627050-649.jpg?w=826",
    bgColor: "bg-red-600",
  },
  {
    id: 2,
    title: "Sony PS4 Controller",
    subtitle: "For Cellular",
    price: "$325.00",
    image:
      "https://i.pcmag.com/imagery/articles/02x2SyNeg0E9zXEHpvGr7Ne-1.fit_lim.v1704470519.jpg",
    bgColor: "bg-black",
  },
];

const brands = [
  {
    id: 1,
    name: "LG",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/LG_logo_%282015%29.svg",
  },
  {
    id: 2,
    name: "Samsung",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    id: 3,
    name: "Apple",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 4,
    name: "Boss",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Boss_logo.svg",
  },
  {
    id: 5,
    name: "JBL",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/JBL_logo.svg",
  },
  {
    id: 6,
    name: "Apple2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 7,
    name: "Apple2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 8,
    name: "Apple2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 9,
    name: "Apple2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 10,
    name: "Apple2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
];

function Home() {
  const [isDark, setIsDark] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
    const BASE_URL = "https://rigsdock.com"

  const [timeLeft, setTimeLeft] = useState({
    days: 458,
    hours: 4,
    minutes: 46,
    seconds: 20,
  });
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/product/get`);
        const sortedProducts = response.data.products
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 10); // Get the 10 latest products
        setLatestProducts(sortedProducts);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch latest products", err);
        setError(err);
        setLoading(false);
      }
    };

    fetchLatestProducts();
  }, []);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: "Lenovo Tab M9 Tablet 4 GB RAM 64 GB",
      price: "$144 - $150",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Samsung R6 Wireless 360° Multiroom Speaker",
      price: "$189 - $199",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Phonokart USB Type C OTG Cable",
      price: "$450",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Xiaomi Redmi Note 12 Pro 5G 128 GB, 6 GB RAM",
      price: "$249 - $265",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Logitech M350 WHITE Optical Wireless Mouse",
      price: "$299",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Apple MacBook Air M2 Chip",
      price: "$1199 - $1399",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",
    },
    {
      id: 7,
      name: "Sony WH-1000XM4 Headphones",
      price: "$279 - $349",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    },
    {
      id: 8,
      name: "iPad Pro 12.9-inch Wi-Fi 128GB",
      price: "$999 - $1099",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop",
    },
    {
      id: 9,
      name: "Dell XPS 13 Laptop",
      price: "$899 - $1199",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
    },
    {
      id: 10,
      name: "Samsung Galaxy Watch 5",
      price: "$249 - $299",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    },
  ];

  const deals = [
    {
      id: 1,
      badge: "Flat Deal",
      title: "Around Deals",
      subtitle: "Laptops",
      description: "11th Generation System",
      image:
        "https://img.freepik.com/premium-photo/headphones-joystick-computer-keyboard-black-table_93675-157726.jpg",
      alt: "Laptop with cosmic background",
    },
    {
      id: 2,
      badge: "Flat Deal",
      title: "Silver Wireless",
      subtitle: "EarPods",
      description: "Clean Enjoy Sounds!",
      image:
        "https://img.freepik.com/premium-photo/headphones-joystick-computer-keyboard-black-table_93675-157726.jpg",
      alt: "Silver wireless earbuds",
    },
    {
      id: 3,
      badge: "Flat Deal",
      title: "Smart Home's",
      subtitle: "Echo Dot",
      description: "Smart Security System",
      image:
        "https://img.freepik.com/premium-photo/headphones-joystick-computer-keyboard-black-table_93675-157726.jpg",
      alt: "Amazon Echo Dot smart speaker",
    },
  ];
  // Get items per slide based on screen size
  const getItemsPerSlide = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return 5; // xl
      if (window.innerWidth >= 1024) return 4; // lg
      if (window.innerWidth >= 768) return 3; // md
      if (window.innerWidth >= 640) return 2; 
      return 1; 
    }
    return 5;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
      setCurrentIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(products.length / itemsPerSlide);
  const maxIndex = totalSlides - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const getCurrentProducts = () => {
    const start = currentIndex * itemsPerSlide;
    const end = start + itemsPerSlide;
    return products.slice(start, end);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

    const navigateToProduct = (productId) => {
    // Navigate to product detail page
    window.location.href = `/product-details/${productId}`;
  };

  return (
    <>
      <Header />
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center mt-5">
        Your Gadget Sale Zone Starts Here!
      </h2>
      <div className="w-full px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* iPad Pro Max Card - Wide */}
          <div
            className="flex-[2] rounded-2xl overflow-hidden min-h-[400px] flex flex-col justify-between p-6 lg:p-8  text-white"
            style={{
              backgroundImage:
                "url('https://mattj.io/images/posts/2021-02-27_-_keyboard.gif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className=" p-4 rounded-xl ">
              <div className="text-sm mb-2">Flat Online Deal</div>
              <h2 className="text-4xl font-light mb-1">Apple Kit's</h2>
              <h3 className="text-4xl font-light mb-4">Ipad Pro Max</h3>
              <div className="text-3xl font-semibold mb-6">
                Only <span className="text-white">$225.00</span>
              </div>
              <button className="bg-blue-800 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full transition-colors">
                Shop Now
              </button>
            </div>
          </div>

          {/* Wireless Earbuds */}
          <div
            className="flex-1 rounded-2xl overflow-hidden  min-h-[400px] flex flex-col justify-end p-6 lg:p-8 bg-black text-white"
            style={{
              backgroundImage:
                "url('https://png.pngtree.com/thumb_back/fw800/background/20230704/pngtree-office-essentials-technology-and-gadgets-illustration-featuring-laptop-printer-camera-tablet-image_3748458.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black/50 p-4 rounded-xl ">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                Battery Life
              </h2>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Truly Wireless
              </h3>
              <div className="text-sm font-medium">
                4GB RAM | 64GB ROM | 20MP
              </div>
            </div>
          </div>

          {/* Smart TV */}
          <div
            className="flex-1 rounded-2xl overflow-hidden min-h-[400px] flex flex-col justify-end p-6 lg:p-8 bg-black text-white"
            style={{
              backgroundImage:
                "url('https://giffiles.alphacoders.com/296/2964.gif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black/50 p-4 rounded-xl ">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                For 4K Ultra
              </h2>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                RGB Backlight
              </h3>
              <div className="text-sm text-white/90">Safe & Enjoy Life !!</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`min-h-screen mt-5 transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <div className="container mx-auto px-2 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Weekly Deal Offer Card */}
            <div className="lg:w-80 flex-shrink-0">
              <div
                className={`rounded-2xl p-6 border-4 border-yellow-400 ${
                  isDark ? "bg-gray-800" : "bg-white"
                } relative overflow-hidden`}
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-400 text-black px-2 py-1 rounded text-sm font-bold">
                    -4%
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-4 text-center">
                  Weekly Deal Offer
                </h2>

                <div className="text-center mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop"
                    alt="Xiaomi Phone"
                    className="w-48 h-48 mx-auto rounded-lg object-cover mb-4"
                  />

                  <h3 className="font-semibold text-lg mb-2">
                    Xiaomi Redmi Note 12 Pro 5G 128 GB, 6 GB RAM
                  </h3>

                  <div className="flex justify-center mb-2">
                    {renderStars(5)}
                  </div>

                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    $249 - $265
                  </div>
                </div>

                <div className="text-center mb-6">
                  <p className="text-sm font-medium mb-4">
                    Hurry Up! Limited Time
                  </p>

                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div>
                      <div className="text-2xl font-bold text-red-500">
                        {timeLeft.days}
                      </div>
                      <div className="text-xs text-gray-500">DAYS</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-500">
                        {String(timeLeft.hours).padStart(2, "0")}
                      </div>
                      <div className="text-xs text-gray-500">HRS</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-500">
                        {String(timeLeft.minutes).padStart(2, "0")}
                      </div>
                      <div className="text-xs text-gray-500">MIN</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-500">
                        {String(timeLeft.seconds).padStart(2, "0")}
                      </div>
                      <div className="text-xs text-gray-500">SEC</div>
                    </div>
                  </div>
                </div>

                {/* <div className="flex justify-center">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className={`p-3 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} transition-colors`}
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div> */}
              </div>
            </div>

            {/* Main Products Section */}
           <div className=" px-4 py-4 ">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold">On Sale Products</h2>
    <div className="flex gap-2">
      <button
        onClick={prevSlide}
        className={`p-2 rounded-full ${
          isDark
            ? "bg-gray-700 hover:bg-gray-600"
            : "bg-white hover:bg-gray-100"
        } shadow-md transition-colors`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className={`p-2 rounded-full ${
          isDark
            ? "bg-gray-700 hover:bg-gray-600"
            : "bg-white hover:bg-gray-100"
        } shadow-md transition-colors`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  </div>

  {loading ? (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  ) : error ? (
    <div className="text-center py-10 text-red-500">
      {error}
    </div>
  ) : (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out">
        {Array.from({ length: Math.ceil(latestProducts.length / itemsPerSlide) }, (_, slideIndex) => (
          <div key={slideIndex} className="w-full flex-shrink-0">
            <div className="flex flex-wrap justify-center gap-4 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {latestProducts
                .slice(
                  slideIndex * itemsPerSlide,
                  (slideIndex + 1) * itemsPerSlide
                )
                .map((product) => (
                  <div
                    key={product._id}
                    className={`rounded-xl p-4 ${
                      isDark ? "bg-gray-800" : "bg-white"
                    } shadow-md hover:shadow-lg transition-shadow relative`}
                  >
                    {product.price !== product.finalPrice && (
                      <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
                        Sale
                      </span>
                    )}

                    <button className="absolute top-2 right-2 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-gray-700 hover:text-red-500" />
                    </button>

                    <div className="aspect-square mb-3 overflow-hidden rounded-lg">
                      <img
                        src={
                          product.images && product.images.length > 0
                            ? `${BASE_URL}/uploads/${product.images[0]}`
                            : "https://via.placeholder.com/300"
                        }
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/300";
                        }}
                      />
                    </div>

                    <h3 className="text-sm font-semibold mb-1 min-h-[40px]">
                      {product.name}
                    </h3>

                    <div className="flex text-yellow-400 text-sm mb-1">
                      {renderStars(product.averageRating)}
                    </div>

                    <div className="text-sm text-center mb-2">
                      {product.price !== product.finalPrice && (
                        <span className="text-gray-400 line-through mr-1">
                          ₹{product.price}
                        </span>
                      )}
                      <span className="text-blue-600 font-bold">
                        ₹{product.finalPrice}
                      </span>
                    </div>

                    <button 
                      onClick={() => navigate(`/product/${product._id}`)}
                      className="w-full bg-blue-800 hover:bg-blue-700 text-white py-2 rounded-md text-xs font-medium transition-colors"
                    >
                      View Product
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )}
</div>
          </div>
        </div>
      </div>
      <div className=" px-4 py-4 ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Top Rated Item’s</h2>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className={`p-2 rounded-full ${
                isDark
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-white hover:bg-gray-100"
              } shadow-md transition-colors`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className={`p-2 rounded-full ${
                isDark
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-white hover:bg-gray-100"
              } shadow-md transition-colors`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sliding Cards */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="flex flex-wrap justify-center gap-4 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {products
                    .slice(
                      slideIndex * itemsPerSlide,
                      (slideIndex + 1) * itemsPerSlide
                    )
                    .map((product) => (
<div
  key={product.id}
  className={`rounded-xl p-4 ${
    isDark ? "bg-gray-800" : "bg-white"
  } shadow-md hover:shadow-lg transition-shadow relative`}
>
  {product.discount && (
    <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
      {product.discount}
    </span>
  )}

  {/* Wishlist Button */}
  <button className="absolute top-2 right-2 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
    <Heart className="w-4 h-4 text-gray-700 hover:text-red-500" />
  </button>

  <div className="aspect-square mb-3 overflow-hidden rounded-lg">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-cover"
    />
  </div>

  <h3 className="text-sm font-semibold mb-1 min-h-[40px]">
    {product.name}
  </h3>

  <div className="flex text-yellow-400 text-sm mb-1">
    {renderStars(product.rating)}
  </div>

  <div className="text-sm text-center mb-2">
    {product.originalPrice && (
      <span className="text-gray-400 line-through mr-1">
        {product.originalPrice}
      </span>
    )}
    <span className="text-blue-600 font-bold">
      {product.price}
    </span>
  </div>

  {/* View Product Button below price */}
  <button className="w-full bg-blue-800 hover:bg-blue-700 text-white py-2 rounded-md text-xs font-medium transition-colors">
    View Product
  </button>
</div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="relative group h-72 rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
            >
              {/* Background Image */}
              <img
                src={deal.image}
                alt={deal.alt}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0  bg-opacity-40 z-10 group-hover:bg-opacity-50 transition duration-300"></div>

              {/* Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-yellow-400  text-xs font-semibold px-3 py-1 rounded-full">
                  {deal.badge}
                </span>
              </div>

              {/* Text Content */}
              <div className="relative z-20 p-6 h-full flex flex-col justify-end">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
                  {deal.title}
                </h3>
                <h4 className="text-white text-lg md:text-xl font-semibold mb-1">
                  {deal.subtitle}
                </h4>
                <p className="text-white text-sm">{deal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="bg-white py-14 pl-6 pr-6 md:pl-10 md:pr-6">
        <div className="max-w-none">
          <h2 className="text-2xl font-bold mb-6">Shop By Category</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Promo Block */}
            <div className="bg-orange-500 text-white p-6 rounded-lg flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold">50% Discount</p>
                <h3 className="text-2xl font-bold leading-tight mt-2">
                  Best Shopping <br /> iPhone's
                </h3>
              </div>
              <img
                src="https://img.freepik.com/premium-photo/game-joystick-orange-background-generated-by-ai_793210-5045.jpg"
                alt="Promo"
                className="mt-6 w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Category Grid */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="border rounded-xl p-6 w-full h-64 flex items-center justify-between bg-white shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-3">{cat.title}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {cat.items.map((item, i) => (
                        <li
                          key={i}
                          className="hover:text-gray-800 transition-colors"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="ml-6 flex-shrink-0">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10 px-4 py-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">New Arrivals</h2>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className={`p-2 rounded-full ${
                isDark
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-white hover:bg-gray-100"
              } shadow-md transition-colors`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className={`p-2 rounded-full ${
                isDark
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-white hover:bg-gray-100"
              } shadow-md transition-colors`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sliding Cards */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="flex flex-wrap justify-center gap-4 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {products
                    .slice(
                      slideIndex * itemsPerSlide,
                      (slideIndex + 1) * itemsPerSlide
                    )
                    .map((product) => (
<div
  key={product.id}
  className={`rounded-xl p-4 ${
    isDark ? "bg-gray-800" : "bg-white"
  } shadow-md hover:shadow-lg transition-shadow relative`}
>
  {product.discount && (
    <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
      {product.discount}
    </span>
  )}

  {/* Wishlist Button */}
  <button className="absolute top-2 right-2 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
    <Heart className="w-4 h-4 text-gray-700 hover:text-red-500" />
  </button>

  <div className="aspect-square mb-3 overflow-hidden rounded-lg">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-cover"
    />
  </div>

  <h3 className="text-sm font-semibold mb-1 min-h-[40px]">
    {product.name}
  </h3>

  <div className="flex text-yellow-400 text-sm mb-1">
    {renderStars(product.rating)}
  </div>

  <div className="text-sm text-center mb-2">
    {product.originalPrice && (
      <span className="text-gray-400 line-through mr-1">
        {product.originalPrice}
      </span>
    )}
    <span className="text-blue-600 font-bold">
      {product.price}
    </span>
  </div>

  {/* View Product Button below price */}
  <button className="w-full bg-blue-800 hover:bg-blue-700 text-white py-2 rounded-md text-xs font-medium transition-colors">
    View Product
  </button>
</div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className="px-4 md:px-10 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {promoItems.map((item) => (
              <div
                key={item.id}
                className={`text-white rounded-lg overflow-hidden flex items-center justify-between p-6 h-60 md:h-64 lg:h-72 ${item.bgColor}`}
              >
                {/* Text Content */}
                <div>
                  <p className="text-sm">{item.subtitle}</p>
                  <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                  <p className="text-lg font-semibold">
                    Only <span className="text-white">{item.price}</span>
                  </p>
                </div>

                {/* Image */}
                <div className="w-36 md:w-44 lg:w-52 transition-transform duration-300 hover:scale-105">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <div className="min-h-screen bg-gray-50 p-4"> */}
        <div className="w-full py-12 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Popular Brands
              </h2>
            </div>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className={`absolute top-1/2 left-2 z-10 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-md transition-colors ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className={`absolute top-1/2 right-2 z-10 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-md transition-colors ${
                currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={currentIndex === maxIndex}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Slider */}
            <div className="relative overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  width: `${totalSlides * 100}%`,
                  transform: `translateX(-${
                    (100 / totalSlides) * currentIndex
                  }%)`,
                }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="w-full flex justify-center px-2" // Centers grid container
                    style={{ width: `${100 / totalSlides}%` }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 justify-center">
                      {brands
                        .slice(
                          slideIndex * itemsPerSlide,
                          (slideIndex + 1) * itemsPerSlide
                        )
                        .map((brand) => (
                          <div
                            key={brand.id}
                            className="group relative w-full max-w-[160px] flex-grow-0 flex-shrink-0 bg-gray-50 rounded-2xl p-4 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-gray-300"
                          >
                            {/* Brand Logo */}
                            <div className="flex items-center justify-center h-20 mb-4 rounded-lg border-2 border-gray-400 bg-gray-100 p-4">
                              <img
                                src={brand.image}
                                alt={`${brand.name} logo`}
                                className="max-h-12 max-w-24 object-contain group-hover:scale-110 transition-transform duration-300"
                                onError={(e) => {
                                  e.target.style.display = "none";
                                  e.target.nextSibling.style.display = "flex";
                                }}
                              />
                              <div className="hidden items-center justify-center text-sm font-bold text-gray-600">
                                {brand.name}
                              </div>
                            </div>

                            {/* Brand Name */}
                            <div className="text-center">
                              <h3 className="font-semibold text-sm text-gray-700 truncate">
                                {brand.name}
                              </h3>
                            </div>

                            {/* Hover Overlay */}
                            <div
                              className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${brand.bgColor}`}
                            ></div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
