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
    <>
      <div className="bg-black text-white">
        <h1 className="text-center text-7xl m-20">
          Skills That Fuel My Passion
        </h1>
        <div className="flex gap-5 m-32 items-center ">
          {/* 1st Column */}
          <div className="flex flex-col w-3/8 gap-y-5">
            {/* Front-End */}
            <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6 space-y-4">
              <div className="flex justify-between gap-4 flex-wrap">
                <img src={HTML} alt="HTML" className="w-20 h-20" />
                <img src={js} alt="JavaScript" className="w-20 h-20" />
                <img src={Reactjs} alt="React" className="w-20 h-20" />
                <img src={Redux} alt="Redux" className="w-20 h-20" />
              </div>
              <div className="space-y-2">
                <h1 className="text-xl font-semibold text-white">
                  Front-End Development
                </h1>
                <p className="text-gray-300 text-sm w-3/4">
                  Building engaging and user-friendly web interfaces using
                  modern frameworks and technologies with expertise.
                </p>
              </div>
            </div>

            {/* Back-End */}
            <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6 space-y-4">
              <div className="flex justify-center gap-4">
                <img src={Node} alt="Node.js" className="w-20 h-20" />
                <img src={Express} alt="Express.js" className="w-20 h-20" />
              </div>
              <div className="space-y-2">
                <h1 className="text-xl font-semibold text-white">
                  Back-End Development
                </h1>
                <p className="text-gray-300 text-sm w-3/4">
                  Developing robust server-side logic and APIs to power dynamic
                  and scalable web applications.
                </p>
              </div>
            </div>

            {/* Personal Development */}
            <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6 space-y-4">
              <div className="flex flex-wrap justify-center gap-4 text-white text-sm font-medium">
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
              <div className="space-y-2">
                <h1 className="text-xl font-semibold text-white">
                  Personal Development
                </h1>
                <p className="text-gray-300 text-sm w-3/4">
                  Committed to continuous learning and personal growth to excel
                  in both professional and collaborative environments.
                </p>
              </div>
            </div>
          </div>
          {/* Second Column */}
          <div className="flex flex-col w-2/8 gap-y-5">
            {/* Styling & Design */}
            <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6 space-y-4">
              <div className="flex justify-center gap-4 flex-wrap">
                <img src={CSS} alt="CSS" className="w-20 h-20" />
                <img src={BootStrap} alt="Bootstrap" className="w-20 h-20" />
                <img src={Tailwind} alt="Tailwind" className="w-20 h-20" />
                <img src={MUI} alt="MUI" className="w-20 h-20" />
              </div>
              <div className="space-y-2">
                <h1 className="text-xl font-semibold text-white">
                  Styling & Design
                </h1>
                <p className="text-gray-300 text-sm">
                  Crafting visually appealing and responsive designs with
                  advanced styling tools and frameworks.
                </p>
              </div>
            </div>

            {/* Deployment */}
            <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6 space-y-4">
              <div className="flex justify-center gap-4 flex-wrap">
                <img src={Vercel} alt="Vercel" className="w-14 h-14" />
                <img src={netlify} alt="Netlify" className="w-14 h-14" />
              </div>
              <div className="space-y-2">
                <h1 className="text-xl font-semibold text-white">Deployment</h1>
                <p className="text-gray-300 text-sm">
                  Experienced in deploying and managing applications using
                  modern cloud platforms and tools.
                </p>
              </div>
            </div>

            {/* Testing & Debugging */}
            <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6 space-y-4">
              <div className="flex justify-center">
                <img src={post} alt="Postman" className="w-14 h-14" />
              </div>
              <div className="space-y-2">
                <h1 className="text-xl font-semibold text-white">
                  Testing & Debugging
                </h1>
                <p className="text-gray-300 text-sm">
                  Ensuring code quality and reliability through rigorous testing
                  and debugging processes.
                </p>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="flex flex-col w-3/8 gap-y-5">
            {/* Programming Languages */}
            <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6 space-y-4">
              <div className="flex justify-center gap-4">
                <img src={Python} alt="Python" className="w-20 h-20" />
                <img src={CPP} alt="C++" className="w-20 h-20" />
              </div>
              <div className="space-y-2">
                <h1 className="text-xl font-semibold text-white">
                  Programming Languages
                </h1>
                <p className="text-gray-300 text-sm w-3/4">
                  Proficient in problem-solving and applying programming
                  languages to implement efficient data structures and
                  algorithms.
                </p>
              </div>
            </div>

            {/* Database Management */}
            <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6 space-y-4">
              <div className="flex justify-center gap-4">
                <img src={MongoDB} alt="MongoDB" className="w-20 h-20" />
                <img src={FireBase} alt="Firebase" className="w-20 h-20" />
              </div>
              <div className="space-y-2">
                <h1 className="text-xl font-semibold text-white">
                  Database Management
                </h1>
                <p className="text-gray-300 text-sm w-3/4">
                  Designing and managing databases to ensure secure and
                  efficient data storage and retrieval.
                </p>
              </div>
            </div>

            {/* Version Control & Collaboration */}
            <div className="bg-[#1E1E1E] rounded-3xl shadow-2xl p-6 space-y-4">
              <div className="flex justify-center gap-4">
                <img src={github} alt="GitHub" className="w-20 h-20" />
                <img src={git} alt="Git" className="w-20 h-20" />
              </div>
              <div className="space-y-2">
                <h1 className="text-xl font-semibold text-white">
                  Version Control & Collaboration
                </h1>
                <p className="text-gray-300 text-sm w-3/4">
                  Effectively managing code and collaborating on projects to
                  ensure seamless teamwork.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="m-32 gap-10">
          <p className="gap-4">That's all for Now.</p>
          <h1 className="text-6xl font-semibold gap-4">
            Got a project in mind?
          </h1>
          <div className="flex gap-x-6 items-center">
          <h1 className="text-6xl font-semibold gap-4">Let’s talk</h1>
          <div className="flex items-center gap-x-3">
            <a href="https://github.com/SivaKumar202" target="_blank">
              <FaGithub className="cursor-pointer text-3xl hover:scale-110 transition duration-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/siva-kumar-jujjavarapu/"
              target="_blank"
            >
              <BsLinkedin className="cursor-pointer text-3xl hover:scale-110 hover:bg-blue-800" />
            </a>
            <a href="mailto:sivakumarjujjavarapu123@gmail.com" target="_blank">
              <MdEmail className="cursor-pointer text-3xl hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              href="https://www.instagram.com/siva_kumar_jujjavarapu/"
              target="_blank"
            >
              <FaInstagram className="cursor-pointer text-3xl hover:scale-110" />
            </a>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
