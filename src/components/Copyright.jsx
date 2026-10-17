import React from "react";
import { useTheme } from "./ThemeContext";

export default function Copyright() {
  const { darkMode } = useTheme();

  return (
    <footer className={`w-full ${darkMode ? "bg-[#1A1C23]" : "bg-linear-to-b from-gray-100 to-white"} pt-3 pb-3 md:pt-4 md:pb-4 text-center`}>
      <p className="text-sm md:text-md  text-gray-500">Copyright &copy; {new Date().getFullYear()} Muhammad Arya Dwi Ananda All Right Reserved, Inc.</p>
    </footer>
  );
}
