import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
  <Navbar />

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
