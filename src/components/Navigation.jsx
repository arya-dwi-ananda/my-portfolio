import React, { useState } from "react";
import { useTheme } from "./ThemeContext";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const changeToggle = () => setIsOpen(!isOpen);
  const changeToggleToFalse = () => setIsOpen(false);
  const { darkMode, setDarkMode } = useTheme();

  return (
    <>
      /* Navbar */
      <div className={`fixed top-0 left-0 z-39 w-full backdrop-blur-lg ${darkMode && "bg-[#23272F]"}`}>
        <nav className="flex w-full md:max-w-7xl md:justify-around justify-between items-center md:py- px-6 mx-auto relative">
          <h2 className={`mask-conic-from-neutral-950 text-[51px] md:text-7xl my-0  ${darkMode ? "text-[#61DAFB]" : "text-[#087EA4]"}`}>A</h2>
          {/* {`nav-menu" className="md:flex mx-auto gap-8 ${isOpen ? "flex" : "hidden"}`} */}

          {/* Desktop menu */}
          <ul id="nav-menu" className={`md:flex flex-row items-center gap-6 hidden ${darkMode && "text-gray-300"}`}>
            <li className={`${darkMode ? "hover:bg-[#2b313b]" : "hover:bg-gray-100"} rounded-full px-3 py-2.5`}>
              <a href="#home">Home</a>
            </li>
            <li className={`${darkMode ? "hover:bg-[#2b313b]" : "hover:bg-gray-100"} rounded-full px-3 py-2.5`}>
              <a href="#about">About</a>
            </li>
            <li className={`${darkMode ? "hover:bg-[#2b313b]" : "hover:bg-gray-100"} rounded-full px-3 py-2.5`}>
              <a href="#skills">Skills</a>
            </li>
            <li className={`${darkMode ? "hover:bg-[#2b313b]" : "hover:bg-gray-100"} rounded-full px-3 py-2.5`}>
              <a href="#projects">Projects</a>
            </li>
            <li className={`${darkMode ? "hover:bg-[#2b313b]" : "hover:bg-gray-100"} rounded-full px-3 py-2.5`}>
              <a href="#contacts">Contact</a>
            </li>
          </ul>

          {/* Display option on the Desktop */}
          <div onClick={() => setDarkMode(!darkMode)} className="md:flex items-center hidden cursor-pointer">
            {darkMode ? <i className={`fa-regular fa-sun text-[31px] text-gray-300 hover:bg-[#2b313b] rounded-full p-2`}></i> : <i className={`fa-regular fa-moon text-3xl hover:bg-gray-100 rounded-full py-1.5 px-2.5`}></i>}
          </div>

          {/* Mobile hamburger button */}
          <div onClick={changeToggle} className={`md:hidden z-50 ${darkMode ? "bg-[#61DAFB]" : "bg-[#087EA4]"} rounded-md px-2 pt-1 pb-0.7" id="nav-toggle`}>
            <i className={`${isOpen ? "hidden" : "block"} fa-solid fa-bars text-2xl text-white`}></i>
          </div>
        </nav>
      </div>
      {/* Mobile overlay - Outside the navbar */}
      <div className={`flex fixed inset-0 z-40 bg-black/30 cursor-pointer transition-opacity duration-300 ease-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none "}`}>
        <ul
          id="nav-menu"
          className={`flex flex-col gap-8 text-xl font-semibold font-sans ${darkMode ? "bg-[#23272F] text-[#F6F7F9]" : "bg-white"} h-screen w-3/4 ml-auto pt-30 ps-10 transition-all duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <li>
            <a href="#home" onClick={changeToggleToFalse}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={changeToggleToFalse}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={changeToggleToFalse}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={changeToggleToFalse}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contacts" onClick={changeToggleToFalse}>
              Contact
            </a>
          </li>
          <div onClick={() => setDarkMode(!darkMode)} className="flex items-center md:hidden cursor-pointer mt-3">
            {darkMode ? <i className={`fa-regular fa-sun text-[31px] text-gray-300 hover:bg-[#2b313b] rounded-full p-2`}></i> : <i className={`fa-regular fa-moon text-3xl hover:bg-gray-100 rounded-full py-1.5 px-2.5`}></i>}
          </div>
        </ul>
      </div>
      <button
        onClick={changeToggle}
        className={`md:hidden fixed right-6 top-4 z-50 rounded-md ${darkMode ? "bg-[#61DAFB]" : "bg-[#087ea4]"}
    px-2 py-1 ${isOpen ? "block" : "hidden"}`}
      >
        <i className={`${isOpen ? "block" : "hidden"} fa-solid fa-xmark text-2xl text-white pt-1 px-0.5`}></i>
      </button>
    </>
  );
}

export default Navigation;
