import React from "react";
import Container from "./Container";
import project_3 from "../assets/project-3.png";
import project_4 from "../assets/project-4.png";

function Projects() {
  return (
    <div className="w-full bg-linear-to-b from-gray-100 to-white">
      <section id="projects" className="md:max-w-6xl w-9/10 mx-auto flex flex-col pt-10 pb-20 gap-12 scroll-mt-20">
        <h2 className="text-center text-lg font-medium">Projects</h2>
        <section className="flex flex-wrap gap-2 mx-auto">
          <Container>
            <img className="w-100" src={project_3} alt="" />
            <p className="text-sm mt-2 mb-1 font-medium">Expense Tracker</p>
            <a className="text-lg font-semibold text-[#087ea4] hover:text-white rounded-full px-1.5 py-0.5 hover:bg-[#087ea4] text-shadow-[0_0_20px_rgba(8,126,164,1)]" href="">
              Visit
            </a>
          </Container>
          <Container>
            <img className="w-100" src={project_4} alt="" />
            <p className="text-sm mt-2 mb-1 font-medium">Expense Tracker</p>
            <a className="text-lg font-semibold text-[#087ea4] hover:text-white rounded-full px-1.5 py-0.5 hover:bg-[#087ea4] text-shadow-[0_0_20px_rgba(8,126,164,1)]" href="">
              Visit
            </a>
          </Container>
        </section>
      </section>
    </div>
  );
}

export default Projects;
