import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiEye, FiEyeOff } from "react-icons/fi";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
                 {/* User Input */}
        <div className="mb-3 md:w-full">
          <label className="text-sm font-medium m-auto">E-mail</label>
          <div className="relative"> 
            {/* By default the icons are absolute means they will be moving to unexpected places to avoid that we will use relative */}
              <FiMail className="absolute right-4 top-3 text-gray-500" />
            <input
              type="email"
              placeholder="test@gmail.com"
              className="w-full pr-4 pl-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
        </div>
                   {/* Password Input */}
        <div className="mb-3">
          <label className="text-sm font-medium m-auto">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500"
            >
                 {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <Link to="/ForgotPassword" className="text-sm text-purple-900 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <Link to="/ProfileSection" className="block w-full text-center font-bold bg-purple-900 text-white py-2 rounded-md hover:bg-purple-700 transition" style={{ boxShadow: "inset 0 6px 4px rgba(0, 0, 0, 0.3)" }}>LOG IN</Link>


        <p className="mt-6 text-center text-sm">
          Don't have an account?&nbsp;
          <Link to="/Signup" className="text-purple-900 font-medium hover:underline" >
            Sign Up
          </Link>
        </p>
      </div>
  );
};

export default LoginForm;
