import React from 'react'
import { FaCss3, FaHtml5, FaReact, FaJs, FaJava, FaNodeJs, FaBriefcase } from 'react-icons/fa'
import { SiMongodb, SiTailwindcss } from 'react-icons/si'
import saptamIcon from "../assets/saptamIcon.webp"
const techStack = [
    { Icon: FaHtml5, name: "HTML", color: "#e34f26" },
    { Icon: FaCss3, name: "CSS", color: "#1572b6" },
    { Icon: FaJs, name: "JavaScript", color: "#f7df1e" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "#61dafb" },
    { Icon: FaNodeJs, name: "Node", color: "#47a248" },
    { Icon: FaReact, name: "React", color: "#61dafb" },
    { Icon: SiMongodb, name: "MongoDB", color: "#47a248" },
    { Icon: FaJava, name: "Core Java", color: "#f24e1e" },
];

const Experience = () => {
    return (
        <div id="experience" className="w-full px-6 md:px-24  pt-16 md:pt-24 text-white">
            <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-10 md:mb-0 flex items-center gap-3">
                <FaBriefcase className="text-cyan-400 animate-bounce" />Experience</h1>

            <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Technology Icons */}
                <div className="grid grid-cols-3 md:grid-cols-5 gap-6 p-4 bg-gradient-to-r md:p-12">
  {techStack.map(({ Icon, name, color }, index) => (
    <div key={index} className="flex flex-col items-center">
      <span className="p-4 bg-[#0d0f21] rounded-full flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
        <Icon size={45} color={color} />
      </span>
      <p className="mt-2 text-white text-sm font-medium">{name}</p>
    </div>
  ))}
</div>


                {/* Experience Card */}
                <div className="w-full md:w-1/2 flex  flex-col items-center justify-center mt-8 md:mt-0">
                    <div className="flex gap-4 bg-gradient-to-r from-[#0d0f21] to-[#1a1e35]  rounded-xl p-6 items-center w-full max-w-md">
                        <img className="h-14 w-14 object-contain" src={saptamIcon} alt="Company Logo" />
                        <div>
                            <h2 className="text-lg md:text-xl font-semibold text-white">Web Developer, Saptam Technologies</h2>
                            <p className="text-sm text-gray-400">Nov 2024 - Present</p>
                            <ul className="text-md mt-2 text-gray-300 list-disc list-inside">
                                <li>Working as a web developer</li>
                                <li>Developing and optimizing user interfaces</li>
                                <li>Ensuring website performance and scalability</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience
