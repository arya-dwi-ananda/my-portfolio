import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
