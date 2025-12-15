import React from 'react'
import { motion } from "motion/react";
import StickyScrollCards from './TapRevealCards';

const Cp = () => {
  return (
    <div className="h-full w-1/2 bg-[#EBF4DD] rounded-4xl px-1 mr-1.5">

      <h1 className="h-2/10 w-full font-black text-green-400 text-4xl text-center px-2 py-6">
        Competitive Programming
      </h1>

      <div className="h-full w-full">

        {/* LANGUAGE SECTION */}
        <div className="h-3/10 w-full">
          <h2 className="font-black text-red-400 text-4xl text-center px-2 py-2">
            Language
          </h2>

          <div className="flex justify-center items-center gap-10 py-3 px-2">

            <motion.div
              whileHover={{
                scale: 1.2,
                background: "green",
                color: "#dc243d",
              }}
              className="font-black text-pink-600 bg-red-400 text-3xl text-center px-4 py-2 rounded-2xl cursor-pointer"
            >
              C
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.2,
                background: "green",
                color: "#dc243d",
              }}
              className="font-black text-pink-600 bg-red-400 text-3xl text-center px-4 py-2 rounded-2xl cursor-pointer"
            >
              C++
            </motion.div>

          </div>
        </div>

        {/* PLATFORM SECTION */}
        <div className="h-5/10 w-full">
          <h2 className="font-black text-red-400 text-4xl text-center px-2 py-2">
            Platform
          </h2>

          <StickyScrollCards />
        </div>

      </div>
    </div>
  );
};

export default Cp;
