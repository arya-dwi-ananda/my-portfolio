import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
function Navigation() {
  return (
    <div className="fixed top-0 left-0 z-999999 w-full bacdrop backdrop-blur-lg">
      <nav className="flex w-full md:max-w-7xl md:justify-around justify-between items-center py-4 px-6 mx-auto">
        <h2 className="font-bold text-4xl md:text-5xl my-0 text-sky-500">Arya</h2>
        <ul className="md:flex mx-auto gap-8 hidden">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="flex items-center">
          <a href="https://github.com/arya-dwi-ananda">
            <img src={github} alt="" className="w-10 h-10" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-arya-dwi-ananda-454737405/">
            <img src={linkedin} alt="" className="w-13 h-13" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
