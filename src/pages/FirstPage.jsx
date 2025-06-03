import React from 'react'
import LoginForm from '../Components/LoginForm'
import Name from '../assets/Name.png'
import loginImg from '../assets/loginImg.png'
import Footer from '../Components/Footer'

export default function FirstPage() {
  return (
    <div>
        <div><img src={Name} alt="This is the logo" className='h-16 p-5' /></div>
        <div className='flex flex-col lg:flex-row items-center justify-evenly'>
            <div className='border-2 border-none p-5 w-80 md:w-96 '> 
                <h1 className='text-2xl font-bold '>Welcome Back!</h1>
                <h3 className='text-lg text-gray-400 mb-3'>Sign in to continue to Budget Tracker</h3>
                <LoginForm/>
            </div>
            <div> <img src={loginImg} alt="This is login Page Image" className='hidden lg:block w-80 lg:h-80 ' /></div>
        </div>
        <div className='mt-76'>
              <Footer/>
        </div>
        

    </div>
  )
}
