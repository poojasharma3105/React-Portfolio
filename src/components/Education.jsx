import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      duration: "Sep 2020 - May 2024",
      institution: "Global Institute of Technology, Jaipur",
      result: "CGPA: 8.64/10",
    },
    {
      degree: "XII (RBSE)",
      duration: "May 2019 - May 2020",
      institution: "HaldiGhati English Academy, Jobner",
      result: "Percentage: 77.80%",
    },
    {
      degree: "X (RBSE)",
      duration: "Mar 2017 - Apr 2018",
      institution: "S K N Public Sr Sec School, Jobner",
      result: "Percentage: 87.17%",
    },
  ];

  return (
    <div id="education" className="w-full px-6 md:px-24 pt-16 md:pt-24 text-white">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-12 flex items-center gap-3">
        <FaGraduationCap className="text-cyan-400 animate-bounce" /> Education
      </h2>

      {/* Cards Container */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-lg border border-cyan-400/50 p-6 md:p-8 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:border-cyan-300 hover:shadow-cyan-500/50"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-cyan-400">{edu.degree}</h3>
            <p className="text-sm md:text-md text-gray-400">{edu.duration}</p>
            <p className="text-lg md:text-xl mt-2 font-medium text-white">{edu.institution}</p>
            <p className="text-sm md:text-md text-gray-300 mt-1">{edu.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
