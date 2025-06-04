import Navbar from "./Navbar.jsx";
import Input from "./Input.jsx";
import ProfileCard from "./ProfileCard.jsx";
import Footer from '../Components/Footer.jsx'

export default function ProfileSection() {
  function UpdateButtonClicked() {
    alert("Profile Updated Successfully");
  }
  function CancelButtonClicked(){
    alert("Profile Update Cancelled");
  }
  return (
    <div className='relative'>
      <Navbar />
      <div  className=" bg-gray-200" >
        <div className="flex flex-col justify-start md:flex-col lg:flex-row lg:justify-evenly gap-2 min-h-screen p-3">
          {/* Left Profile Card */}
          <ProfileCard />
          
          {/* Right Form Section */}
          <div className="w-full lg:w-3/4 bg-white shadow-gray-500 shadow-sm p-4 rounded-lg mr-3">
            <h2 className="text-black font-medium">My Account</h2>

            <div className="mt-5">
            <h2 className="text-black font-medium text-sm">Name & Job</h2>
            <div className="flex flex-row gap-2 flex-1">
            <Input label="First Name" id="First Name" placeholder="williamson" required />
            <Input label="Last Name" id="Last Name" placeholder="Camerron" required />
            <Input label="Job" id="Job" placeholder="Product Manager" required />
            </div>
             <div className="border-gray-300 border mt-3"></div>
            </div>

             <div className="mt-5">
            <h2 className="text-black font-medium text-sm">Address</h2>
            <div className="flex flex-row gap-2 flex-1">
            <Input label="Street Address" id="Street Address" placeholder="78 north 34 south" required />
            <Input label="City" id="City" placeholder="Giza" required />
            <Input label="Zip Code" id="Zip Code" placeholder="7328437398" required />
            </div>
             
             <label htmlFor="text" className="text-sm text-gray-500 ">Complete Address</label> <br />
             <input type="text" placeholder="Address" className=" w-full border border-gray-300 rounded-md text-sm p-1 bg-gray-200 focus:outline-none" />
             <div className="border-gray-300 border mt-3"></div>
            </div>

             <div className="mt-5">
            <h2 className="text-black font-medium text-sm">Contact Info</h2>
            <div className="flex flex-row gap-2 flex-1">
            <Input label="Phone" id="Phone" placeholder="(03)21-9158118" />
            <Input label="Email" id="Email" placeholder="williamson911@gmail.com" />
            </div>
             <div className="border-gray-300 border mt-3"></div>
            </div>

             <div className="mt-5">
            <h2 className="text-black font-medium text-sm">Bio</h2>
            <div className="flex flex-row gap-2 flex-1">
            <Input label="Date of Birth" id="Date of Birth" placeholder="31/01/2004" />
            <Input label="Education" id="Education" placeholder="Masters" />
            <Input label="Gender" id="Gender" placeholder="Male" />
            </div>
             <div className="border-gray-300 border mt-3"></div>
            </div>

             <div className="mt-5">
            <h2 className="text-black font-medium text-sm">Financial Information</h2>
            <div className="flex flex-row gap-2 flex-1">
            <Input label="Budget Limit(PKR)" id="Budget Limit" placeholder="10000-50000" />
            </div>
            <button onClick={UpdateButtonClicked} className="bg-purple-900 pl-4 pr-4 p-2 rounded-md text-white mt-3 m-2  hover:cursor-pointer hover:bg-purple-700" style={{ boxShadow: "inset 0 6px 4px rgba(0, 0, 0, 0.3)" }}>Update</button>
            <button onClick={CancelButtonClicked} className="bg-gray-100 pl-4 pr-4 p-2 rounded-md text-gray-700 mt-3 m-2 hover:cursor-pointer hover:bg-gray-200 ">Cancel</button>
            </div>

          </div>
        </div>
      </div>
      <div className='absolute top-299 lg:top-213 sm:bottom-0 left-0 w-full bg-gray-200'>
            <Footer/>
        </div>
    </div>
  );
}
