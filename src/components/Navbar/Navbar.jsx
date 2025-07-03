import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineDocumentDownload } from "react-icons/hi";

function Navbar() {
  return (
    <div className="max-w-7xl mt-9 mx-auto flex justify-around items-center bg-black">
      <h1 className="text-2xl font-semibold text-white">Siva Kumar</h1>

      <nav className="flex gap-9 border-2 border-gray-600 rounded-3xl px-9 py-4">
        <NavLink
          to="/"
          className="text-white hover:text-[#FC530A] transition duration-200"
        >
          Home
        </NavLink>
        <NavLink
          to="/About"
          className="text-white hover:text-[#FC530A] transition duration-200"
        >
          About
        </NavLink>
        <NavLink
          to="/skills"
          className="text-white hover:text-[#FC530A] transition duration-200"
        >
          Skills
        </NavLink>
        <NavLink
          to="/projects"
          className="text-white hover:text-[#FC530A]  transition duration-200"
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className="text-white hover:text-[#FC530A] transition duration-200"
        >
          Contact
        </NavLink>
      </nav>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 rounded-3xl px-5 py-3 border-[#C68313]  hover:bg-[#FC530A]  transition duration-300"
      >
        <div className="items-center flex gap-x-2 text-white ">
          <HiOutlineDocumentDownload />Resume
        </div>
      </a>
    </div>
  );
}

export default Navbar;
