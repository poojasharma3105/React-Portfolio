import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from '@remixicon/react';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center text-white px-4 py-5 Md:py-8 md:px-24 relative">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-3xl md:text-4xl font-cursive text-white">
          Pooja
        </h1>
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

          .font-cursive {
            font-family: 'Great Vibes', cursive;
          }
        `}</style>
      </div>

      {/* Navigation Links */}
      <ul
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center gap-6 text-xl transition-transform duration-300 z-50 ${
          menu ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:bg-transparent md:flex md:flex-row md:gap-10 md:text-lg md:translate-x-0 md:h-auto md:w-auto`}
      >
        {['About', 'Education', 'Experience', 'Projects', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenu(false)}>
            <li className="cursor-pointer hover:scale-105 transition-all">{item}</li>
          </a>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        {menu ? (
          <RiCloseLine
            size={30}
            className="cursor-pointer absolute right-4 top-4 transition-all hover:scale-105 z-50"
            onClick={() => setMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="cursor-pointer absolute right-4 top-4 transition-all hover:scale-105 z-50"
            onClick={() => setMenu(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
