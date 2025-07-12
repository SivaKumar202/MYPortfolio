import React from "react";
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
import AboutMe from "../../assets/AboutMe/AboutMe.png";

function About() {
  return (
    <div className="px-4 py-10">
      <h1 className="text-4xl text-white text-center mt-10 mb-10">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2">
          <img src={AboutMe} alt="Siva Kumar" className="rounded-xl shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 bg-[#1E1E1E] text-white p-6 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold mb-4">
            Curious About Me? Here You Go:
          </h1>
          <p className="mb-4 leading-relaxed">
            Hey there! I’m <b>Siva Kumar</b>, a passionate and driven Full Stack
            Developer dedicated to crafting clean, scalable, and intuitive web
            applications. I'm currently building real-world projects to
            strengthen in the <b>MERN Stack</b> (MongoDB, Express, React,
            Node.js), where I’m actively building real-world projects to sharpen
            my skills and deliver impactful solutions.
          </p>
          <p className="mb-4 leading-relaxed">
            I’m always excited to collaborate with{" "}
            <b>fellow developers, contribute to open-source projects</b>, and
            connect with like-minded professionals to push the boundaries of
            what’s possible in tech.
          </p>
          <p className="mb-2 font-bold">Skills & Technologies</p>
          <div className="flex flex-wrap gap-3">
            <img width={70} height={70} src={HTML} alt="HTML" />
            <img width={70} height={70} src={CSS} alt="CSS" />
            <img width={70} height={70} src={BootStrap} alt="Bootstrap" />
            <img width={70} height={70} src={js} alt="JavaScript" />
            <img width={70} height={70} src={Reactjs} alt="React" />
            <img width={70} height={70} src={Tailwind} alt="Tailwind" />
            <img width={70} height={70} src={MUI} alt="MUI" />
            <img width={70} height={70} src={Node} alt="Node.js" />
            <img width={70} height={70} src={Express} alt="Express" />
            <img width={70} height={70} src={git} alt="Git" />
            <img width={70} height={70} src={github} alt="GitHub" />
            <img width={70} height={70} src={MongoDB} alt="MongoDB" />
            <img width={70} height={70} src={Python} alt="Python" />
            <img width={70} height={70} src={CPP} alt="C++" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
