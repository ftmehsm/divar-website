import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const queryClient = useQueryClient();
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const exitHandler = () => {
    navigate("/auth")
    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    queryClient.invalidateQueries("userProfile")
    toggleDropdown()
  }

  return (
    <>
      <nav className="flex justify-between items-center px-3 py-[10px] mb-5 border-b-2 border-b-[rgb(234,234,234)]">
        <div className="flex items-center ">
          <Link to="/" className="w-[45px] h-[40px]">
            <img src="divar.svg" alt="divar-logo" className="w-full h-full" />
          </Link>
          <button className="flex items-center leading-[50px] h-10 text-gray-500 mr-3 hover:bg-gray-200 rounded-md px-1">
            <span className="mr-[5px]">تـهران</span>
            <img src="location.svg" alt="loaction" className="w-6 h-6" />
          </button>
        </div>
        <div className="flex items-center">
          <Link to="/auth" className="relative" >
          <div className="flex items-center gap-2 h-10 leading-[50px] text-gray-500  hover:bg-gray-200 rounded-md px-2">
            <img src="profile.svg" alt="" className="w-5 h-5" />
            <span>دیوار من</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" onClick={toggleDropdown}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
           </svg>

          </div>
          {isDropdownOpen && (
            <div
            onClick={exitHandler}
              className="absolute top-9 left-0 w-full bg-slate-100 text-center rounded-md h-10 leading-10 shadow-md cursor-pointer"
            >
              خروج
            </div>
          )}
          </Link>
          <Link to="/dashboard" className="mr-7 bg-Primary text-white h-10 w-20 text-center leading-10 rounded-md">ثبت آگهی</Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
