import React from "react";
import Container from "./Container";

export default function Contacts() {
  return (
    <div className="w-full bg-linear-to-b from-gray-100 to-white">
      <section id="contacts" className="md:max-w-6xl w-9/10 mx-auto flex flex-col pt-10 pb-20 gap-12">
        <h2 className="text-center text-lg font-medium">Contacts</h2>
        <Container>
          <p className="font-bold text-2xl pb-7">Lets Connect there</p>
          <hr className="border border-gray-200" />
          <section className="flex md:flex-row flex-col gap-5 py-5 items-center">
            <div>
              <h2 className={`text-2xl md:text-3xl my-0 text-[#087EA4] pb-3`}>Arya</h2>
              <p className="text-gray-500">"Have a project in mind or opportunity to share? Feel free to reach out. I'm always open to connecting, learning, and collaborating on exciting web development projects."</p>
            </div>
            <div className="flex justify-between md:gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-[#087EA4]">Navigation</p>
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
                <p className="text-[#087EA4]">Contact</p>
                <ul id="nav-menu" className="md:flex flex-col text-gray-500">
                  <li>+62 858-5604-0899</li>
                  <li>aryadwiananda69@gmail.com</li>
                  <li>
                    <a href="https://github.com/arya-dwi-ananda">GitHub</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/muhammad-arya-dwi-ananda-454737405/">LinkedIn</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/arya_dwi_ananda/">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className="flex items-center justify-center gap-2">
            <a href="mailto:aryadwiananda69@gmail.com">
              <i className="fa-solid fa-envelope text-2xl"></i>
            </a>
            <a href="https://github.com/arya-dwi-ananda">
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-arya-dwi-ananda-454737405/">
              <i class="fa-brands fa-linkedin text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/arya_dwi_ananda/">
              <i className="fa-brands fa-square-instagram text-2xl"></i>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
