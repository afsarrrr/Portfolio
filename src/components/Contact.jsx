import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import character from "../assets/character.png";

const Contact = () => {
  return (
    <div className="min-h-screen w-screen bg-black flex justify-center items-center">
      
      {/* CARD */}
      <motion.div
        className="relative w-full max-w-lg bg-white rounded-xl p-10 overflow-hidden"
        initial="rest"
        whileHover="hover"
      >

        {/* CHARACTER IN SAFE AREA (TOP-LEFT BORDER ZONE) */}
        <motion.img
          src={character}
          alt="character"
          className="
            w-24
            absolute
            left-2
            top-2
            z-0
            pointer-events-none
          "
          variants={{
            rest: {
              opacity: 0,
              y: -20,
              scale: 0.9
            },
            hover: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 16
              }
            }
          }}
        />

        {/* CONTENT (SAFE FROM OVERLAP) */}
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-center mb-6">
            Contact Me
          </h1>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 outline-none focus:border-black bg-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 outline-none focus:border-black bg-white"
            />

            <textarea
              rows="5"
              placeholder="This doesn't work for now.
It will be updated later"
              className="border border-gray-300 rounded-lg p-3 outline-none focus:border-black resize-none bg-white"
            />

            <button
              type="submit"
              className="bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>

          <div className="flex justify-end items-center mt-4">
            <SocialLinks />
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default Contact;
