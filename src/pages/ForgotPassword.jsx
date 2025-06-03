import React from 'react'
import Forgot from '../assets/ForgetPass.png'
import Name from '../assets/Name.png'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function ForgotPassword() {
  return (
     <div>
        <div><img src={Name} alt="This is the logo" className='h-16 p-5' /></div>
        <div className='flex flex-row items-center justify-evenly  mb-9 '>
            <div className='border-2 border-none w-96'> 
                <h1 className='text-2xl font-bold '>Reset Password</h1>
                <h3 className='text-lg text-gray-400 mb-8'>Enter Your email for a reset link</h3>
                <div className='mb-3'>
                  <label htmlFor="email">Email</label>
                  <div>
                  <input type="email" id="email" placeholder="test@gmail.com" className='p-2 w-full focus:outline-none border border-gray-300 rounded-md'/>
                  <button className='bg-purple-900 text-white p-2 mt-3 w-full rounded-md hover:bg-purple-700 transition hover:cursor-pointer' style={{ boxShadow: "inset 0 6px 4px rgba(0, 0, 0, 0.3)" }}>Send Reset Link</button>
                  </div>
                </div>
                <p className="mt-6 text-center text-sm">
                   Don't have an account?&nbsp;
                  <Link to="/Signup" className="text-purple-900 font-medium hover:underline">
                     Sign Up
                  </Link>
                </p>

            </div>

            <div> <img src={Forgot} alt="This is login Page Image" className='hidden lg:block h-80 w-100' /></div>
        </div>
        <div className='mt-120'>
             <Footer/>
        </div>
      
    </div>
  )
}
