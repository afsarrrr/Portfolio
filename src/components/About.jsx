import React from "react";
import Eye from "./Eye";

const About = () => {
  return (
    <section className="w-full min-h-screen bg-[#98E4FF] flex items-center">
      
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 gap-12">

        {/* LEFT SIDE */}
        <div className="w-full md:w-3/5 flex items-center">
          <div className="space-y-8 max-w-xl">

            {/* Intro */}
            <p className="text-2xl sm:text-3xl text-gray-800 leading-relaxed">
              Hi, I’m{" "}
              <span className="text-green-600 font-extrabold">
                Afsar Ahmed
              </span>
              , a passionate{" "}
              <span className="text-pink-500 font-semibold">
                Front-End Developer
              </span>{" "}
              and{" "}
              <span className="text-blue-500 font-semibold">
                Competitive Programmer
              </span>
              .
            </p>

            {/* Paragraph 1 */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              I enjoy building responsive, user-friendly web applications using
              modern technologies like{" "}
              <span className="font-semibold text-indigo-500">React</span> and{" "}
              <span className="font-semibold text-teal-500">
                Tailwind CSS
              </span>
              . Alongside web development, I actively practice data structures
              and algorithms to sharpen my problem-solving skills.
            </p>

            {/* Paragraph 2 */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              I’ve participated in multiple coding contests and worked on
              personal projects that helped me understand both{" "}
              <span className="font-semibold">design</span> and{" "}
              <span className="font-semibold">performance</span>.
            </p>

            {/* Paragraph 3 */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              I believe in{" "}
              <span className="font-semibold text-amber-700">
                continuous learning
              </span>
              , writing{" "}
              <span className="font-semibold text-amber-700">
                clean code
              </span>
              , and turning ideas into reality.
            </p>

            {/* CTA */}
            <p className="text-gray-800 text-base sm:text-lg pt-4">
              If you’re interested in my work or want to collaborate, feel free
              to{" "}
              <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
                get in touch
              </span>
              .
            </p>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-2/5 flex justify-center items-center">
          <div className="h-48 w-48 sm:h-60 sm:w-60 flex justify-center items-center gap-6 bg-[#FFEAA7] rounded-full">
            <Eye />
            <Eye />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
