import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const sections = ["home", "about", "skills", "projects", "contact"];
const NAV_HEIGHT = 72;

const Navbar = () => {
  const [active, setActive] = useState("home");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      NAV_HEIGHT;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      let current = "home";

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (
          rect.top <= NAV_HEIGHT + 10 &&
          rect.bottom >= NAV_HEIGHT + 10
        ) {
          current = sec;
          break;
        }
      }

      setActive((p) => (p === current ? p : current));
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#F3CF7A]/95 backdrop-blur-md shadow-md">
      
      {/* FULL WIDTH BAR */}
      <div className="flex items-center h-[72px] px-4 overflow-hidden">

        {/* LOGO — EXTREME LEFT */}
        <div className="h-14 w-14 flex items-center justify-center">
          <motion.button
            onClick={() => scrollTo("home")}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="h-14 w-14"
            aria-label="Home"
          >
            <img
              src={logo}
              alt="logo"
              className="h-full w-full object-contain"
            />
          </motion.button>
        </div>

        {/* MENU — RIGHT */}
        <div className="ml-auto flex gap-4 sm:gap-6 md:gap-10 relative">
          {sections.map((sec) => (
            <NavItem
              key={sec}
              label={sec}
              active={active === sec}
              onClick={() => scrollTo(sec)}
            />
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

/* ---------------- NAV ITEM ---------------- */

const NavItem = ({ label, active, onClick }) => (
  <motion.button
    onClick={onClick}
    initial={false}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="relative px-3 py-2 font-semibold capitalize text-red-600 hover:text-black transition-colors focus:outline-none"
  >
    {label}

    {active && (
      <motion.span
        layoutId="nav-underline"
        className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#CC561E] rounded-full"
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    )}

    {!active && (
      <motion.span
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.25 }}
        className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#CC561E] origin-left rounded-full"
      />
    )}
  </motion.button>
);
