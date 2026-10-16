import React from "react";
import Container from "./Container";
import arya from "../assets/arya.jpeg";

function About() {
  return (
    <div className="w-full bg-linear-to-b from-gray-100 to-white">
      <section id="about" className="md:max-w-6xl w-9/10 mx-auto flex flex-col pt-10 pb-20 gap-12 scroll-mt-20">
        <h2 className="text-center text-lg font-medium">About Me</h2>
        <Container>
          <section className="flex items-center gap-4">
            <p className="text-gray-600">
              Hi, I'm Muhammad Arya Dwi Ananda, an aspiring Front-End Developer passionate about building responsive, interactive, and user-friendly web experiences.
              <br />
              <br />
              I'm currently developing my skills in HTML, CSS, JavaScript, React, and Tailwind CSS. I enjoy turning design concepts into functional web interface, exploring new technologies, and continuously improving my coding through
              hands-on practice and personal projects.
              <br />
              <br />
              I'm eager to keep learning, take on new challenges, and create web experiences that combine clean design with great usability.
            </p>
            <img className="w-50 h-50 rounded-full shadow-[0_0_20px_rgba(8,126,164,0.6)] object-cover" src={arya} alt="arya-picture" />
          </section>
        </Container>
      </section>
    </div>
  );
}

export default About;
