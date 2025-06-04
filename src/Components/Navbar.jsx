import React from 'react'
import { Link } from 'react-router-dom';
import circleLogo from '../assets/circleLogo.png';
import Header from './Header';
import { useState } from 'react';
import { FaBell, FaUser, FaBars } from 'react-icons/fa';


export default function Navbar() {
  const[hamburger,setHamburger]= useState(false);

  const toggleHamburger= ()=>{
    setHamburger(!hamburger);
    //alert("Toggled checking!")
  }
  return (
    <div >
      <div className='flex flex-row items-center justify-between  shadow-sm shadow-gray-100'>
        <div className='flex flex-row'>
            <img src={circleLogo} alt="This is a logo" className='h-16 p-5 ' />
            <button
            onClick={toggleHamburger} className='cursor-pointer text-purple-900 text-2xl'>
              <FaBars />
            </button>
        </div>
        <div className={`fixed top-0 left-0 min-h-screen w-1/2 lg:w-1/4 bg-purple-900 transform z-30 transition-transform duration-100 ease-in ${hamburger? "translate-x-0":"-translate-x-full"}`}>
        <button
            onClick={toggleHamburger} className='cursor-pointer text-white text-2xl p-4'>
              <FaBars />
            </button>
            <h3 className='text-white text-xl p-3 font-bold shadow-sm'>DashBoard</h3>

            <span className='style-none text-white cursor-pointer font-medium text-lg p-3 m-2 '>
              <Link to="/Expenses"> Expenses</Link>
            </span><br />
            <span className='style-none text-white cursor-pointer font-medium text-lg p-3 m-2 '>
              <Link to="/Users">Users</Link>
            </span><br />
            <span className='style-none text-white cursor-pointer font-medium text-lg p-3 m-2 '>
              <Link to="/Landing"> Login</Link>
            </span><br />
            <span className='style-none text-white cursor-pointer font-medium text-lg p-3 m-2 '>
              <Link to="/Analytics"> Analytics</Link>
            </span>

            </div>
        <div className='flex flex-row items-center justify-between p-5 gap-5'>
            <FaBell className='text-2xl hover:cursor-pointer text-purple-900' />
            <Link to='/ProfileSection'>
              <FaUser className='text-2xl hover:cursor-pointer text-purple-900' />
            </Link>
        </div>
      </div>
      <Header />
    </div>
  )
}
