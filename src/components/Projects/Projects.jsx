import React from "react";
import fashiofy from "../../assets/Projects/fashiofy.png";
import Github from "../../assets/SocialIcons/GitHub.png";
import { motion } from "framer-motion";
import ParticlesBackground from "../ParticlesBackground"
// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

function Projects() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-10 min-h-screen">
      <ParticlesBackground />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-[#1E1E1E] text-white rounded-2xl shadow-lg p-6 sm:p-10 space-y-6"
      >
        {/* Project Image */}
        <motion.img
          variants={fadeUp}
          custom={0}
          src={fashiofy}
          alt="Fashiofy Project"
          className="w-full rounded-lg object-cover"
        />

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-2xl sm:text-3xl font-bold"
        >
          🧵 Fashiofy (Team Project)
        </motion.h2>

        {/* Role & Status */}
        <motion.p
          variants={fadeUp}
          custom={1.2}
          className="text-sm sm:text-base text-gray-400"
        >
          <b>Role</b>: Frontend Developer | <b>Status</b>: Ongoing Collaboration
        </motion.p>

        {/* Overview */}
        <motion.div variants={fadeUp} custom={1.4}>
          <p className="text-base leading-relaxed">
            <b>Overview:</b> Fashiofy is a modern e-commerce web application
            focused on fashion and lifestyle products. It delivers a seamless
            shopping experience with features like product discovery, filtering,
            and an intuitive user interface.
          </p>
          <p className="text-base leading-relaxed mt-2">
            This project is being developed collaboratively, and I contribute as
            part of the frontend team.
          </p>
        </motion.div>

        {/* Contributions */}
        <motion.div variants={fadeUp} custom={1.6}>
          <p className="font-semibold mb-2">My Contributions:</p>
          <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
            <li>Designed and developed responsive UI components using React.js and CSS.</li>
            <li>Implemented product listing, detail pages, and shopping cart interfaces.</li>
            <li>Integrated frontend with backend APIs using Axios for dynamic data rendering.</li>
            <li>Ensured smooth user experience and cross-device compatibility.</li>
            <li>Collaborated with backend developers for seamless data flow and testing.</li>
          </ul>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={fadeUp} custom={1.8}>
          <p className="font-semibold">Tech Stack:</p>
          <div className="flex flex-wrap gap-2 text-sm font-semibold mt-1">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">React.js</span>
            <span className="bg-black text-green-400 px-2 py-1 rounded">Three.js</span>
            <span className="bg-sky-100 text-sky-600 px-2 py-1 rounded">Tailwind CSS</span>
            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">MUI</span>
            <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded">JavaScript</span>
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">GitHub</span>
            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">REST APIs</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={fadeUp}
          custom={2}
          className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 mt-6"
        >
          <motion.a
            href="https://fashiofy.onrender.com/"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 text-center w-full sm:w-auto"
          >
            🔗 Visit Live Demo
          </motion.a>

          <motion.a
            href="https://github.com/iCube-code/Fashiofy"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 w-full sm:w-auto"
          >
            <div className="flex items-center justify-center gap-2">
              <img src={Github} alt="GitHub" className="w-6 h-6" />
              <span>Source Code</span>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* End Note */}
      <motion.div
        variants={fadeUp}
        custom={2.2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-20 text-center space-y-4"
      >
        <p className="text-lg text-white">That's all for Now.</p>
      </motion.div>
    </div>
  );
}

export default Projects;
