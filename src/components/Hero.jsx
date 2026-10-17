import React from "react";
import { useTheme } from "./ThemeContext";

function Hero() {
  const { darkMode } = useTheme();
  return (
    <div className={`w-full ${darkMode && "bg-[#23272F]"}`}>
      <section id="home" className="px-5 max-w-7xl mx-auto min-h-screen flex flex-col justify-center gap-3">
        <p className={`font-bold ${darkMode ? "text-gray-300" : "text-black"}`}>Hi, my name is</p>
        <h1 className={`text-5xl ${darkMode ? "text-[#F6F7F9]" : "text-gray-600"}`}>Muhammad Arya Dwi Ananda</h1>
        <p className={`text-3xl font-bold  ${darkMode ? "text-[#61DAFB]" : "text-[#087ea4]"}`}>Front-End Developer</p>
      </section>
    </div>
  );
}

export default Hero;
