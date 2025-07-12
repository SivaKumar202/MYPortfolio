import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineDocumentDownload, HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="max-w-7xl mt-9 mx-auto flex justify-between items-center px-4 md:px-8 bg-black rounded-lg">
      <h1 className="text-2xl font-semibold text-white">Siva Kumar</h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-9 border-2 border-gray-600 rounded-3xl px-9 py-4">
        {["/", "/About", "/skills", "/projects", "/contact"].map((path, idx) => (
          <NavLink
            key={idx}
            to={path}
            className="text-white hover:text-[#FC530A] transition duration-200"
          >
            {["Home", "About", "Skills", "Projects", "Contact"][idx]}
          </NavLink>
        ))}
      </nav>

      {/* Resume Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex border-2 rounded-3xl px-5 py-3 border-[#C68313] hover:bg-[#FC530A] transition duration-300"
      >
        <div className="flex items-center gap-x-2 text-white">
          <HiOutlineDocumentDownload /> Resume
        </div>
      </a>

      {/* Hamburger Menu Icon */}
      <button onClick={toggleMenu} className="md:hidden text-white text-3xl hover:cursor-pointer">
        {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black flex flex-col items-center space-y-6 py-6 border-t border-gray-700 md:hidden z-50">
          {["/", "/About", "/skills", "/projects", "/contact"].map((path, idx) => (
            <NavLink
              key={idx}
              to={path}
              className="text-white hover:text-[#FC530A] text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {["Home", "About", "Skills", "Projects", "Contact"][idx]}
            </NavLink>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 rounded-3xl px-5 py-3 border-[#C68313] hover:bg-[#FC530A] transition duration-300"
          >
            <div className="flex items-center gap-x-2 text-white">
              <HiOutlineDocumentDownload /> Resume
            </div>
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
