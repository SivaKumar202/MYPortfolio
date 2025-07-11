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
    <div>
      <h1 className="text-4xl text-white text-center mt-20">About Me</h1>
      <div className="flex  m-20">
        <div className="w-3/6">
          <img src={AboutMe} alt="Siva Kumar" />
        </div>
        <div className="w-3/6 bg-[#1E1E1E] text-white p-6 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold m-4">
            Curious About Me? Here You Go:
          </h1>
          <p className="m-4 leading-relaxed">
            Hey there! I’m <b>Siva Kumar</b>, a passionate and driven Full Stack
            Developer dedicated to crafting clean, scalable, and intuitive web
            applications. I'm currently building real-world projects to
            strengthen in the <b>MERN Stack</b> (MongoDB, Express, React,
            Node.js), where I’m actively building real-world projects to sharpen
            my skills and deliver impactful solutions.
          </p>
          <p className=" m-4 leading-relaxed">
            I’m always excited to collaborate with{" "}
            <b>fellow developers, contribute to open-source projects</b>, and
            connect with like-minded professionals to push the boundaries of
            what’s possible in tech.
          </p>
          <p className="m-4 font-bold">Skills & Technologies</p>
          <div className="flex gap-1.5 flex-wrap m-4 ">
            <img width={70} height={70} src={HTML} alt="HTMl" />
            <img width={70} height={70} src={CSS} alt="" />
            <img width={70} height={70} src={BootStrap} alt="" />
            <img width={70} height={70} src={js} alt="" />
            <img width={70} height={70} src={Reactjs} alt="" />
            <img width={70} height={70} src={Tailwind} alt="" />
            <img width={70} height={70} src={MUI} alt="" />
            <img width={70} height={70} src={Node} alt="" />
            <img width={70} height={70} src={Express} alt="" />
            <img width={70} height={70} src={git} alt="" />
            <img width={70} height={70} src={github} alt="" />
            <img width={70} height={70} src={MongoDB} alt="" />
            <img width={70} height={70} src={Python} alt="" />
            <img width={70} height={70} src={CPP} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
