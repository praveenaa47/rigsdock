import React, { useState } from 'react';
import { Upload, User, Building2, CreditCard, Calendar, Check } from 'lucide-react';
import Header from '../Components/Header';
import { vendorRegisterAPI, verifyaccount, verifygst, verifypan } from '../Services/sellerAPI';

  import { ToastContainer, toast } from 'react-toastify';


function Seller() {

     const [formData, setFormData] = useState({
    // User Details
    firstName: '',
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
    BusinessLicense: null,
    shopImage: null
  });

  const workingDayOptions = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  const businessTypes = [
    'Individual', 'Partnership', 'Private Limited', 'Public Limited', 'LLP'
  ];

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Basic validation
  if (!formData.agreeToTerms) {
    toast.error("Please agree to the terms and conditions");
    return;
  }

  // Check if all required files are uploaded
  if (!uploadedFiles.shopLogo || !uploadedFiles.passbook || !uploadedFiles.license || !uploadedFiles.shopImage) {
    toast.error("Please upload all required documents");
    return;
  }

  try {
    // Create FormData object for multipart/form-data
    const formDataToSend = new FormData();
    
    // Append all form data fields
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'workingDays') {
        formDataToSend.append(key, JSON.stringify(value));
      } else {
        formDataToSend.append(key, value);
      }
    });
    
    // Append files
    Object.entries(uploadedFiles).forEach(([key, file]) => {
      if (file) {
        formDataToSend.append(key, file);
      }
    });

    // Show loading state
    toast.info("Registering your vendor account...");

    // Call the API
    const response = await vendorRegisterAPI(formDataToSend);
    
    if (response.success) {
      toast.success("Registration successful!");
      // Reset form after successful registration
      setFormData({
  firstName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  pincode: '',
  country: '',
  businessName: '',
  store: '',
  gstNumber: '',
  businessAddress: '',
  businessCity: '',
  businessState: '',
  businessPincode: '',
  businessPhone: '',
  businessEmail: '',
  bankName: '',
  accountNumber: '',
  ifscCode: '',
  accountHolderName: '',
  workingDays: [],
  agreeToTerms: false,
  gst: '',
  pan: '',
  businessLandmark: '',
  storeType: '',
  password: '',
  description: ''
});
      setUploadedFiles({
        shopLogo: null,
        passbook: null,
        license: null,
        shopImage: null
      });
    } else {
      toast.error(response.message || "Registration failed");
    }
  } catch (error) {
    console.error("Registration error:", error);
    toast.error(error.response?.data?.message || "An error occurred during registration");
  }
};

 

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
  if (!file) return;
  
  // Validate file size (e.g., 5MB max)
  if (file.size > 5 * 1024 * 1024) {
    toast.error(`File too large (max 5MB): ${file.name}`);
    return;
  }
  
  setUploadedFiles(prev => ({
    ...prev,
    [fileType]: file
  }));
};


//   const handleVerify = async (type, value, ifsc = '') => {
//   if (!value) {
//     toast.warning(`${type} field is empty.`);
//     return;
//   }
  
//   try {
//     let res;
//     if (type === 'PAN') {
//       res = await verifypan(value);
//     } else if (type === 'GST') {
//       res = await verifygst(value);
//     } else if (type === 'IFSC') {
//       res = await verifyBank(formData.accountNumber, formData.ifscCode);
//     }
  
//     if (res?.success !== false) {
//       toast.success(`${type} is verified successfully.`);
//     } else {
//       toast.error(`Failed to verify ${type}: ${res?.error || ''}`);
//     }
//   } catch (err) {
//     console.error(err);
//     toast.error(`Error verifying ${type}. Please try again.`);
//   }
// };


const handleGstVerify = async () => {
  const res = await verifygst(formData.gst);
  if (res?.success && res?.data?.verified) {
    setFormData((prev) => ({
      ...prev,
      businessName: res?.data?.details?.legalName,
      businessAddress: res?.data?.details?.address?.building + ', ' + res?.data?.details?.address?.street,
      businessCity: res?.data?.details?.address?.city,
      businessState: res?.data?.details?.address?.state,
      businessPincode: res?.data?.details?.address?.pincode
    }))
    toast.success('GST Verified and details filled successfully');
  } else {
    toast.error('Invalid or inactive GST');
  }
};

const handlePanVerify = async () => {
  const res = await verifypan(formData.pan);
  
  if (res?.success && res?.data?.verified) {
    setFormData((prev) => ({
      ...prev,
      firstName: res?.data?.details?.name 
    }))
    toast.success('PAN verified successfully');
  } else {
    toast.error('Invalid PAN or inactive');
  }
};

const handleIfscVerify = async () => {
  const res = await verifyaccount(formData.accountNumber, formData.ifscCode);
  
  if (res?.success && res?.data?.verified) {
    setFormData((prev) => ({
      ...prev,
      isBankVerified: true
    }))
    toast.success('Bank account verified successfully');
  } else if (res?.data?.error) {
    toast.error(`Unable to verify: ${res?.data?.error}. Please try again.`);
  } else {
    toast.error('Failed to verify bank account');
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
  value={formData.firstName}
  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
  required
/>
                </div>
                
                
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
<input
  type="email"
  value={formData.email}
  onChange={(e) => setFormData({...formData, email: e.target.value})}
  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
  required
/>
                </div>
                
                
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                <textarea
  value={formData.address}
  onChange={(e) => setFormData({...formData, address: e.target.value})}
  rows="3"
  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base resize-none"
  required
/><input
  type="text"
  value={formData.city}
  onChange={(e) => setFormData({...formData, city: e.target.value})}
  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
  required
/>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                 <input
  type="text"
  value={formData.city}
  onChange={(e) => setFormData({...formData, city: e.target.value})}
  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
  required
/>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                 <input
  type="text"
  value={formData.state}
  onChange={(e) => setFormData({...formData, state: e.target.value})}
  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
  required
/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                 <input
  type="text"
  value={formData.country || ''} // Add country to your initial state if needed
  onChange={(e) => setFormData({...formData, country: e.target.value})}
  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
  required
/>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">PIN Code *</label>
                 <input
  type="text"
  value={formData.pincode}
  onChange={(e) => setFormData({...formData, pincode: e.target.value})}
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
  value={formData.businessName}
  onChange={(e) => setFormData({...formData, businessName: e.target.value})}
  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
  required
/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Landmark *</label>
              <input
  type="text"
  value={formData.businessLandmark || ''} // Add to initial state if needed
  onChange={(e) => setFormData({...formData, businessLandmark: e.target.value})}
  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
  required
/>  
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Location *</label>
              <input
  type="text"
  value={formData.businessLandmark || ''} // Add to initial state if needed
  onChange={(e) => setFormData({...formData, businessLandmark: e.target.value})}
  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
  required
/>  
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">  Store Type *</label>
                 <input
  type="text"
  value={formData.storeType || ''} // Add to initial state if needed
  onChange={(e) => setFormData({...formData, storeType: e.target.value})}
  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
  required
/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">  Password *</label>
                 <input
  type="password" // Changed from text to password
  value={formData.password || ''} // Add to initial state if needed
  onChange={(e) => setFormData({...formData, password: e.target.value})}
  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
  required
/>
                </div>
                
               
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                 <input
  type="text"
  value={formData.phone}
  onChange={(e) => setFormData({...formData, phone: e.target.value})}
  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
  required
/>
                </div>
               
                
                
              
                
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description*</label>
                 <textarea
  value={formData.description || ''} // Add to initial state if needed
  onChange={(e) => setFormData({...formData, description: e.target.value})}
  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base resize-none"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Number *</label>
                 <input
  type="text"
  value={formData.accountNumber}
  onChange={(e) => setFormData({...formData, accountNumber: e.target.value})}
  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
  required
/>
                </div>
                
             <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    IFSC Code *
  </label>
  <div className="flex">
    <input
      type="text"
      onChange={(e) =>
        setFormData((prev) => ({ ...prev, ifscCode: e.target.value }))
      }
      value={formData.ifscCode}
      className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
      required
    />
  <button
  onClick={() => handleIfscVerify ('IFSC', formData.ifscCode)}
  type="button"
  className="px-3 sm:px-4 py-2 sm:py-3 bg-blue-500 text-gray-50 font-semibold rounded-r-lg hover:bg-blue-600 transition-all">
  Verify
</button>

  </div>
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    PAN Number *
  </label>
  <div className="flex">
    <input
      type="text"
      onChange={(e) =>
        setFormData((prev) => ({ ...prev, pan: e.target.value }))
      }
      value={formData.pan}
      className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
      required
    />
   <button
  onClick={() => handlePanVerify ('PAN', formData.pan)}
  type="button"
  className="px-3 sm:px-4 py-2 sm:py-3 bg-blue-500 text-gray-50 font-semibold rounded-r-lg hover:bg-blue-600 transition-all">
  Verify
</button>

  </div>
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    GST Number*
  </label>
  <div className="flex">
    <input
      type="text"
      onChange={(e) =>
        setFormData((prev) => ({ ...prev, gst: e.target.value }))
      }
      value={formData.gst}
      className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
      required
    />
  <button
  onClick={() => handleGstVerify('GST', formData.gst)}
  type="button"
  className="px-3 sm:px-4 py-2 sm:py-3 bg-blue-500 text-gray-50 font-semibold rounded-r-lg hover:bg-blue-600 transition-all">
  Verify
</button>

  </div>
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
  checked={formData.agreeToTerms}
  onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1 flex-shrink-0"
  required
/>
                <label className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  I agree to the <span className="text-blue-600 font-medium cursor-pointer hover:underline">Terms and Conditions</span> and <span className="text-blue-600 font-medium cursor-pointer hover:underline">Privacy Policy</span>. I confirm that all the information provided is accurate and complete.
                </label>
              </div>

             <button
  onClick={handleSubmit}
  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-semibold text-base sm:text-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95 sm:hover:scale-105 transition-all duration-200 shadow-lg"
>
  <Check className="h-4 w-4 sm:h-5 sm:w-5 inline-block mr-2" />
  Submit Registration
</button>
            </div>
          </div>
        </div>
      </div>
              <ToastContainer position="top-right" autoClose={3000} />
      
    </div>
    </>
  )
}

export default Seller
