import React, { useState } from "react";
import { ThemeProvider } from "./ThemeContext";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Copyright from "./Copyright";

function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
