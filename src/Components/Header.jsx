
import { Link, useLocation } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

export default function Header() {
  const location = useLocation();
  const Path = location.pathname;

  return (
    <div>
      <div className="flex flex-row items-center justify-between bg-gray-200">
        <div className="flex flex-row items-center justify-start gap-1 p-2">
         
        </div>

        <div className="flex gap-5 p-2 pr-4 font-bold ">
          <Link
            to="/ProfileSection"
            className={`${Path === "/ProfileSection"? "text-purple-900 underline": "text-black" }`}
          >
            Profile
          </Link>

          <Link
          
            to="/MyAccount"
            className= {`${Path === "/MyAccount"?"text-purple-900 underline":"text-black"}`} >
            My Account
          </Link>
        </div>
      </div>
    </div>
  );
}
