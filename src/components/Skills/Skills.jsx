import React from "react";
import { motion } from "framer-motion";
import "./index.css";
import ParticlesBackground from "../ParticlesBackground"
import Github from "../../assets/SocialIcons/GitHub.png";
import Gmail from "../../assets/SocialIcons/Gmail.png";
import Insta from "../../assets/SocialIcons/instagram.png";
import linkedin from "../../assets/SocialIcons/Linkedin.png";
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
import TypeScript from "../../assets/SkillsAssets/TypeScript.png";
import netlify from "../../assets/SkillsAssets/netlify.png";
import Vercel from "../../assets/SkillsAssets/Vercel.png";

function Skills() {
  return (
    <div className=" text-white px-4 py-16">
      <ParticlesBackground />
      <motion.h1
        className="text-center text-4xl md:text-6xl lg:text-7xl font-bold mb-12 text-white drop-shadow-[2px_2px_2px_#4ADEDE]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Skills That Fuel My Passion
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 px-2 md:px-10 lg:px-32">
        {/* First Column */}
        <div className="flex flex-col flex-1 gap-y-8">
          {/* Front-End */}
          <div className="relative group animated-border rounded-4xl p-[2px]">
            <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6 transition-all duration-300 group-hover:scale-[1.02] ">
              <div className="flex justify-center gap-4 flex-wrap">
                <img src={HTML} alt="HTML" className="w-16 md:w-20" />
                <img src={js} alt="JavaScript" className="w-16 md:w-20" />
                <img src={Reactjs} alt="React" className="w-16 md:w-20" />
                <img src={Redux} alt="Redux" className="w-16 md:w-20" />
              </div>
              <h2 className="text-xl font-semibold mt-4">
                Front-End Development
              </h2>
              <p className="text-gray-300 text-sm mt-2">
                Building engaging and user-friendly web interfaces using modern
                frameworks and technologies with expertise.
              </p>
            </div>
          </div>

          {/* Back-End */}
          <div className="relative group animated-border rounded-3xl p-[2px]">
            <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6 transition-all duration-300 group-hover:scale-[1.02]">
              <div className="flex justify-center gap-4 flex-wrap">
                <img src={Node} alt="Node.js" className="w-16 md:w-20" />
                <img src={Express} alt="Express.js" className="w-16 md:w-20" />
              </div>
              <h2 className="text-xl font-semibold mt-4">
                Back-End Development
              </h2>
              <p className="text-gray-300 text-sm mt-2">
                Developing robust server-side logic and APIs to power dynamic
                and scalable web applications.
              </p>
            </div>
          </div>

          {/* Personal Development */}
          <div className="relative group animated-border rounded-3xl p-[2px]">
            <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6 transition-all duration-300 group-hover:scale-[1.02]">
              <div className="flex flex-wrap justify-center gap-3 text-white text-sm">
                <span className="px-3 py-1 rounded-full bg-[#333]">
                  Time Management
                </span>
                <span className="px-3 py-1 rounded-full bg-[#333]">
                  Problem Solving
                </span>
                <span className="px-3 py-1 rounded-full bg-[#333]">
                  Communication
                </span>
                <span className="px-3 py-1 rounded-full bg-[#333]">
                  Leadership
                </span>
              </div>
              <h2 className="text-xl font-semibold mt-4">
                Personal Development
              </h2>
              <p className="text-gray-300 text-sm mt-2">
                Committed to continuous learning and personal growth to excel in
                both professional and collaborative environments.
              </p>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col flex-1 gap-y-8">
          {/* Styling & Design */}
          <div className="relative group animated-border rounded-3xl p-[2px]">
            <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6 transition-all duration-300 group-hover:scale-[1.02]">
              <div className="flex justify-center gap-4 flex-wrap ">
                <img src={CSS} alt="CSS" className="w-16 md:w-20" />
                <img src={BootStrap} alt="Bootstrap" className="w-16 md:w-20" />
                <img src={Tailwind} alt="Tailwind" className="w-16 md:w-20" />
                <img src={MUI} alt="MUI" className="w-16 md:w-20" />
              </div>
              <h2 className="text-xl font-semibold mt-4">Styling & Design</h2>
              <p className="text-gray-300 text-sm mt-2">
                Crafting visually appealing and responsive designs with advanced
                styling tools and frameworks.
              </p>
            </div>
          </div>

          {/* Deployment */}
          <div className="relative group animated-border rounded-3xl p-[2px]">
            <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6 transition-all duration-300 group-hover:scale-[1.02]">
              <div className="flex justify-center gap-4 flex-wrap ">
                <img src={Vercel} alt="Vercel" className="w-12 md:w-14" />
                <img src={netlify} alt="Netlify" className="w-12 md:w-14" />
              </div>
              <h2 className="text-xl font-semibold mt-4">Deployment</h2>
              <p className="text-gray-300 text-sm mt-2">
                Experienced in deploying and managing applications using modern
                cloud platforms and tools.
              </p>
            </div>
          </div>

          {/* Testing & Debugging */}
          <div className="relative group animated-border rounded-3xl p-[2px]">
            <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6 transition-all duration-300 group-hover:scale-[1.02]">
              <div className="flex justify-center">
                <img src={post} alt="Postman" className="w-12 md:w-14" />
              </div>
              <h2 className="text-xl font-semibold mt-4">
                Testing & Debugging
              </h2>
              <p className="text-gray-300 text-sm mt-2">
                Ensuring code quality and reliability through rigorous testing
                and debugging processes.
              </p>
            </div>
          </div>
        </div>

        {/* Third Column */}
        <div className="flex flex-col flex-1 gap-y-8">
          {/* Programming Languages */}
          <div className="relative group animated-border rounded-3xl p-[2px]">
            <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6 transition-all duration-300 group-hover:scale-[1.02]">
              <div className="flex justify-center gap-4 flex-wrap">
                <img src={Python} alt="Python" className="w-16 md:w-20" />
                <img src={CPP} alt="C++" className="w-16 md:w-20" />
              </div>
              <h2 className="text-xl font-semibold mt-4">
                Programming Languages
              </h2>
              <p className="text-gray-300 text-sm mt-2">
                Proficient in problem-solving and applying programming languages
                to implement efficient data structures and algorithms.
              </p>
            </div>
          </div>

          {/* Database Management */}
          <div className="relative group animated-border rounded-3xl p-[2px]">
            <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6 transition-all duration-300 group-hover:scale-[1.02]">
              <div className="flex justify-center gap-4 flex-wrap">
                <img src={MongoDB} alt="MongoDB" className="w-16 md:w-20" />
                <img src={FireBase} alt="Firebase" className="w-16 md:w-20" />
              </div>
              <h2 className="text-xl font-semibold mt-4">
                Database Management
              </h2>
              <p className="text-gray-300 text-sm mt-2">
                Designing and managing databases to ensure secure and efficient
                data storage and retrieval.
              </p>
            </div>
          </div>

          {/* Version Control */}
          <div className="relative group animated-border rounded-3xl p-[2px]">
            <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6 transition-all duration-300 group-hover:scale-[1.02]">
              <div className="flex justify-center gap-4 flex-wrap">
                <img src={github} alt="GitHub" className="w-16 md:w-20" />
                <img src={git} alt="Git" className="w-16 md:w-20" />
              </div>
              <h2 className="text-xl font-semibold mt-4">
                Version Control & Collaboration
              </h2>
              <p className="text-gray-300 text-sm mt-2">
                Effectively managing code and collaborating on projects to
                ensure seamless teamwork.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-20 text-center space-y-4">
        <p className="text-lg">That's all for Now.</p>
        <h2 className="text-3xl md:text-5xl font-semibold">
          Got a project in mind?
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4">
          <h2 className="text-3xl md:text-5xl font-semibold">Let’s talk</h2>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/SivaKumar202"
              target="_blank"
              rel="noreferrer"
            >
              <img width={45} height={45} src={Github} alt="GitHUb" className="hover:scale-120" />
            </a>
            <a
              href="https://www.linkedin.com/in/siva-kumar-jujjavarapu/"
              target="_blank"
              rel="noreferrer"
            >
              <img width={45} height={45} src={linkedin} alt="Linkedin"  className="hover:scale-120"/>
            </a>
            <a
              href="mailto:sivakumarjujjavarapu123@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img width={45} height={45} src={Gmail} alt="Mail" className="hover:scale-120" />
            </a>
            <a
              href="https://www.instagram.com/siva_kumar_jujjavarapu/"
              target="_blank"
              rel="noreferrer"
            >
              <img width={45} height={45} src={Insta} alt="instagarm" className="hover:scale-120" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
