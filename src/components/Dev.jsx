import React from 'react';
import { motion } from "motion/react";

const Dev = () => {
  return (
    <div className="h-full w-1/2 bg-[#5A7863] rounded-4xl px-1 ml-1.5">

      <h1 className="h-2/10 w-full font-black text-green-400 text-4xl text-center px-2 py-6">
        DEVELOPMENT
      </h1>

      {/* LANGUAGES */}
      <div className="h-4/10 w-full">
        <h2 className="font-black text-red-400 text-4xl text-center px-2 py-2">
          Language
        </h2>

        <div className="flex justify-center items-center gap-6 py-3 px-2">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind"].map((lang) => (
            <motion.div
              key={lang}
              whileHover={{
                scale: 1.2,
                background: "green",
                color: "#dc243d",
              }}
              whileTap={{ scale: 0.95 }}
              className="font-black text-pink-600 bg-red-400 text-2xl text-center px-4 py-2 rounded-2xl cursor-pointer"
            >
              {lang}
            </motion.div>
          ))}
        </div>
      </div>

      {/* TOOLS */}
      <div className="h-4/10 w-full">
        <h2 className="font-black text-red-400 text-4xl text-center px-2 py-2">
          Development Tools
        </h2>

        <div className="flex justify-center items-center gap-6 py-3 px-2">
          {["Git", "GitHub", "VS Code"].map((tool) => (
            <motion.div
              key={tool}
              whileHover={{
                scale: 1.2,
                background: "green",
                color: "#dc243d",
              }}
              whileTap={{ scale: 0.95 }}
              className="font-black text-pink-600 bg-red-400 text-2xl text-center px-4 py-2 rounded-2xl cursor-pointer"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Dev;
