import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'

export default function Users() {
  return (
    <>
    <div className='relative'>
      <Navbar />
      <h1 className="font-bold text-xl p-4">Users</h1>

      
      <div className="overflow-x-auto p-4">
        <table className="w-full border border-gray-300 mt-4 text-sm">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 text-center">First Name</th>
              <th className="border border-gray-300 p-2 text-center">Last Name</th>
              <th className="border border-gray-300 p-2 text-center">Email</th>
              <th className="border border-gray-300 p-2 text-center">Phone Number</th>
              <th className="border border-gray-300 p-2 text-center">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 text-center">Jhon</td>
              <td className="border border-gray-300 p-2 text-center">Doe</td>
              <td className="border border-gray-300 p-2 text-center">jhon@gmail.com</td>
              <td className="border border-gray-300 p-2 text-center">12-34567890</td>
              <td className="border border-gray-300 p-2 text-center">User</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">William</td>
              <td className="border border-gray-300 p-2 text-center">Wordsworth</td>
              <td className="border border-gray-300 p-2 text-center">daffodils@gmail.com</td>
              <td className="border border-gray-300 p-2 text-center">13-344432110</td>
              <td className="border border-gray-300 p-2 text-center">Admin</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">Ben</td>
              <td className="border border-gray-300 p-2 text-center">Franklin</td>
              <td className="border border-gray-300 p-2 text-center">BenFrenklin@gmail.com</td>
              <td className="border border-gray-300 p-2 text-center">22-9345555</td>
              <td className="border border-gray-300 p-2 text-center">User</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">Donald</td>
              <td className="border border-gray-300 p-2 text-center">Trump</td>
              <td className="border border-gray-300 p-2 text-center">TrumDonald911@gmail.com</td>
              <td className="border border-gray-300 p-2 text-center">34-45829722</td>
              <td className="border border-gray-300 p-2 text-center">Admin</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">Rizz</td>
              <td className="border border-gray-300 p-2 text-center">Adam</td>
              <td className="border border-gray-300 p-2 text-center">irizAdamm2@gmail.com</td>
              <td className="border border-gray-300 p-2 text-center">36-4585559722</td>
              <td className="border border-gray-300 p-2 text-center">Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
   
    </div>
    <div className='absolute top-199 sm:bottom-0 lg:top-110 left-0 w-full'>
            <Footer/>
        </div>
   
       </>
  );
}
