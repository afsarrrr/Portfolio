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

      <section id="home" className="scroll-mt-24"><Home /></section>
      <section id="about" className="scroll-mt-24"><About /></section>
      <section id="skills" className="scroll-mt-24"><Skill /></section>
      <section id="projects" className="scroll-mt-24"><Projects /></section>
      <section id="contact" className="scroll-mt-24"><Contact /></section>
    </>
  );
}

export default App;
