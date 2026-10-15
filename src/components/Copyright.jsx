import React from "react";

export default function Copyright() {
  return (
    <footer className="w-full bg-linear-to-b from-gray-100 to-white pt-3 pb-3 md:pt-4 md:pb-4 text-center">
      <p className="text-sm md:text-md  text-gray-500">Copyright &copy; {new Date().getFullYear()} Muhammad Arya Dwi Ananda All Right Reserved, Inc.</p>
    </footer>
  );
}
