import React from "react";

const ProjectCard = ({ title, main, image, demoLink, sourceLink }) => {
  return (
    <div className="p-5 md:p-6 flex flex-col w-full max-w-sm bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-cyan-500/30 shadow-xl shadow-slate-900 rounded-2xl transition-all duration-300 hover:scale-105 hover:border-cyan-300 hover:shadow-cyan-500/50">
      {/* Image Section */}
      <div className="relative w-full h-40 md:h-48 rounded-t-2xl overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 hover:scale-110"
          src={image}
          alt={`${title} Banner`}
        />
        <div className="absolute inset-0 bg-black/30 rounded-t-2xl opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
      </div>

      {/* Content */}
      <div className="p-5 text-center md:text-left">
        <h3 className="text-lg md:text-2xl font-bold text-cyan-400">{title}</h3>
        <p className="text-sm md:text-md text-gray-300 leading-tight py-3">{main}</p>
      </div>

      {/* Buttons */}
      <div className="mt-2 flex flex-wrap gap-3 justify-center md:justify-start p-4">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="cursor-pointer py-2 px-4 text-sm md:text-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 transition duration-300 hover:scale-105 font-semibold rounded-full shadow-lg">
            🚀 Demo
          </button>
        </a>
        <a href={sourceLink} target="_blank" rel="noopener noreferrer">
          <button className="cursor-pointer py-2 px-4 text-sm md:text-lg bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:opacity-90 transition duration-300 hover:scale-105 font-semibold rounded-full shadow-lg">
            💻 Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
