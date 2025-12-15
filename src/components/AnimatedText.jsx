import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const AnimatedText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [
        "Gamer",
        "Competitive Coder",
        "FrontEnd Developer"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-widest font-['Cinzel']">
      <span
        ref={textRef}
        className="inline-block bg-yellow-300 px-3 py-1 rounded-md"
      ></span>
    </h1>
  );
};

export default AnimatedText;
