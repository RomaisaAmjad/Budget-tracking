import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone, MdLink } from "react-icons/md";

export default function ProfileCard() {
  return (
    <div>
       <div className="w-full h-max  bg-white shadow-gray-500 shadow-sm p-4 rounded-lg">
            <div className="flex flex-col items-center justify-center">
              <FaUser className="text-6xl text-purple-900 mb-5" />
              <h1 className="font-bold">Camerron Williamson</h1>
              <p className="text-gray-500">Project Manager</p>
              <div>
                <div className="flex flex-row items-center justify-start mt-5 gap-2">
                  <MdPhone className="text-gray-500 text-xl" />
                  <h5 className="text-sm">(03)21-9158118</h5>
                </div>
                <div className="flex flex-row items-center justify-start mt-5 gap-2">
                  <MdEmail className="text-gray-500 text-xl" />
                  <h5 className="text-sm">williamson911@gmail.com</h5>
                </div>
                <div className="flex flex-row items-center justify-start mt-5 gap-2">
                  <MdLocationOn className="text-gray-500 text-xl" />
                  <h5 className="text-sm">Giza, Egypt</h5>
                </div>
                <div className="flex flex-row items-center justify-start mt-5 gap-2">
                  <MdLink className="text-gray-500 text-xl" />
                  <h5 className="text-sm">www.youtube.com</h5>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
