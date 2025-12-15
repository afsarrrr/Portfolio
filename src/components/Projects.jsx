import { useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

/* ================= MAIN COMPONENT ================= */

export default function Projects() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  /* ===== VANTA BACKGROUND ===== */
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          color: 0x38bdf8,
          backgroundColor: 0x020617,
          points: 8,
          maxDistance: 22,
          spacing: 18,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* CONTENT ABOVE BACKGROUND */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={container}>
          {projects.map((project, i) => (
            <Card
              key={project.title}
              i={i}
              title={project.title}
              languages={project.languages}
              description={project.description}
              hueA={project.hueA}
              hueB={project.hueB}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= CARD ================= */

function Card({ title, languages, description, hueA, hueB, i }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(
    hueB
  )})`;

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      {/* splash */}
      <div style={{ ...splash, background }} />

      {/* card */}
      <motion.div style={card} variants={cardVariants}>
        <h2 style={titleStyle}>{title}</h2>
        <p style={langStyle}>{languages.join(" • ")}</p>
        <p style={descStyle}>{description}</p>
      </motion.div>
    </motion.div>
  );
}

/* ================= ANIMATION ================= */

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

/* ================= STYLES ================= */

const container = {
  margin: "100px auto",
  maxWidth: 500,
  paddingBottom: 100,
  width: "100%",
};

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
};

const splash = {
  position: "absolute",
  inset: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card = {
  width: 300,
  height: 430,
  borderRadius: 20,
  background: "#f5f5f5",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
  padding: 24,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 12,
};

const titleStyle = {
  fontSize: 24,
  fontWeight: 800,
};

const langStyle = {
  fontSize: 14,
  fontWeight: 600,
  color: "#16a34a",
};

const descStyle = {
  fontSize: 14,
  color: "#555",
  lineHeight: 1.5,
};

/* ================= DATA ================= */

const projects = [
  {
    title: "Password Generator",
    languages: ["React", "Tailwind"],
    description:
      "Simple user friendly password generator.",
    hueA: 140,
    hueB: 180,
  },
  {
    title: "Portfolio Website",
    languages: ["React", "Tailwind", "Motion"],
    description:
      "Animated personal portfolio showcasing projects and achievements.",
    hueA: 200,
    hueB: 240,
  },
  {
    title: "TodoList App with local storage",
    languages: ["React", "Tailwind"],
    description:
      "TodoList APP to add,remove todos .Stored in local storage.",
    hueA: 20,
    hueB: 60,
  },
];
