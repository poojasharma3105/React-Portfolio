import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div 
      className="pointer-events-none fixed top-0 left-0 w-8 h-8 bg-cyan-400 rounded-full 
                 mix-blend-difference opacity-75 transition-transform duration-75 z-1000"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    />
  );
};

export default CustomCursor;
