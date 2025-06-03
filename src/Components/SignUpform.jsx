import React from 'react'
import  { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiEye, FiEyeOff } from "react-icons/fi";

export default function SignUpform() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
  return (
    <div>
      <div className='flex flex-col md:flex-row gap-4 mb-5 '>
        <div className='flex flex-col '>
          <label htmlFor="FirstName" className='text-sm font-medium '> First Name</label>
            <div>
             <input type="text" id="FirstName" placeholder="Camerron" className='p-2 w-50 focus:outline-none border border-gray-300 rounded-md  text-sm' />
           </div>
        </div>
        <div className='flex flex-col '>
          <label htmlFor="LasttName" className='text-sm font-medium '> Last Name</label>
            <div>
             <input type="text" id="LasttName" placeholder="Williamson" className='p-2 w-50 focus:outline-none border border-gray-300 rounded-md text-sm' />
           </div>
        </div>
      </div>

              {/* User Input */}
            <div className="mb-3">
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
            {/* Confirm Password Input */}
             <div className="mb-3">
              <label className="text-sm font-medium m-auto">Confirm Password</label>
              <div className="relative">
                <input
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword2(!showPassword2)}
                  className="absolute right-3 top-3 text-gray-500"
                >
                     {showPassword2 ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* Budget Amount */}
            <div className="mb-3">
              <label className="text-sm font-medium m-auto">Budget Amount</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your budget amount"
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                />
                </div>

            </div>
          {/* Signup button */}
           <Link to="/ProfileSection" className="block font-bold w-full text-center bg-purple-900 text-white py-2 rounded-md hover:bg-purple-700 transition" style={{ boxShadow: "inset 0 6px 4px rgba(0, 0, 0, 0.3)" }}>SIGN UP</Link>
           <p className="mt-6 text-center text-sm">
                     Already have an account?&nbsp;
                     <Link to="/firstPage" className="text-purple-900 font-medium hover:underline" >
                       Login
                     </Link>
                   </p>
    </div>        


  )
}
