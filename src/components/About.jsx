import React from "react";
import Container from "./Container";
import arya from "../assets/arya.jpeg";

function About() {
  return (
    <div className="w-full bg-linear-to-b from-gray-100 to-white">
      <div id="about" className="md:max-w-6xl w-9/10 mx-auto flex flex-col pt-10 pb-20 gap-12">
        <h2 className="text-center text-lg font-medium">About Me</h2>
        <Container>
          <section className="flex items-center gap-4 bg-white">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem accusamus illum consequatur reiciendis minima!</p>
            <img className="w-50 h-50 rounded-full shadow-[0_0_20px_rgba(14,165,233,0.6)] object-cover" src={arya} alt="" />
          </section>
        </Container>
      </div>
    </div>
  );
}

export default About;
