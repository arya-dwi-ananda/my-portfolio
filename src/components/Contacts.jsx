import React from "react";
import Container from "./Container";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import instagram from "../assets/instagram.png";

export default function Contacts() {
  return (
    <div className="w-full bg-linear-to-b from-gray-100 to-white">
      <div id="contacts" className="md:max-w-6xl w-9/10 mx-auto flex flex-col pt-10 pb-20 gap-12">
        <h2 className="text-center text-lg font-medium">Contacts</h2>
        <Container>
          <p>Lets Connect there</p>
          <hr className="border border-gray-200" />
          <section className="flex md:flex-row flex-col gap-5">
            <div>
              <h2 className={`font-bold text-2xl md:text-3xl my-0 text-[#087EA4]`}>Arya</h2>
              <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, ipsa. Quo porro voluptatem dolores vero.</p>
            </div>
            <div className="flex justify-between md:gap-5">
              <div className="flex flex-col gap-1">
                <p>Navigation</p>
                <ul id="nav-menu" className="md:flex flex-col text-gray-500">
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
              </div>
              <div className="flex flex-col gap-1">
                <p>Contact</p>
                <ul id="nav-menu" className="md:flex flex-col text-gray-500">
                  <li>+62 858-5604-0899</li>
                  <li>aryadwiananda69@gmail.com</li>
                  <li>GitHub</li>
                  <li>LinkedIn</li>
                  <li>Instagram</li>
                </ul>
              </div>
            </div>
          </section>
          <div className="flex items-center justify-center">
            <a href="mailto:aryadwiananda69@gmail.com">
              <img src={email} alt="" className="w-10 h-10 me-2" />
            </a>
            <a href="https://github.com/arya-dwi-ananda">
              <img src={github} alt="" className="w-10 h-10" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-arya-dwi-ananda-454737405/">
              <img src={linkedin} alt="" className="w-13 h-13" />
            </a>

            <a href="https://www.instagram.com/arya_dwi_ananda/">
              <img src={instagram} alt="" className="w-10 h-10" />
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
}
