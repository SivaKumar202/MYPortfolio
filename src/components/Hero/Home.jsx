import React from "react";
import { motion } from "framer-motion";
import "./index.css";
import Github from "../../assets/SocialIcons/GitHub.png";
import Gmail from "../../assets/SocialIcons/Gmail.png";
import Insta from "../../assets/SocialIcons/Instagram.png";
import linkedin from "../../assets/SocialIcons/Linkedin.png";
import css from "../../assets/HomeAssets/css.png";
import html from "../../assets/HomeAssets/html.png";
import node from "../../assets/HomeAssets/nodejs.png";
import figma from "../../assets/HomeAssets/figma.png";
import me from "../../assets/HomeAssets/me.png";
import ring2 from "../../assets/HomeAssets/Ellipse2.png";
import ring3 from "../../assets/HomeAssets/Ellipse3.png";
import { FaArrowRightLong } from "react-icons/fa6";

function Home() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-[#FC530A] text-white">
        {/* Optional Star Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="stars"></div>
        </div>

        <section className="relative z-10 flex flex-col md:flex-row justify-center md:justify-around items-center px-6 md:px-16 py-16 md:py-24 space-y-12 md:space-y-0">
          {/* Left Column */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 max-w-xl text-center md:text-left"
          >
            <h2 className="text-lg md:text-xl font-light">
              Hey, I am{" "}
              <span className="text-[#FC530A] font-semibold">Siva Kumar</span>
            </h2>
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-[#ff6ec4] via-[#4ADEDE] to-[#C084FC] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-text"
            >
              Full Stack Developer
            </motion.h1>

            <p className="text-base md:text-xl text-gray-300">
              I’m eager to connect with{" "}
              <b className="text-[#FC530A]">professionals</b>, collaborate on
              <br className="hidden md:block" />
              <b className="text-[#FC530A]">open-source</b>, and contribute
              meaningfully to the{" "}
              <b className="text-[#FC530A]">tech industry</b>.
            </p>

            {/* Social Links */}
            <div className="flex flex-col md:flex-row gap-4 mt-6 mx-auto md:mx-0 items-center justify-center">
              <div className="flex items-center gap-x-3">
                {[Github, linkedin, Gmail, Insta].map((icon, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    href={
                      [
                        "https://github.com/SivaKumar202",
                        "https://www.linkedin.com/in/siva-kumar-jujjavarapu/",
                        "mailto:sivakumarjujjavarapu123@gmail.com",
                        "https://www.instagram.com/siva_kumar_jujjavarapu/",
                      ][index]
                    }
                    target="_blank"
                  >
                    <img width={45} height={45} src={icon} alt="icon" />
                  </motion.a>
                ))}
              </div>

              {/* Connect Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 rounded-3xl px-5 py-3 border-[#C68313] flex items-center gap-x-2 cursor-pointer hover:bg-[#FC530A] hover:text-black transition duration-200"
              >
                <img
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif"
                  alt="👋"
                  width="32"
                  height="32"
                />
                <a
                  href="https://www.linkedin.com/in/siva-kumar-jujjavarapu/"
                  target="_blank"
                >
                  <button className="cursor-pointer">Let's connect</button>
                </a>
                <FaArrowRightLong />
              </motion.div>
            </div>

            <hr className="text-gray-500 mt-6" />
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative w-72 md:w-[400px] h-72 md:h-[400px]"
          >
            {/* Background rings */}
            <div className="absolute inset-0 z-0 flex justify-center">
              <img src={ring2} alt="ring2" className="absolute w-full p-6 md:p-10 animate-pulse" />
              <img src={ring2} alt="ring2" className="absolute w-full p-12 md:p-20 opacity-60 animate-spin-slow" />
              <img src={ring3} alt="ring3" className="absolute w-full animate-pulse" />
            </div>

            {/* Character */}
            <motion.img
              src={me}
              alt="Character"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-auto md:w-auto md:right-4 md:left-auto md:translate-x-0"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />

            {/* Floating Tech Icons */}
            <motion.img
              src={html}
              className="absolute top-3 left-3 w-12 md:w-20 z-30 animate-float"
              alt="HTML"
            />
            <motion.img
              src={css}
              className="absolute top-3 right-3 w-12 md:w-16 z-30 animate-float delay-200"
              alt="CSS"
            />
            <motion.img
              src={figma}
              className="absolute bottom-10 right-[-10px] w-10 md:w-16 z-30 animate-float delay-400"
              alt="Figma"
            />
            <motion.img
              src={node}
              className="absolute bottom-10 left-[-10px] w-10 md:w-16 z-30 animate-float delay-600"
              alt="Node.js"
            />
          </motion.div>
        </section>
      </div>
    </>
  );
}

export default Home;
