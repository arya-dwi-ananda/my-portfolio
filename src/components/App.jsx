import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";

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
      </main>
    </div>
  );
}

export default App;
