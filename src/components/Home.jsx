import React, { useRef } from "react";
import figure from "../assets/figure.png";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";

const Home = () => {  
  const containerRef = useRef(null);

  return (
    <div className="bg-[#B6FFFA] h-screen w-screen flex items-center gap-10 px-10 py-10">
      
      {/* LEFT SIDE */}
      <div className="w-3/5 h-4/5 flex flex-col justify-center gap-4 px-8">
        <h1 className="text-3xl font-semibold">
          Hello, my name is{" "}
          <span className="font-black text-green-400 text-4xl">
            AFSAR AHMED
          </span>
        </h1>

        <h2 className="text-2xl">
          I am a <AnimatedText />
        </h2>
      </div>

      {/* RIGHT SIDE */}
      <div
        ref={containerRef}
        className="w-2/5 h-4/5 flex flex-col items-center justify-center gap-4"
      >
        <motion.img
          src={figure}
          alt="figure"
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}
          whileDrag={{
            scale:0.8
          }}
          dragSnapToOrigin
          whileTap={{
            scale:2
          }}
          className="h-2/4 w-2/4 cursor-grab active:cursor-grabbing"
        />

        <h1 classNae="text-3xl sm:text-4xl font-extrabold tracking-widest font-['Cinzel']">
          MONKEY D LUFFY
        </h1>

        <h1 className="font-serif italic text-lg sm:text-xl text-gray-700 mt-2">
          “Meat first, everything else later 🍖”
        </h1>
      </div>

    </div>
  );
};

export default Home;
