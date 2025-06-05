import React from 'react'
import { Eye } from 'lucide-react';

function Login() {
  return (
<div className="min-h-screen bg-black/30 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <div className="space-y-6">
          {/* Username/Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Username or email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"
              onFocus={(e) => e.target.style.borderColor = 'rgb(10, 95, 191)'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"
                onFocus={(e) => e.target.style.borderColor = 'rgb(10, 95, 191)'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Eye size={20} />
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              className="h-4 w-4 border-gray-300 rounded focus:ring-2 focus:ring-offset-2"
              style={{ 
                accentColor: 'rgb(10, 95, 191)',
                '--tw-ring-color': 'rgb(10, 95, 191)'
              }}
            />
            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="button"
            className="w-full text-white py-3 px-6 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"
            style={{ backgroundColor: 'rgb(10, 95, 191)' }}
          >
            Login
          </button>

          {/* Lost Password Link */}
          <div className="text-center">
            <a 
              href="#" 
              className="text-sm underline transition-colors hover:opacity-80" 
              style={{ color: 'rgb(10, 95, 191)' }}
            >
              Lost your password?
            </a>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <span className="text-sm text-gray-600">Don't have an account yet? </span>
            <a 
              href="/register" 
              className="text-sm font-medium underline transition-colors hover:opacity-80" 
              style={{ color: 'rgb(10, 95, 191)' }}
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
