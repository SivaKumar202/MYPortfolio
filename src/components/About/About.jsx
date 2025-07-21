import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

// Assets
import AboutMe from "../../assets/AboutMe/AboutMe.png";
import HTML from "../../assets/SkillsAssets/HTML.png";
import CSS from "../../assets/SkillsAssets/CSS.png";
import BootStrap from "../../assets/SkillsAssets/BootStrap.png";
import CPP from "../../assets/SkillsAssets/C++.png";
import Express from "../../assets/SkillsAssets/Express.png";
import FireBase from "../../assets/SkillsAssets/Firebase.png";
import git from "../../assets/SkillsAssets/GIT.png";
import github from "../../assets/SkillsAssets/GitHub.png";
import js from "../../assets/SkillsAssets/js.png";
import MongoDB from "../../assets/SkillsAssets/MongoDB.png";
import MUI from "../../assets/SkillsAssets/MUI.png";
import Node from "../../assets/SkillsAssets/Node.png";
import post from "../../assets/SkillsAssets/post.png";
import Python from "../../assets/SkillsAssets/Python.png";
import Reactjs from "../../assets/SkillsAssets/Reactjs.png";
import Redux from "../../assets/SkillsAssets/Redux.png";
import Tailwind from "../../assets/SkillsAssets/Tailwind.png";

const skills = [
  HTML,
  CSS,
  BootStrap,
  js,
  Reactjs,
  Redux,
  Tailwind,
  MUI,
  Node,
  Express,
  git,
  github,
  MongoDB,
  Python,
  CPP,
  FireBase,
  post,
];

function About() {
  return (
    <div className="px-4 py-10 text-white relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl text-center mt-10 mb-10 font-bold"
      >
        About Me
      </motion.h1>

      <div className="flex flex-col md:flex-row items-stretch gap-8 max-w-7xl mx-auto h-auto">
        {/* Parallax Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#1E1E1E] p-6 rounded-2xl shadow-lg w-full md:w-1/2 h-full"
        >
          <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05}>
            <div
              className="min-h-[500px] flex flex-col justify-between
"
            >
              <img
                src={AboutMe}
                alt="Siva Kumar"
                className="rounded-2xl shadow-2xl border border-gray-700 object-cover h-full"
              />
            </div>
          </Tilt>
        </motion.div>

        {/* Animated Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#1E1E1E] p-11 rounded-2xl shadow-lg w-full md:w-1/2"
        >
          <h1 className="text-2xl font-bold mb-4">
            Curious About Me? Here You Go:
          </h1>

          <p className="mb-4 leading-relaxed">
            Hey there! I’m <b>Siva Kumar</b>, a passionate and driven Full Stack
            Developer dedicated to crafting clean, scalable, and intuitive web
            applications. I'm currently focused on the{" "}
            <b className="text-green-400">M</b>
            <b className="text-orange-400">E</b>
            <b className="text-blue-400">R</b>
            <b className="text-green-400">N</b> stack, working on real-world
            projects.
          </p>

          <p className="mb-4 leading-relaxed">
            I’m eager to connect with{" "}
            <b className="bg-gradient-to-r from-[#7873f5] to-[#4ADEDE] bg-clip-text text-transparent">
              professionals
            </b>{" "}
            and contributing to{" "}
            <b className="bg-gradient-to-r from-[#FC530A] to-[#C084FC] bg-clip-text text-transparent">
              open-source projects{" "}
            </b>
            and contribute meaningfully to the tech industry
            <br />
          </p>
          <b className="leading-relaxed">
            I'm all ears! Let’s connect and build something awesome together.
          </b>

          <p className="mb-2  mt-3 font-bold">Skills & Technologies</p>

          <motion.div
            className="flex flex-wrap gap-3 mt-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {skills.map((icon, index) => (
              <motion.img
                key={index}
                src={icon}
                alt="Skill"
                width={60}
                height={60}
                className="hover:scale-110 transition-transform"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
