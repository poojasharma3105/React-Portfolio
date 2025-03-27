import React from 'react';
import TextChange from './TextChange';
import { FiDownload } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="flex items-center  w-full px-6 md:px-24 pt-16 py-8 md:pt-24 text-white">
      <div className="w-full text-center ">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm sm:text-base md:text-2xl tracking-tight mt-3 md:mt-5">
          Aspiring Full Stack Developer skilled in React and Node.js. Open to exciting opportunities—let’s connect!
        </p>
        <div className="flex justify-center ">
          <button
            className="flex items-center gap-2 mt-5 md:mt-10 text-white py-2 px-4 md:py-4 md:px-6 text-sm md:text-lg font-semibold rounded-3xl cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-85 transition-transform transform hover:scale-105"
            onClick={() => window.open('https://drive.google.com/file/d/1VGzncAfS8xY6kWCeYpOaxqLNksDP4wNt/view?usp=sharing', '_blank')}
          >
            Resume <FiDownload size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
