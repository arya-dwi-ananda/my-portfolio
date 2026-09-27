import React from "react";
import Container from "./Container";
import arya from "../assets/arya.jpeg";

function About() {
  return (
    <div id="about" className="max-w-6xl mx-auto flex flex-col">
      <h2 className="text-center mb-12">About Me</h2>
      <Container>
        <section className="flex items-center gap-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem accusamus illum consequatur reiciendis minima!</p>
          <img className="w-50 h-50 rounded-full shadow-[0_0_20px_rgba(14,165,233,0.6)] object-cover" src={arya} alt="" />
        </section>
      </Container>
    </div>
  );
}

export default About;
