import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Paragraphs from "../Components/Paragraphs.jsx";
import ProfileCard from '../Components/ProfileCard.jsx'
import Footer from '../Components/Footer.jsx'

export default function MyAccount() {
  function clicking() {
    alert("Profile Updated Successfully");
  }
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex flex-col justify-start md:flex-col lg:flex-row lg:justify-evenly gap-2  min-h-screen bg-gray-200">
          {/* Left Profile Card */}
         <ProfileCard/>

          {/* Right Form Section */}
          <div className="w-full lg:w-3/4 bg-white p-4 mr-3  shadow-gray-500 shadow-sm rounded-lg">
            <h2 className="text-black font-medium">My Account</h2>

            <div className="w-full m-1  p-5   bg-white">
              <h2 className="font-medium text-black text-sm">About Me</h2>
              <p className="text-sm text-gray-500 p-3 text-justify">
                I’m Williamsons Cameron, a passionate and strategic Product
                Manager with a strong background in translating business goals
                into innovative, user-centric digital products. With over
                [insert years] years of experience leading cross-functional
                teams, I specialize in defining clear product visions, managing
                end-to-end lifecycles, and delivering solutions that truly
                resonate with users. I thrive in fast-paced environments where
                collaboration, data, and creativity intersect. My approach is
                rooted in continuous user feedback, agile methodologies, and a
                relentless drive to solve real-world problems. From launching
                MVPs to scaling mature platforms, I bring structure, clarity,
                and strategic insight to every product I manage. Outside of
                work, I’m a curious learner, tech enthusiast, and someone who
                believes that the best products come from listening deeply and
                iterating quickly.
              </p>
            </div>
            <div className="w-full m-1  p-2  bg-white">
              <Paragraphs
                title1="Full Name"
                content1="Camerron Williamson"
                title2="Father Name"
                content2="Jhon Williamson"
              />
              <Paragraphs
                title1="Gender"
                content1="Male"
                title2="Phone"
                content2=" 0321-9158118"
              />
              <Paragraphs
                title1="Email"
                content1="Camerron911@gmail.com"
                title2="Zip Code"
                content2="12345"
              />
              <Paragraphs
                title1="Education"
                content1="Master"
                title2="Date of Birth"
                content2="31 May 2024"
              />
              <Paragraphs
                title1="Address"
                content1="Giza, Egypt"
                title2="Budget Limit"
                content2="30000 PKR"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
