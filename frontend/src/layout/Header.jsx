import { Link } from "react-router-dom";

function Header() {
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
          <Link to="/auth" className="flex items-center h-10 leading-[50px] text-gray-500  hover:bg-gray-200 rounded-md px-2">
            <img src="profile.svg" alt="" className="w-5 h-5" />
            <span className="mr-[5px]">دیوار من</span>
          </Link>
          <Link to="/dashboard" className="mr-7 bg-Primary text-white h-10 w-20 text-center leading-10 rounded-md">ثبت آگهی</Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
