"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "../../../assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScroll(true);
      else setIsScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-colors duration-300
        ${
          isScroll
            ? "bg-white/30 backdrop-blur-lg shadow-sm dark:bg-gray-900/30"
            : "bg-transparent dark:bg-gray-900/30"
        }`}
    >
      <a
        href="#"
        className={`cursor-pointer mr-14 text-3xl font-semibold ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        ToYoSi.
      </a>

      <ul
        className={`hidden md:flex items-center gap-6 rounded-full px-12 py-3 transition-colors duration-300
          ${isScroll ? "" : "shadow-sm"} ${
          isDarkMode ? "bg-gray-800/30 text-white" : "bg-white/50 text-black"
        }`}
      >
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#services">My Services</a></li>
        <li><a href="#work">My Work</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div className="flex items-center gap-3">
        {/* Theme toggle button */}
        <button onClick={() => setIsDarkMode((prev) => !prev)}>
          <Image
            src={isDarkMode ? assets.sun_icon : assets.moon_icon}
            alt="toggle theme"
            className="w-6"
          />
        </button>

        <a
          href="#contact"
          className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full ml-4 transition-colors duration-300 ${
            isDarkMode ? "border-gray-400 text-white" : "border-gray-500 text-black"
          }`}
        >
          Contact
          <Image src={assets.arrow_icon} className="w-3" alt="contact me" />
        </a>

        <button className="block md:hidden ml-3 cursor-pointer" onClick={openMenu}>
          <Image src={assets.menu_black} alt="menu" className={`w-6 ${isDarkMode ?  "invert" :"" }`}/>
        </button>
      </div>

      {/* Mobile menu */}
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-6 py-20 fixed -right-64 top-0 w-64 z-50 h-screen bg-rose-50 dark:bg-gray-900/90 transition-transform duration-500 shadow-lg rounded-l-xl px-6"
      >
        <div className="absolute right-6 top-6 cursor-pointer" onClick={closeMenu}>
          <Image src={assets.close_black} alt="close" className={`w-5 ${isDarkMode ? "invert" : ""}` }/>
        </div>
        <li className="hover:text-rose-600 transition-colors"><a onClick={closeMenu} href="#top">Home</a></li>
        <li className="hover:text-rose-600 transition-colors"><a onClick={closeMenu} href="#about">About Me</a></li>
        <li className="hover:text-rose-600 transition-colors"><a onClick={closeMenu} href="#services">My Services</a></li>
        <li className="hover:text-rose-600 transition-colors"><a onClick={closeMenu} href="#work">My Work</a></li>
        <li className="hover:text-rose-600 transition-colors"><a onClick={closeMenu} href="#contact">Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
