import React from "react";
import { FaGithub, FaEnvelopeSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border-t border-cyan-500/30 shadow-lg shadow-slate-900 p-6 md:p-10 text-center text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 items-center">

        {/* Left - Brand & Copyright */}
        <div className="text-gray-400 text-sm md:text-base">
          <p className="font-semibold text-cyan-400 text-lg md:text-xl mb-1">Design & Developed with ❤️ by Pooja Sharma</p>
        </div>

        {/* Center - Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://github.com/poojasharma3105" className="p-2 bg-black rounded-full hover:scale-110 transition-transform">
            <FaGithub className="text-white text-lg" />
          </a>
          <a href="https://www.linkedin.com/in/pooja-sharma-23a91b215/" className="p-2 bg-black rounded-full hover:scale-110 transition-transform">
            <FaLinkedin className="text-white text-lg" />
          </a>
          <a href="mailto:poojash3105@gmail.com" className="p-2 bg-black rounded-full hover:scale-110 transition-transform">
            <FaEnvelopeSquare className="text-white text-lg" />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
