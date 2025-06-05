import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Checkout() {
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("bank-transfer");
  const [promoExpanded, setPromoExpanded] = useState(false);

  return (
    <>
      <Header />

      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <nav className="text-sm text-gray-600 text-center">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span>Checkout</span>
            </nav>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">
            CHECKOUT
          </h1>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Billing Details */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Billing Details
                </h2>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2"
                      placeholder="House number and street name"
                    />
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Apartment, suite, unit etc. (optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Town / City *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="City"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State *
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Select State</option>
                        <option value="kerala">Kerala</option>
                        <option value="tamil-nadu">Tamil Nadu</option>
                        <option value="karnataka">Karnataka</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        PIN Code *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="682024"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Landmark
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Near church, hospital, etc."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address Type
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="addressType"
                          value="home"
                          className="mr-2 text-blue-600"
                          defaultChecked
                        />
                        <span className="text-sm text-gray-700">Home</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="addressType"
                          value="office"
                          className="mr-2 text-blue-600"
                        />
                        <span className="text-sm text-gray-700">Office</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="addressType"
                          value="other"
                          className="mr-2 text-blue-600"
                        />
                        <span className="text-sm text-gray-700">Other</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ship to Different Address */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="different-address"
                    checked={shipToDifferentAddress}
                    onChange={(e) =>
                      setShipToDifferentAddress(e.target.checked)
                    }
                    className="mr-3 h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="different-address"
                    className="text-sm font-medium text-gray-700"
                  >
                    Ship to a different address?
                  </label>
                </div>

                {shipToDifferentAddress && (
                  <div className="space-y-4 border-t pt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2"
                        placeholder="House number and street name"
                      />
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Apartment, suite, unit etc. (optional)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Town / City *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="City"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          State *
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option value="">Select State</option>
                          <option value="kerala">Kerala</option>
                          <option value="tamil-nadu">Tamil Nadu</option>
                          <option value="karnataka">Karnataka</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          PIN Code *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="682024"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address Type
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="shippingAddressType"
                            value="home"
                            className="mr-2 text-blue-600"
                            defaultChecked
                          />
                          <span className="text-sm text-gray-700">Home</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="shippingAddressType"
                            value="office"
                            className="mr-2 text-blue-600"
                          />
                          <span className="text-sm text-gray-700">Office</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="shippingAddressType"
                            value="other"
                            className="mr-2 text-blue-600"
                          />
                          <span className="text-sm text-gray-700">Other</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Order Notes */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Order Notes
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notes about your order, e.g. special notes for delivery.
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Right Side - Order Summary & Payment */}
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Your Order
                </h2>

                {/* Product */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-300 rounded"></div>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          Google Home Smart Voice Activated Speaker
                        </h3>
                        <p className="text-sm text-blue-600">$300</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-medium text-gray-900">$300</span>
                    </div>
                  </div>

                  {/* Shipping */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">Shipping</h4>
                    <div className="space-y-2">
                      <label className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="shipping"
                            value="free"
                            className="mr-3 text-blue-600"
                            defaultChecked
                          />
                          <span className="text-sm text-gray-700">
                            Free shipping
                          </span>
                        </div>
                      </label>
                      <label className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="shipping"
                            value="flat"
                            className="mr-3 text-blue-600"
                          />
                          <span className="text-sm text-gray-700">
                            Flat rate:
                          </span>
                        </div>
                        <span className="text-sm text-gray-700">$5</span>
                      </label>
                      <label className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="shipping"
                            value="pickup"
                            className="mr-3 text-blue-600"
                          />
                          <span className="text-sm text-gray-700">
                            Local pickup:
                          </span>
                        </div>
                        <span className="text-sm text-gray-700">$10</span>
                      </label>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-lg font-semibold text-gray-900">
                      Total
                    </span>
                    <span className="text-lg font-semibold text-blue-600">
                      $300
                    </span>
                  </div>

                  {/* Promo Code */}
                  <div className="pt-4 border-t border-gray-200">
                    <button
                      onClick={() => setPromoExpanded(!promoExpanded)}
                      className="flex items-center justify-between w-full text-left text-sm text-gray-600 hover:text-gray-900"
                    >
                      <span>
                        Have a promo code? Click here to enter your code.
                      </span>
                      {promoExpanded ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>

                    {promoExpanded && (
                      <div className="mt-3 flex space-x-2">
                        <input
                          type="text"
                          placeholder="Promo code"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                          Apply
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Payment Method
                </h3>

                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="bank-transfer"
                      checked={selectedPayment === "bank-transfer"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="mr-3 text-blue-600"
                    />
                    <span className="font-medium text-gray-900">
                      Direct bank transfer
                    </span>
                  </label>

                  <div className="ml-6 p-4 bg-gray-50 rounded-md">
                    <p className="text-sm text-gray-600">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                  </div>

                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={selectedPayment === "cod"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="mr-3 text-blue-600"
                    />
                    <span className="font-medium text-gray-900">
                      Cash on delivery
                    </span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={selectedPayment === "paypal"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="mr-3 text-blue-600"
                    />
                    <span className="font-medium text-gray-900">PayPal</span>
                  </label>
                </div>
                <div className="ml-6 p-4 bg-gray-50 rounded-md">
                  <p className="text-sm text-gray-600">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.{" "}
                  </p>
                </div>

                <div className="mt-6">
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
