import React from "react";
import AboutMe from "../../assets/AboutMe/AboutMe.png";

function About() {
  return (
    <div>
      <h1 className="text-4xl text-white text-center mt-20">About Me</h1>
      <div className="flex justify-around m-20">
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
            applications. I'm currently building real-world projects to strengthen in the{" "}
            <b>MERN Stack</b> (MongoDB, Express, React, Node.js), where I’m
            actively building real-world projects to sharpen my skills and
            deliver impactful solutions.
          </p>
          <p className=" m-4 leading-relaxed">
            I’m always excited to collaborate with{" "}
            <b>fellow developers, contribute to open-source projects</b>, and
            connect with like-minded professionals to push the boundaries of
            what’s possible in tech.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
