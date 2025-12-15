"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function HoverTapExpandCards() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openCard = (i) => setActiveIndex(i);
  const closeCard = () => setActiveIndex(null);

  return (
    <div
      className="grid grid-cols-4 gap-6 px-4 py-6"
      onClick={closeCard} // 👈 tap outside closes
    >
      <Card
        index={0}
        activeIndex={activeIndex}
        openCard={openCard}
        closeCard={closeCard}
        bg="bg-red-500"
        title="LEETCODE"
        details={[
          "Questions Solved : 600+",
          "Rating : 1621 ",
          "Contests : 4",
        ]}
      />

      <Card
        index={1}
        activeIndex={activeIndex}
        openCard={openCard}
        closeCard={closeCard}
        bg="bg-blue-500"
        title="CODEFORCES"
        details={[
          "Pupil on Codeforces",
          "Rating : 1305",
          "Contests :32+",
        ]}
      />

      <Card
        index={2}
        activeIndex={activeIndex}
        openCard={openCard}
        closeCard={closeCard}
        bg="bg-green-500"
        title="ATCODER"
        details={[
          "Best Rank : 2027+",
          "Rating : 183",
          "Contests:1",
        ]}
      />

      <Card
        index={3}
        activeIndex={activeIndex}
        openCard={openCard}
        closeCard={closeCard}
        bg="bg-purple-500"
        title="CODECHEF"
        details={[
          "Stars : ★★★",
          "Rating : 1642+",
          "Contests : 9",
        ]}
      />
    </div>
  );
}

/* 🔹 CARD COMPONENT */
function Card({ index, activeIndex, openCard, closeCard, bg, title, details }) {
  const isOpen = activeIndex === index;

  return (
    <motion.div
      onMouseEnter={() => openCard(index)}   // 🖱 hover open
      onMouseLeave={closeCard}               // 🖱 hover leave close
      onClick={(e) => {
        e.stopPropagation();                 // 📱 tap open only this
        openCard(index);
      }}
      initial={false}
      animate={{ height: isOpen ? 240 : 80 }}
      transition={{ type: "spring", stiffness: 260, damping: 25 }}
      className={`${bg} text-white rounded-2xl cursor-pointer overflow-hidden shadow-lg`}
    >
      {/* HEADER (always visible) */}
      <div className="h-[80px] flex items-center justify-center">
        <h1 className="text-xl font-black">
          {title}
        </h1>
      </div>

      {/* DETAILS */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="px-4 space-y-2 text-sm"
          >
            {details.map((d, i) => (
  <div
    key={i}
    className="px-4 py-2 rounded-lg bg-black/30 text-center"
  >
    <p className="text-sm font-bold text-white">
      {d}
    </p>
  </div>
))}

          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
