import React, { useState } from 'react';
import { Upload, User, Building2, CreditCard, Calendar, Check } from 'lucide-react';
import Header from '../Components/Header';

function Seller() {

     const [formData, setFormData] = useState({
    // User Details
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Business Details
    businessName: '',
    businessType: '',
    gstNumber: '',
    businessAddress: '',
    businessCity: '',
    businessState: '',
    businessPincode: '',
    businessPhone: '',
    businessEmail: '',
    
    // Bank Details
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    accountHolderName: '',
    
    // Working Days
    workingDays: [],
    
    // Agreement
    agreeToTerms: false
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    shopLogo: null,
    passbook: null,
    license: null,
    shopImage: null
  });

  const workingDayOptions = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  const businessTypes = [
    'Individual', 'Partnership', 'Private Limited', 'Public Limited', 'LLP'
  ];

 

  const handleWorkingDayChange = (day) => {
    setFormData(prev => ({
      ...prev,
      workingDays: prev.workingDays.includes(day)
        ? prev.workingDays.filter(d => d !== day)
        : [...prev.workingDays, day]
    }));
  };

  const handleFileUpload = (fileType, event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFiles(prev => ({
        ...prev,
        [fileType]: file
      }));
    }
  };




  return (

    <>
    <Header/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-4 sm:py-8 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg sm:rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-8 py-4 sm:py-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Become a Seller</h1>
            <p className="text-blue-100 text-sm sm:text-base">Join our marketplace and start selling your products</p>
          </div>

          <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
            {/* User Details Section */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <div className="flex items-center mb-4 sm:mb-6">
                <User className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Personal Details</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                  <textarea
                    name="address"
                    rows="3"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base resize-none"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                  <input
                    type="text"
                   
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">PIN Code *</label>
                  <input
                    type="text"
                  
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Business Details Section */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <div className="flex items-center mb-4 sm:mb-6">
                <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Business Details</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                  <input
                    type="text"
                   
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Type *</label>
                  <select
                    name="businessType"
                    
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  >
                    <option value="">Select Business Type</option>
                    {businessTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">GST Number</label>
                  <input
                    type="text"
                   
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Phone *</label>
                  <input
                    type="tel"
                   
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Email</label>
                  <input
                    type="email"
                    
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>
              
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business City *</label>
                  <input
                    type="text"
                   
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business State *</label>
                  <input
                    type="text"
                   
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business PIN Code *</label>
                  <input
                    type="text"
                   
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Bank Details Section */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <div className="flex items-center mb-4 sm:mb-6">
                <CreditCard className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Bank Details</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name *</label>
                  <input
                    type="text"
                  
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Number *</label>
                  <input
                    type="text"
                  
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">IFSC Code *</label>
                  <input
                    type="text"
                    
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pancard Number *</label>
                  <input
                    type="text"
                    
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Working Days Section */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <div className="flex items-center mb-4 sm:mb-6">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Working Days</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-3 sm:gap-4">
                {workingDayOptions.map(day => (
                  <label key={day} className="flex items-center space-x-2 sm:space-x-3 p-3 bg-white rounded-lg border hover:bg-blue-50 cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.workingDays.includes(day)}
                      onChange={() => handleWorkingDayChange(day)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 flex-shrink-0"
                    />
                    <span className="text-sm font-medium text-gray-700">{day}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* File Upload Section */}
            <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <div className="flex items-center mb-4 sm:mb-6">
                <Upload className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Upload Documents</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Shop Logo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Shop Logo *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-blue-400 transition-colors">
                    <Upload className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload('shopLogo', e)}
                      className="hidden"
                      id="shopLogo"
                    />
                    <label htmlFor="shopLogo" className="cursor-pointer">
                      <span className="text-xs sm:text-sm text-gray-600 break-words">
                        {uploadedFiles.shopLogo ? uploadedFiles.shopLogo.name : 'Click to upload shop logo'}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Passbook */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bank Passbook *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-blue-400 transition-colors">
                    <Upload className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileUpload('passbook', e)}
                      className="hidden"
                      id="passbook"
                    />
                    <label htmlFor="passbook" className="cursor-pointer">
                      <span className="text-xs sm:text-sm text-gray-600 break-words">
                        {uploadedFiles.passbook ? uploadedFiles.passbook.name : 'Click to upload passbook'}
                      </span>
                    </label>
                  </div>
                </div>

                {/* License */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business License *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-blue-400 transition-colors">
                    <Upload className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileUpload('license', e)}
                      className="hidden"
                      id="license"
                    />
                    <label htmlFor="license" className="cursor-pointer">
                      <span className="text-xs sm:text-sm text-gray-600 break-words">
                        {uploadedFiles.license ? uploadedFiles.license.name : 'Click to upload license'}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Shop Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Shop Image *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-blue-400 transition-colors">
                    <Upload className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload('shopImage', e)}
                      className="hidden"
                      id="shopImage"
                    />
                    <label htmlFor="shopImage" className="cursor-pointer">
                      <span className="text-xs sm:text-sm text-gray-600 break-words">
                        {uploadedFiles.shopImage ? uploadedFiles.shopImage.name : 'Click to upload shop image'}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Agreement and Submit */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                <input
                  type="checkbox"
                 
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1 flex-shrink-0"
                  required
                />
                <label className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  I agree to the <span className="text-blue-600 font-medium cursor-pointer hover:underline">Terms and Conditions</span> and <span className="text-blue-600 font-medium cursor-pointer hover:underline">Privacy Policy</span>. I confirm that all the information provided is accurate and complete.
                </label>
              </div>

              <button
                type="button"
                
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-semibold text-base sm:text-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95 sm:hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Check className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-2" />
                Submit Registration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Seller
