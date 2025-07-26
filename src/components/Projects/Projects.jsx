import React from "react";
import fashiofy from "../../assets/Projects/fashiofy.png";
import Github from "../../assets/Social/GitHub.png";
import projectIcon from "../../assets/project.svg";
import { motion } from "framer-motion";
import ParticlesBackground from "../ParticlesBackground";

// Animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

function Projects() {
  return (
    <section className="relative min-h-screen py-16 px-4 sm:px-8 lg:px-24  text-white">
      <ParticlesBackground />

      {/* Header */}
<div className="mb-14 px-4 sm:px-10 lg:px-20">
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="flex flex-col lg:flex-row items-center gap-10 text-center lg:text-left"
  >
    {/* Image */}
    <img
      src={projectIcon}
      alt="Projects Icon"
      className="w-full sm:w-2/3 lg:w-1/2 max-w-md"
    />
    {/* Text Content */}
    <motion.div className="mt-10 lg:mt-0 max-w-xl">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#FC530A] tracking-wide mb-5 text-center">
        Projects
      </h2>
      <p className="text-gray-300 text-md sm:text-lg">
        Explore some of the work I’ve done — from real-world web apps to team collaborations, built with modern technologies and clean design.
      </p>
    </motion.div>

  </motion.div>
</div>


      {/* Project Card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-[#1E1E1E] rounded-3xl shadow-lg overflow-hidden"
      >
        {/* Image */}
        <motion.img
          variants={fadeUp}
          custom={0}
          src={fashiofy}
          alt="Fashiofy Screenshot"
          className="w-full h-64 object-cover rounded-t-3xl"
        />

        {/* Content */}
        <div className="p-6 sm:p-10 space-y-5">
          <motion.h3
            variants={fadeUp}
            custom={1}
            className="text-2xl font-bold tracking-wide"
          >
             Fashiofy — Fashion E-commerce (Team Project)
          </motion.h3>

          <motion.p
            variants={fadeUp}
            custom={1.2}
            className="text-sm text-gray-400"
          >
            <b>Role:</b> Frontend Developer · <b>Status:</b> Ongoing
          </motion.p>

          <motion.div variants={fadeUp} custom={1.4}>
            <p className="leading-relaxed text-gray-300">
              Fashiofy is a stylish e-commerce platform focused on modern fashion and lifestyle products. It provides users with an elegant and fast shopping experience through a sleek, responsive interface.
            </p>
            <p className="mt-2 text-gray-300">
              As part of the frontend team, I was responsible for building core UI components and integrating API-driven product flows.
            </p>
          </motion.div>

          {/* Contributions */}
          <motion.div variants={fadeUp} custom={1.6}>
            <h4 className="font-semibold text-white mb-2"> My Contributions:</h4>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Developed reusable React components with responsive styling.</li>
              <li>Built product pages, cart flows, and filtering interfaces.</li>
              <li>Connected APIs using Axios for real-time data rendering.</li>
              <li>Collaborated with backend team to ensure seamless integration.</li>
              <li>Tested components across multiple screen sizes for UX quality.</li>
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={fadeUp} custom={1.8}>
            <h4 className="font-semibold text-white mb-2">🛠 Tech Stack:</h4>
            <div className="flex flex-wrap gap-2 text-sm font-semibold">
              {[
                "React.js",
                "Three.js",
                "Tailwind CSS",
                "Material UI",
                "JavaScript",
                "GitHub",
                "REST APIs",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-white/10 px-3 py-1 rounded-full text-white border border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="flex flex-col sm:flex-row gap-4 mt-6"
          >
            <a
              href="https://fashiofy.onrender.com/"
              target="_blank"
              rel="#"
              className="flex-1 text-center bg-[#FC530A] hover:bg-[#e24d00] text-black font-bold px-6 py-3 rounded-xl transition duration-300"
            >
              🔗 Live Demo
            </a>
            <a
              href="https://github.com/iCube-code/Fashiofy"
              target="_blank"
              rel="#"
              className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition duration-300"
            >
              <img src={Github} alt="GitHub" className="w-5 h-5" />
              <span>Source Code</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* End Note */}
      <motion.div
        variants={fadeUp}
        custom={2.2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 text-center text-white text-2xl"
      >
        <p>More projects coming soon. Stay tuned! 👀</p>
      </motion.div>
    </section>
  );
}

export default Projects;
