import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Hi, I'm Pooja Sharma", "I build things for the web", "I learn new things everyday"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        if (endValue < texts[index].length) {
          setEndValue((prev) => prev + 1);
        } else {
          setIsForward(false); 
        }
      } else {
        if (endValue > 0) {
          setEndValue((prev) => prev - 1);
        } else {
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 100); 

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index]);

  return (
    <div
      className="transition ease-in-out duration-300"
      style={{ whiteSpace: "nowrap", display: "inline-block" }}
    >
      {currentText}
    </div>
  );
};

export default TextChange;
