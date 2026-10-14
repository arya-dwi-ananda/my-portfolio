import React from "react";
import Container from "./Container";
import html from "../assets/logo-html.jpg";
import css from "../assets/logo-css.jpg";
import js from "../assets/logo-js.jpg";
import react from "../assets/logo-react.jpg";

function Skills() {
  return (
    <div className="w-full bg-linear-to-b from-gray-100 to-white">
      <div id="skills" className="md:max-w-6xl w-9/10 mx-auto flex flex-col pt-10 pb-20 gap-12">
        <h2 className="text-center text-lg font-medium">Skills</h2>
        <section className="flex flex-wrap gap-2">
          <Container>
            <img className="w-37 h-37" src={html} alt="" />
            <p className="text-sm text-center mt-2 font-medium">HTML 5</p>
          </Container>
          <Container>
            <img className="w-37 h-37" src={css} alt="" />
            <p className="text-sm text-center mt-2 font-medium">CSS 3</p>
          </Container>
          <Container>
            <img className="w-37 h-37" src={js} alt="" />
            <p className="text-sm text-center mt-2 font-medium">JavaScript</p>
          </Container>
          <Container>
            <img className="w-37 h-37" src={react} alt="" />
            <p className="text-sm text-center mt-2 font-medium">React</p>
          </Container>
        </section>
      </div>
    </div>
  );
}

export default Skills;
