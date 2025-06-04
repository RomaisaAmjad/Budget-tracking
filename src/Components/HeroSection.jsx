import React from 'react'
import TrackingImg from '../assets/TrackingImg.png'

export default function HeroSection() {
  return (
    <div className='min-h-0 bg-purple-900 p-12 text-center mx-auto '>

      <h1 className='text-white font-bold text-3xl animate-bounce transition-normal duration-500 hover:cursor-pointer '>Take Your Budget Tracker Everywhere Anywhere!</h1>

      <img src={TrackingImg} alt="" className='w-3/5 lg:w-2/6 mx-auto animate-pulse transition-normal duration-500 hover:scale-110 hover:cursor-pointer hover:shadow-yellow-100' />
    </div>
  )
}
