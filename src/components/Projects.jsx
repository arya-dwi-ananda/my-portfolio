import React from "react";
import Container from "./Container";
import project_3 from "../assets/project-3.png";

function Projects() {
  return (
    <div className="w-full bg-linear-to-b from-gray-100 to-white">
      <div id="projects" className="md:max-w-6xl w-9/10 mx-auto flex flex-col pt-10 pb-20 gap-12">
        <h2 className="text-center text-lg font-medium">Projects</h2>
        <section className="flex flex-wrap gap-2 mx-auto">
          <Container>
            <img className="w-100" src={project_3} alt="" />
          </Container>
        </section>
      </div>
    </div>
  );
}

export default Projects;
