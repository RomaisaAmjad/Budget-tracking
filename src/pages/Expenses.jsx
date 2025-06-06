import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import Sort from '../Components/AddItem'

export default function Expenses() {
  return (
       
    <div className='relative'>
    <div className='relative'>
      <Navbar />
      <Sort heading={"Expenses"}/> 
    </div>
    <div className='absolute top-199 sm:bottom-0 left-0 w-full'>
            <Footer/>
        </div>
    </div>
  )
}
