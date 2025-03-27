import React from 'react'
import aboutImg from '../assets/avatar.png'
import { IoArrowForward } from 'react-icons/io5'

const About = () => {
  return (
    <div id="about" className="text-white flex flex-col md:flex-row items-center bg-[#0d0f21] shadow-2xl mx-4 md:mx-20 bg-opacity-30 rounded-lg p-8 md:p-12">
      <div className="w-full md:w-1/2 flex justify-center">
        <img className="w-full max-w-[300px] md:max-w-[400px] rounded-lg" src={aboutImg} alt="About" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col ">
  <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center md:text-left">
    About
  </h2>

  <ul className="space-y-6 w-full">
    {[
      {
        title: "Frontend Developer",
        description:
          "Passionate about crafting responsive, high-performance web applications with modern front-end technologies.",
      },
      {
        title: "Backend Developer",
        description:
          "Skilled in building scalable, efficient, and secure back-end systems and APIs to power seamless user experiences.",
      },
    ].map((item, index) => (
      <li
        key={index}
        className="flex gap-4 p-4 rounded-lg transition-all duration-300 group hover:bg-gray-800 hover:shadow-lg"
      >
        <IoArrowForward
          size={30}
          className="text-cyan-400 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        />
        <div>
          <h1 className="text-xl md:text-2xl font-semibold transition-colors duration-300 group-hover:text-cyan-400">
            {item.title}
          </h1>
          <p className="text-sm md:text-md leading-tight text-gray-300 transition-colors duration-300 group-hover:text-gray-100">
            {item.description}
          </p>
        </div>
      </li>
    ))}
  </ul>
</div>

    </div>
  )
}

export default About
