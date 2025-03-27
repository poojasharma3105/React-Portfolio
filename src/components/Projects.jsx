import React from 'react';
import { FaCode } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import projectDetails from './ProjectDetails';

const Projects = () => {
  return (
    <div id="projects" className="p-6 md:p-24 text-white">
      {/* Section Title */}
      <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left flex items-center gap-3">
        <FaCode className="text-cyan-400 animate-bounce" /> Projects
      </h1>

      {/* Projects Grid */}
      <div className="py-12 px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectDetails.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            main={project.main}
            image={project.image}
            demoLink={project.demoLink}
            sourceLink={project.sourceLink}
            className="border border-cyan-400 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50 hover:border-cyan-300 p-4"
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
