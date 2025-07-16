import React from "react";
import fashiofy from "../../assets/Projects/fashiofy.png";
import Github from "../../assets/SocialIcons/GitHub.png";

function Projects() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-10 bg-black min-h-screen">
      <div className="max-w-5xl mx-auto bg-[#1E1E1E] text-white rounded-2xl shadow-lg p-6 sm:p-10 space-y-6">
        {/* Project Image */}
        <img
          src={fashiofy}
          alt="Fashiofy Project"
          className="w-full rounded-lg object-cover"
        />

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold">
          🧵 Fashiofy (Team Project)
        </h2>

        {/* Role & Status */}
        <p className="text-sm sm:text-base text-gray-400">
          <b>Role</b>: Frontend Developer | <b>Status</b>: Ongoing Collaboration
        </p>

        {/* Overview */}
        <div>
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
        </div>

        {/* Contributions */}
        <div>
          <p className="font-semibold mb-2">My Contributions:</p>
          <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
            <li>
              Designed and developed responsive UI components using React.js and
              CSS.
            </li>
            <li>
              Implemented product listing, detail pages, and shopping cart
              interfaces.
            </li>
            <li>
              Integrated frontend with backend APIs using Axios for dynamic data
              rendering.
            </li>
            <li>
              Ensured smooth user experience and cross-device compatibility.
            </li>
            <li>
              Collaborated with backend developers for seamless data flow and
              testing.
            </li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <p className="font-semibold">Tech Stack:</p>
          <p className="text-sm sm:text-base text-gray-300 mt-1 break-words">
            <div className="flex flex-wrap gap-2 text-sm font-semibold">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                React.js
              </span>
              <span className="bg-black text-green-400 px-2 py-1 rounded">
                Three.js
              </span>
              <span className="bg-sky-100 text-sky-600 px-2 py-1 rounded">
                Tailwind CSS
              </span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                MUI
              </span>
              <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded">
                JavaScript
              </span>
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">
                GitHub
              </span>
              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded">
                REST APIs
              </span>
            </div>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 mt-6">
          <a
            href="https://fashiofy.onrender.com/"
            target="_blank"
            className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 text-center w-full sm:w-auto"
          >
            🔗 Visit Live Demo
          </a>

          <a
            href="https://github.com/iCube-code/Fashiofy"
            target="_blank"
            className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 w-full sm:w-auto"
          >
            <div className="flex items-center justify-center gap-2">
              <img src={Github} alt="GitHub" className="w-6 h-6" />
              <span>Source Code</span>
            </div>
          </a>
        </div>
      </div>
      <div className="mt-20 text-center space-y-4">
        <p className="text-lg text-white">That's all for Now.</p>
      </div>
    </div>
  );
}

export default Projects;
