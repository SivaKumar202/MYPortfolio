import React, { useState } from "react";
import resume from "../../assets/SivaKumar_Developer.pdf";
import { NavLink } from "react-router-dom";
import { HiOutlineDocumentDownload, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/About" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="relative z-[100]"> {/* 🛠️ Important for positioning */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mt-9 mx-auto flex justify-between items-center px-4 md:px-8 bg-black/60 backdrop-blur-md rounded-2xl shadow-lg relative"
      >
        {/* Brand */}
        <motion.h1
          className="text-2xl font-semibold text-white"
          whileHover={{ scale: 1.05 }}
        >
          Siva Kumar
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 border border-gray-700 rounded-full px-8 py-3 bg-black/30">
          {navItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-white hover:text-[#FC530A] transition duration-200 ${
                    isActive ? "text-[#FC530A]" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Resume Button (Desktop) */}
        <motion.a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex border-2 rounded-full px-5 py-2 border-[#C68313] hover:bg-[#FC530A] hover:text-black transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-x-2 text-white">
            <HiOutlineDocumentDownload /> Resume
          </div>
        </motion.a>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl z-[101]"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </motion.div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-4 right-4 bg-black/90 rounded-2xl shadow-xl py-6 px-4 space-y-5 md:hidden z-[999]"
          >
            {navItems.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <NavLink
                  to={item.path}
                  className="text-white text-lg hover:text-[#FC530A]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}

            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center border-2 rounded-full px-5 py-2 border-[#C68313] hover:bg-[#FC530A] hover:text-black transition duration-300 text-white"
              whileHover={{ scale: 1.05 }}
            >
              <HiOutlineDocumentDownload className="mr-2" />
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
