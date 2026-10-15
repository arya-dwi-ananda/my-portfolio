import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Copyright from "./Copyright";

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <footer>
        <Copyright />
      </footer>
    </div>
  );
}

export default App;
