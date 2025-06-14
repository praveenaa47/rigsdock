import React, { useEffect, useState } from "react";
import { X, ShoppingCart, Heart } from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { getWishlistAPI, removewishlistAPI } from "../Services/wishlistAPI";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Wishlist() {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const products = await getWishlistAPI(userId);
        setWishlistItems(products);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    if (userId) fetchWishlist();
  }, [userId]);

  const handleshopping = () => {
    navigate("/shop");
  };

  const handleRemove = async (productId) => {
  try {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      toast.error("Please login to modify your wishlist.");
      return;
    }

    await removewishlistAPI(userId, productId);
    toast.success("Product Removed from wishlist");

    // Update UI by removing the item from the state
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item._id !== productId)
    );
  } catch (error) {
    console.error("Failed to remove item from wishlist", error);
    toast.error("Error removing item");
  }
};

  const addToCart = (item) => {
    console.log("Adding to cart:", item);
    alert(`${item.name} added to cart!`);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            {/* Breadcrumb */}
            <nav className="flex justify-center items-center text-sm text-gray-500 mb-4">
              <span className="hover:text-gray-700 cursor-pointer">Home</span>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Wishlist</span>
            </nav>

            {/* Page Title */}
            <div className="relative flex items-center justify-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                Wishlist
              </h1>

              {/* Wishlist Count - show only on desktop and tablets */}
              <div className="hidden sm:flex absolute right-0 items-center text-sm text-gray-500">
                <Heart className="h-4 w-4 mr-1" />
                {wishlistItems.length}{" "}
                {wishlistItems.length === 1 ? "item" : "items"}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {wishlistItems.length === 0 ? (
            // Empty State
            <div className="text-center py-12 sm:py-16">
              <Heart className="h-16 w-16 sm:h-20 sm:w-20 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                Your wishlist is empty
              </h2>
              <p className="text-gray-500 mb-6">
                Add items you love to your wishlist and save them for later
              </p>
              <button
                onClick={handleshopping}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            // Wishlist Items
            <>
              {/* Wishlist Count - show only on mobile */}
              <div className="flex sm:hidden items-center text-sm text-gray-500 mb-4 justify-center">
                <Heart className="h-4 w-4 mr-1" />
                {wishlistItems.length}{" "}
                {wishlistItems.length === 1 ? "item" : "items"}
              </div>

              <div className="space-y-4 sm:space-y-6">
                {wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg sm:rounded-xl shadow-sm border hover:shadow-md transition-shadow"
                  >
                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        {/* Remove Button - Mobile Top Right */}
                        <div className="flex sm:hidden justify-end">
                          <button
                            onClick={() => removeFromWishlist(item.id)}
                            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                            aria-label="Remove from wishlist"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>

                        {/* Product Image */}
                        <div className="flex-shrink-0 mx-auto sm:mx-0">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                            <img
                              src={`https://rigsdock.com/uploads/${item.images?.[0]}`}
                              alt={item.name}
                              className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
                            />
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 text-center sm:text-left">
                          <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2 leading-tight">
                            {item.name}
                          </h3>

                          {/* Price */}
                          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                            <span className="text-lg sm:text-xl font-bold text-gray-900">
                              ${item.price}
                            </span>
                            {item.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                ${item.originalPrice}
                              </span>
                            )}
                          </div>

                          {/* Date Added */}
                          <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-0">
                            Added on {item.dateAdded}
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                          {/* Remove Button - Desktop */}
                          <button
                            onClick={() => handleRemove(item._id)}
                            className="hidden sm:flex p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                          >
                            <X className="h-5 w-5" />
                          </button>

                          {/* Add to Cart Button */}
                          <button
                            onClick={() => addToCart(item)}
                            className="w-full sm:w-auto px-6 py-2.5 sm:py-3 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
                            style={{ backgroundColor: "rgb(10, 95, 191)" }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor =
                                "rgb(8, 76, 153)";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor =
                                "rgb(10, 95, 191)";
                            }}
                          >
                            <div className="flex items-center justify-center gap-2">
                              <ShoppingCart className="h-4 w-4" />
                              <span className="text-sm sm:text-base">
                                Add To Cart
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Actions */}
              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center sm:justify-end">
                <button
                  onClick={() => {
                    wishlistItems.forEach((item) => addToCart(item));
                    setWishlistItems([]);
                  }}
                  className="px-6 py-3 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
                  style={{ backgroundColor: "rgb(10, 95, 191)" }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "rgb(8, 76, 153)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "rgb(10, 95, 191)";
                  }}
                >
                  Add All To Cart
                </button>
              </div>
            </>
          )}
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
      <Footer />
    </>
  );
}

export default Wishlist;
