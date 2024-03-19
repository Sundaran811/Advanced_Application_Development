import { useEffect, useState } from "react";
import NavbarDropdown from "./navbarDropdown";
import { Link } from "react-router-dom";
import { green } from "@mui/material/colors";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY

    if(currentScrollPos > scrollPos) {
      setIsOpen(false)
    } 
    
    setScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos)

    return () => {
      window.removeEventListener("scroll", handleScrollPos)
    }
  }, [scrollPos]);

  return (
    <nav className="bg-primary-300 relative">
      <div className="container mx-auto max-w-[1344px]">
        <div className="h-16 md:h-20 p-5 md:py-6 lg:px-5 flex items-center justify-between z-20 bg-white-300 relative">
          {/* Icon */}
          <Link to="/"><strong><p
            style={{color:'#fff'}}
          >Golden-Years</p>
          </strong></Link>

          {/* Hamburger */}
          <div
            onClick={handleOpen}
            className={`${
              isOpen ? "open" : ""
            } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20`}
          >
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-black-500 rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center md:gap-4 lg:gap-8 text-black-200 text-sm lg:text-base font-body">
          <Link to="/">
             <strong> <p className=" cursor-pointer"  style={{color:'#fff'}}>Home</p></strong>
            </Link>
            <Link to="/userdash">
             <strong> <p className="cursor-pointer"  style={{color:'#fff'}}>Services</p></strong>
            </Link>
            <Link to="/login"><strong>
              <p className="cursor-pointer"  style={{color:'#fff'}}>Login</p></strong>
            </Link>
            
          </div>

          {/* Button */}
          <div className="hidden md:flex md:gap-4 lg:gap-[25px] items-center text-sm lg:text-base font-head font-medium">
            
          {/* <Link to="/">
              <button  style={{color:'#fff'}}>
                User Profile
              </button>
            </Link> */}
          </div>
        </div>

        {/* Navbar Menu (Mobile) */}
        <NavbarDropdown isOpen={isOpen} />
      </div>
    </nav>
  );
}