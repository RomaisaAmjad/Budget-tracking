import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

import Sort from '../Components/AddItem'

export default function Expenses() {
  return (
    <div className='relative'>
      <Navbar />
      <Sort heading={"Expenses"}/>

<div className='lg:mt-50  mt-120'>
 <Footer />
  </div>  
    </div>
  )
}
