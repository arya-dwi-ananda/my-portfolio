import React, { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const changeToggle = () => setIsOpen(!isOpen);
  const changeToggleToFalse = () => setIsOpen(false);

  return (
    <>
      /* Navbar */
      <div className="fixed top-0 left-0 z-39 w-full backdrop backdrop-blur-lg">
        <nav className="flex w-full md:max-w-7xl md:justify-around justify-between items-center py-1 px-6 mx-auto relative">
          <h2 className={`mask-conic-from-neutral-950 text-4xl md:text-7xl my-0 text-[#087EA4]`}>A</h2>
          {/* {`nav-menu" className="md:flex mx-auto gap-8 ${isOpen ? "flex" : "hidden"}`} */}

          {/* Desktop menu */}
          <ul id="nav-menu" className="md:flex flex-row items-center gap-6 hidden">
            <li className="hover:bg-gray-100 rounded-full px-3 py-2.5">
              <a href="#home">Home</a>
            </li>
            <li className="hover:bg-gray-100 rounded-full px-3 py-2.5">
              <a href="#about">About</a>
            </li>
            <li className="hover:bg-gray-100 rounded-full px-3 py-2.5">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:bg-gray-100 rounded-full px-3 py-2.5">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:bg-gray-100 rounded-full px-3 py-2.5">
              <a href="#contacts">Contact</a>
            </li>
          </ul>

          {/* Desktop social media */}
          <div className="md:flex items-center hidden">
            <a href="https://github.com/arya-dwi-ananda">
              <i className="fa-brands fa-github text-4xl hover:bg-gray-100 rounded-full p-3"></i>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div onClick={changeToggle} className="md:hidden z-50 bg-[#087EA4] rounded-md px-2 py-1" id="nav-toggle">
            <i className={`${isOpen ? "hidden" : "block"} ri-menu-line nav__burger text-2xl text-white`}></i>
          </div>
        </nav>
      </div>
      {/* Mobile overlay - Outside the navbar */}
      <div className={`flex fixed inset-0 z-40 bg-black/30 cursor-pointer transition-opacity duration-300 ease-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none  "}`}>
        <ul id="nav-menu" className={`flex flex-col gap-8 text-2xl font-semibold font-sans bg-white h-screen w-3/4 ml-auto pt-30 ps-10 transition-all duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
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
            <a href="#contact" onClick={changeToggleToFalse}>
              Contact
            </a>
          </li>
          <div className="pt-20 flex items-center gap-5">
            <a href="https://github.com/arya-dwi-ananda">
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-arya-dwi-ananda-454737405/">
              <i class="fa-brands fa-linkedin text-2xl"></i>
            </a>
          </div>
        </ul>
      </div>
      <button
        onClick={changeToggle}
        className={`md:hidden fixed right-6 top-4 z-50 rounded-md bg-[#087ea4]
    px-2 py-1 ${isOpen ? "block" : "hidden"}`}
      >
        <i className={`${isOpen ? "block" : "hidden"} ri-close-line nav__close text-2xl text-white`}></i>
      </button>
    </>
  );
}

export default Navigation;
