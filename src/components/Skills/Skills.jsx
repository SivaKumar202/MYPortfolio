import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
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
    <div className="bg-black text-white px-4 py-16">
      <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold mb-12">
        Skills That Fuel My Passion
      </h1>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 px-2 md:px-10 lg:px-32">
        {/* First Column */}
        <div className="flex flex-col flex-1 gap-y-8">
          {/* Front-End */}
          <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6">
            <div className="flex justify-between gap-4 flex-wrap">
              <img src={HTML} alt="HTML" className="w-16 md:w-20" />
              <img src={js} alt="JavaScript" className="w-16 md:w-20" />
              <img src={Reactjs} alt="React" className="w-16 md:w-20" />
              <img src={Redux} alt="Redux" className="w-16 md:w-20" />
            </div>
            <h2 className="text-xl font-semibold mt-4">Front-End Development</h2>
            <p className="text-gray-300 text-sm mt-2">
              Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise.
            </p>
          </div>

          {/* Back-End */}
          <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6">
            <div className="flex justify-center gap-4">
              <img src={Node} alt="Node.js" className="w-16 md:w-20" />
              <img src={Express} alt="Express.js" className="w-16 md:w-20" />
            </div>
            <h2 className="text-xl font-semibold mt-4">Back-End Development</h2>
            <p className="text-gray-300 text-sm mt-2">
              Developing robust server-side logic and APIs to power dynamic and scalable web applications.
            </p>
          </div>

          {/* Personal Development */}
          <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6">
            <div className="flex flex-wrap justify-center gap-2 text-white text-sm">
              <span className="px-3 py-1 rounded-full bg-[#333]">Time Management</span>
              <span className="px-3 py-1 rounded-full bg-[#333]">Problem Solving</span>
              <span className="px-3 py-1 rounded-full bg-[#333]">Communication</span>
              <span className="px-3 py-1 rounded-full bg-[#333]">Leadership</span>
            </div>
            <h2 className="text-xl font-semibold mt-4">Personal Development</h2>
            <p className="text-gray-300 text-sm mt-2">
              Committed to continuous learning and personal growth to excel in both professional and collaborative environments.
            </p>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col flex-1 gap-y-8">
          {/* Styling & Design */}
          <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6">
            <div className="flex justify-center gap-4 flex-wrap">
              <img src={CSS} alt="CSS" className="w-16 md:w-20" />
              <img src={BootStrap} alt="Bootstrap" className="w-16 md:w-20" />
              <img src={Tailwind} alt="Tailwind" className="w-16 md:w-20" />
              <img src={MUI} alt="MUI" className="w-16 md:w-20" />
            </div>
            <h2 className="text-xl font-semibold mt-4">Styling & Design</h2>
            <p className="text-gray-300 text-sm mt-2">
              Crafting visually appealing and responsive designs with advanced styling tools and frameworks.
            </p>
          </div>

          {/* Deployment */}
          <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6">
            <div className="flex justify-center gap-4 flex-wrap">
              <img src={Vercel} alt="Vercel" className="w-12 md:w-14" />
              <img src={netlify} alt="Netlify" className="w-12 md:w-14" />
            </div>
            <h2 className="text-xl font-semibold mt-4">Deployment</h2>
            <p className="text-gray-300 text-sm mt-2">
              Experienced in deploying and managing applications using modern cloud platforms and tools.
            </p>
          </div>

          {/* Testing & Debugging */}
          <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6">
            <div className="flex justify-center">
              <img src={post} alt="Postman" className="w-12 md:w-14" />
            </div>
            <h2 className="text-xl font-semibold mt-4">Testing & Debugging</h2>
            <p className="text-gray-300 text-sm mt-2">
              Ensuring code quality and reliability through rigorous testing and debugging processes.
            </p>
          </div>
        </div>

        {/* Third Column */}
        <div className="flex flex-col flex-1 gap-y-8">
          {/* Programming Languages */}
          <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6">
            <div className="flex justify-center gap-4">
              <img src={Python} alt="Python" className="w-16 md:w-20" />
              <img src={CPP} alt="C++" className="w-16 md:w-20" />
            </div>
            <h2 className="text-xl font-semibold mt-4">Programming Languages</h2>
            <p className="text-gray-300 text-sm mt-2">
              Proficient in problem-solving and applying programming languages to implement efficient data structures and algorithms.
            </p>
          </div>

          {/* Database Management */}
          <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6">
            <div className="flex justify-center gap-4">
              <img src={MongoDB} alt="MongoDB" className="w-16 md:w-20" />
              <img src={FireBase} alt="Firebase" className="w-16 md:w-20" />
            </div>
            <h2 className="text-xl font-semibold mt-4">Database Management</h2>
            <p className="text-gray-300 text-sm mt-2">
              Designing and managing databases to ensure secure and efficient data storage and retrieval.
            </p>
          </div>

          {/* Version Control */}
          <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6">
            <div className="flex justify-center gap-4">
              <img src={github} alt="GitHub" className="w-16 md:w-20" />
              <img src={git} alt="Git" className="w-16 md:w-20" />
            </div>
            <h2 className="text-xl font-semibold mt-4">Version Control & Collaboration</h2>
            <p className="text-gray-300 text-sm mt-2">
              Effectively managing code and collaborating on projects to ensure seamless teamwork.
            </p>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-20 text-center space-y-4">
        <p className="text-lg">That's all for Now.</p>
        <h2 className="text-3xl md:text-5xl font-semibold">Got a project in mind?</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4">
          <h2 className="text-3xl md:text-5xl font-semibold">Let’s talk</h2>
          <div className="flex items-center gap-4">
            <a href="https://github.com/SivaKumar202" target="_blank" rel="noreferrer">
              <FaGithub className="cursor-pointer text-3xl hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/siva-kumar-jujjavarapu/" target="_blank" rel="noreferrer">
              <BsLinkedin className="cursor-pointer text-3xl hover:scale-110 hover:bg-blue-800 rounded-full p-1" />
            </a>
            <a href="mailto:sivakumarjujjavarapu123@gmail.com" target="_blank" rel="noreferrer">
              <MdEmail className="cursor-pointer text-3xl hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://www.instagram.com/siva_kumar_jujjavarapu/" target="_blank" rel="noreferrer">
              <FaInstagram className="cursor-pointer text-3xl hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
