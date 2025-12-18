import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Snowfall from 'react-snowfall'
import { redirect } from "react-router-dom";
function App() {
  return (
    <>
  <Navbar />
 <Snowfall
        color="#E6FBFF"
        snowflakeCount={400}
        speed={[0.6, 1.4]}
        wind={[-0.3, 0.3]}
        radius={[1, 3]}
        opacity={[0.6, 1]}
        rotationSpeed={[-1, 1]}
        changeFrequency={200}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />


  <main className="pt-[72px]">
    <section id="home" className="scroll-mt-[72px]">
      <Home />
    </section>

    <section id="about" className="scroll-mt-[72px]">
      <About />
    </section>

    <section id="skills" className="scroll-mt-[72px]">
      <Skill />
    </section>

    <section id="projects" className="scroll-mt-[72px]">
      <Projects />
    </section>

    <section id="contact" className="scroll-mt-[72px]">
      <Contact />
    </section>
  </main>
</>

  );
}

export default App;
