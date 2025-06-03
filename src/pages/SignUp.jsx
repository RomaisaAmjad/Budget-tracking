import React from "react";
import Name from "../assets/Name.png";
import signupImg from "../assets/signUp.png";
import Signupform from "../Components/SignUpform.jsx";
import Footer from "../Components/Footer.jsx";

export default function SignUp() {
  return (
    <div>
      <div>
        <img src={Name} alt="This is the logo" className="h-16 p-5" />
      </div>
      <div className="flex flex-row items-center justify-evenly m-auto bo ">
        <div className="border-2 border-none p-5 w-96">
          <h1 className="text-2xl font-bold ">Welcome Back!</h1>
          <h3 className="text-lg text-gray-400 mb-3">
            Sign in to continue to Budget Tracker
          </h3>
          <div className="flex flex-col md:flex-row gap-4 mb-5 ">
            <Signupform />
          </div>
        </div>
        <div>
          {" "}
          <img
            src={signupImg}
            alt="This is login Page Image"
            className="hidden lg:block h-80 w-50 md:w-76 "
          />
        </div>
      </div>
      <div className="mt-14">
           <Footer />
      </div>
    
    </div>
  );
}
