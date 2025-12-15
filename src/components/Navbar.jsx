import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const sections = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");

  // Scroll to section on click
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Scroll spy (highlight active section)
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.getBoundingClientRect().top;
        if (top <= 120) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex items-center px-1 py-1 bg-[#F3CF7A] text-red-500">

      {/* Logo */}
      <motion.div
        onClick={() => scrollTo("home")}
        whileHover={{ rotate: 10 }}
        whileTap={{ scale: 1.1 }}
        className="h-14 w-14 cursor-pointer"
      >
        <img src={logo} alt="logo" className="h-full w-full" />
      </motion.div>

      {/* Menu */}
      <div className="ml-auto flex gap-6 sm:gap-10 md:gap-20">
        {sections.map((sec) => (
          <NavItem
            key={sec}
            label={sec}
            active={active === sec}
            onClick={() => scrollTo(sec)}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

/* 🔹 NAV ITEM */
const NavItem = ({ label, active, onClick }) => (
  <motion.div
    onClick={onClick}
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
    className={`
      h-12 px-4 flex items-center cursor-pointer rounded-lg
      transition-all duration-300
      ${
        active
          ? "bg-[#CC561E] text-black"
          : "hover:bg-[#CC561E] hover:text-black"
      }
    `}
  >
    {label}
  </motion.div>
);
