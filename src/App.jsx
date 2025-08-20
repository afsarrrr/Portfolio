import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'

function App() {
  const typedEl = useRef(null)
  // Initial bg color is About section's greenish shade
  const [bgColor, setBgColor] = useState('#065f46')

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ['Web Developer', 'Competitive Programmer', 'Coder'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    })
    return () => typed.destroy()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          switch (entry.target.id) {
            case 'about':
              setBgColor('#065f46') // dark green
              break
            case 'skills':
              setBgColor('#7dd3fc') // cool blue
              break
            case 'projects':
              setBgColor('#fcd34d') // warm yellow
              break
            case 'contact':
              setBgColor('#9ca3af') // grayish/silver for contact
              break
            default:
              break
          }
        })
      },
      { threshold: 0.45 }
    )

    const about = document.getElementById('about')
    const skills = document.getElementById('skills')
    const projects = document.getElementById('projects')
    const contact = document.getElementById('contact')

    if (about) observer.observe(about)
    if (skills) observer.observe(skills)
    if (projects) observer.observe(projects)
    if (contact) observer.observe(contact)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Intro Section */}
      <div
        className="w-screen h-screen bg-cover bg-center relative z-10"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/3b/26/e7/3b26e7dfff13cd5902368fff67c55583.jpg')",
          transition: 'background 1.5s ease',
        }}
      >
        <header className="text-red-700 shadow-lg">
          <div className="container mx-auto flex items-center py-4 px-6">
            <img
              src="https://m.media-amazon.com/images/I/51xJKuZypOL._UF1000,1000_QL80_.jpg"
              alt="Luffy Pirate Flag"
              className="w-20 h-20 mr-6 ml-6"
            />
            <nav className="ml-auto mr-20 text-xl">
              <ul className="flex space-x-6">
                <li><a href="#about" className="hover:text-red-400">About</a></li>
                <li><a href="#skills" className="hover:text-red-400">Skills</a></li>
                <li><a href="#projects" className="hover:text-red-400">Projects</a></li>
                <li><a href="#contact" className="hover:text-red-400">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="w-full py-10 my-10 flex items-center justify-center">
          <div className="w-1/2 h-full mx-6 flex flex-col items-center justify-center p-2">
            <h1 className="text-3xl text-white mb-2">
              Hi, my name is <span className="text-[#FCD12A]">Afsar Ahmed</span>
            </h1>
            <p className="text-3xl text-white">
              I am a passionate <span ref={typedEl} className="text-red-500"></span>
            </p>
          </div>
          <div className="w-1/2 h-[500px] mx-2 flex items-center justify-center p-6">
            <img
              className="w-full h-full object-contain"
              src="https://i.pinimg.com/1200x/68/6b/10/686b10dd28a05dbf609dd9621ea6ea12.jpg"
              alt="luffy"
            />
          </div>
        </div>
      </div>

      {/* Wrapper with smooth background transition */}
      <div
        className="transition-colors duration-1000 ease-in-out"
        style={{ backgroundColor: bgColor }}
      >
        {/* About Section */}
        <section
          id="about"
          className="w-screen h-screen flex items-center px-6 relative overflow-hidden text-white z-20"
          style={{
            background:
              'linear-gradient(135deg, #065f46, #000000 50%, rgba(252, 209, 42, 0.15) 70%, #7f1d1d 90%)',
            transition: 'background 1.5s ease',
          }}
        >
          <div
            className="absolute inset-0 opacity-40 animate-gradientBackground -z-10"
            style={{
              background:
                'linear-gradient(270deg, #065f46, #000000, #FCD12A, #B91C1C, #065f46)',
              backgroundSize: '1000% 1000%',
            }}
          ></div>

          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="max-w-3xl md:max-w-xl">
              <h2 className="text-6xl font-extrabold mb-6 tracking-wide relative inline-block overflow-hidden">
                {'About Me'.split('').map((char, idx) => (
                  <span
                    key={idx}
                    className="inline-block opacity-0 animate-slideIn"
                    style={{ animationDelay: `${idx * 0.18}s` }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
                <span className="block h-1 w-20 bg-yellow-400 rounded mt-2 animate-pulse"></span>
              </h2>

              <p
                className="text-lg leading-relaxed border-l-4 border-yellow-400 pl-6 mb-6 font-medium text-yellow-300 italic drop-shadow-lg opacity-0 animate-fadeUp"
                style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}
              >
                “I’m a swordsman in the world of code, mastering every challenge with
                precision and honor.”
              </p>

              <p
                className="text-xl leading-relaxed mb-4 opacity-0 animate-fadeUp"
                style={{ animationDelay: '2.9s', animationFillMode: 'forwards' }}
              >
                Hello! I am <span className="text-yellow-400 font-semibold">Afsar Ahmed</span>, a
                passionate Web Developer and Competitive Programmer. I love building
                innovative applications, solving challenging problems, and continuously
                learning new technologies.
              </p>

              <p
                className="text-xl leading-relaxed opacity-0 animate-fadeUp"
                style={{ animationDelay: '3.3s', animationFillMode: 'forwards' }}
              >
                Currently pursuing Computer Science and Engineering at NIT Silchar, I enjoy
                turning ideas into real-world projects with clean, efficient code. When
                I’m not coding, I’m exploring AI, video editing, or sharpening my
                competitive programming skills.
              </p>
            </div>

            <div
              className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-yellow-400 transform transition-transform duration-500 hover:scale-110 hover:rotate-3 animate-pulseSlow"
            >
              <img
                src="https://i.pinimg.com/originals/53/ac/15/53ac15653b74977016b24e08040e786e.jpg"
                alt="Roronoa Zoro"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <style>{`
            @keyframes slideIn {
              0% { opacity: 0; transform: translateY(40px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes pulseSlow {
              0%, 100% { filter: drop-shadow(0 0 10px #fcd12a); transform: scale(1); }
              50% { filter: drop-shadow(0 0 25px #fcd12a); transform: scale(1.05); }
            }
            @keyframes gradientBackground {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .animate-slideIn { animation: slideIn 0.5s ease forwards; display:inline-block; }
            .animate-fadeUp { animation: fadeUp 1s ease forwards; }
            .animate-pulseSlow { animation: pulseSlow 3s ease-in-out infinite; }
            .animate-gradientBackground { background-size: 200% 200%; animation: gradientBackground 20s ease infinite; }
          `}</style>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="relative py-20 z-20"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255, 192, 203, 0.7),
                rgba(173, 216, 230, 0.7)
              )`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            transition: 'background 1.5s ease',
          }}
        >
          <div className="container mx-auto text-center px-6">
            <h2 className="text-5xl font-extrabold mb-12 text-pink-600 drop-shadow-md animate-fadeInScale">
              Skills
            </h2>

            {/* Languages */}
            <div className="mb-12">
              <h3 className="text-3xl font-semibold mb-6 text-blue-600 animate-fadeInScale delay-200">
                Languages
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: 'C++', logo: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png' },
                  { name: 'JavaScript', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
                ].map((skill, idx) => (
                  <div
                    key={idx}
                    className="w-40 px-6 py-4 bg-pink-200 rounded-3xl shadow-lg flex flex-col items-center gap-3 cursor-pointer
                               transform transition duration-500 hover:scale-110 hover:shadow-xl
                               opacity-0 animate-fadeInScale"
                    style={{ animationDelay: `${idx * 0.15 + 0.3}s`, animationFillMode: 'forwards' }}
                  >
                    <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
                    <span className="text-lg font-semibold text-pink-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="mb-12">
              <h3 className="text-3xl font-semibold mb-6 text-blue-600 animate-fadeInScale delay-400">
                Frontend
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: 'HTML', logo: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
                  { name: 'CSS', logo: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
                  { name: 'React', logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
                  { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
                ].map((skill, idx) => (
                  <div
                    key={idx}
                    className="w-40 px-6 py-4 bg-pink-200 rounded-3xl shadow-lg flex flex-col items-center gap-3 cursor-pointer
                               transform transition duration-500 hover:scale-110 hover:shadow-xl
                               opacity-0 animate-fadeInScale"
                    style={{ animationDelay: `${idx * 0.15 + 0.9}s`, animationFillMode: 'forwards' }}
                  >
                    <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
                    <span className="text-lg font-semibold text-pink-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600 animate-fadeInScale delay-600">
                Backend
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: 'Node.js', logo: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
                  { name: 'Express.js', logo: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
                  { name: 'Git', logo: 'https://cdn-icons-png.flaticon.com/512/2111/2111288.png' },
                ].map((skill, idx) => (
                  <div
                    key={idx}
                    className="w-40 px-6 py-4 bg-pink-200 rounded-3xl shadow-lg flex flex-col items-center gap-3 cursor-pointer
                               transform transition duration-500 hover:scale-110 hover:shadow-xl
                               opacity-0 animate-fadeInScale"
                    style={{ animationDelay: `${idx * 0.15 + 1.5}s`, animationFillMode: 'forwards' }}
                  >
                    <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
                    <span className="text-lg font-semibold text-pink-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style>{`
            @keyframes fadeInScale {
              0% { opacity: 0; transform: scale(0.8); }
              100% { opacity: 1; transform: scale(1); }
            }
            .animate-fadeInScale { animation: fadeInScale 0.6s ease forwards; }
          `}</style>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="w-screen min-h-screen py-20 px-6 relative z-20"
          style={{
            backgroundImage: 'linear-gradient(135deg, #f6ad55 0%, #fcd34d 50%, #fde68a 100%)',
            transition: 'background 1.5s ease',
          }}
        >
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-6xl font-extrabold mb-12 text-orange-900 drop-shadow-lg relative inline-block overflow-hidden">
              {'Projects'.split('').map((char, idx) => (
                <span
                  key={idx}
                  className="inline-block opacity-0 animate-slideIn"
                  style={{ animationDelay: `${idx * 0.12}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
              <span className="block h-1 w-24 bg-yellow-400 rounded mt-2 animate-pulse"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: 'Treasure Map Finder',
                  description:
                    'An interactive web app to locate hidden treasures using map coordinates and clues.',
                  url: '#',
                  tech: ['React', 'Mapbox', 'Tailwind CSS'],
                },
                {
                  title: 'Weather Navigator',
                  description:
                    'A sleek weather app inspired by sea voyages that gives real-time weather updates.',
                  url: '#',
                  tech: ['JavaScript', 'API', 'CSS'],
                },
                {
                  title: 'Log Pose Tracker',
                  description:
                    'Track your journey across islands with a log pose-style interactive timeline.',
                  url: '#',
                  tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
                },
              ].map((project, idx) => (
                <a
                  key={idx}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-3xl shadow-lg bg-gradient-to-br from-orange-200 via-yellow-100 to-yellow-50
                             p-6 cursor-pointer transform transition duration-700 ease-in-out hover:scale-105 hover:shadow-2xl"
                  style={{ animationDelay: `${idx * 0.15 + 0.3}s`, animationFillMode: 'forwards' }}
                >
                  <h3 className="text-2xl font-bold mb-3 text-orange-700 group-hover:text-orange-900 transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-orange-800 mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((techItem, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold bg-yellow-300 text-orange-800 rounded-full px-3 py-1"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes pulse { 0%,100%{ opacity:1 } 50%{ opacity:0.6 } }
            .animate-pulse { animation: pulse 2s ease-in-out infinite; }
          `}</style>
        </section>

       {/* Contact Section - Sanji Themed with Photo + Form */}
<section
  id="contact"
  className="w-screen min-h-screen py-20 px-6 flex flex-col md:flex-row items-center justify-center bg-[#FFF4E6] transition-colors duration-1500 ease-in-out"
>
  {/* Left side: Sanji Photo */}
  <div className="w-full md:w-1/3 flex justify-center mb-12 md:mb-0">
    <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-orange-400 hover:scale-105 transition-transform duration-500">
      <img
        src="https://sketchok.com/images/articles/06-anime/002-one-piece/34/19m.jpg"
        alt="Sanji from One Piece"
        className="w-72 h-96 object-cover"
        loading="lazy"
      />
      {/* Optional subtle overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-transparent to-orange-200 opacity-40 pointer-events-none"
        aria-hidden="true"
      ></div>
    </div>
  </div>

  {/* Right side: Contact info + form */}
  <div className="w-full md:w-2/3 max-w-2xl bg-white rounded-xl p-10 shadow-lg">
    <h2 className="text-5xl font-extrabold mb-6 text-orange-600 relative inline-block">
      Contact Me
      <span
        className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded animate-pulse"
        aria-hidden="true"
      ></span>
    </h2>

    <p className="mb-8 text-lg font-semibold italic text-orange-700 drop-shadow-sm">
      “If you want a meal or a chat, I'm here with fire and flavor — just reach out!”
    </p>

    {/* Contact Info */}
    <div className="flex flex-wrap gap-8 mb-12 text-orange-700 text-xl justify-center md:justify-start">
      {/* Instagram */}
      <a
        href="https://instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex items-center gap-3 hover:text-pink-600 transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5c3.176 0 5.75-2.574 5.75-5.75v-8.5C22 4.574 19.426 2 16.25 2h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5a4.75 4.75 0 0 1 0-9.5zm5.75-.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5z" />
        </svg>
        Instagram
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="flex items-center gap-3 hover:text-blue-700 transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5A2.5 2.5 0 0 0 2 6a2.5 2.5 0 0 0 2.98 2.5a2.5 2.5 0 0 1 2.02-2.5zM3 9h4v12H3zM8 9h4v2h.06a4.43 4.43 0 0 1 4-2c4 0 4.74 3.2 4.74 7.35V21H16v-6.27c0-1.5-.03-3.45-2.1-3.45c-2.1 0-2.43 1.6-2.43 3.35V21H8z" />
        </svg>
        LinkedIn
      </a>

      {/* Email */}
      <a
        href="mailto:your.email@example.com"
        aria-label="Email"
        className="flex items-center gap-3 hover:text-red-600 transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4m0 0l-4 4m4-4v8" />
        </svg>
        your.email@example.com
      </a>

      {/* Phone */}
      <a
        href="tel:+911234567890"
        aria-label="Phone"
        className="flex items-center gap-3 hover:text-yellow-600 transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5h2l3.6 7.59-1.35 2.45a11.042 11.042 0 005.55 5.55l2.45-1.35L19 19v2a2 2 0 01-2 2C8.477 23 1 15.523 1 6a2 2 0 012-2z"
          />
        </svg>
        +91 123 456 7890
      </a>
    </div>

    {/* Contact Form */}
    <form
      className="flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault()
        alert('Message sent! (Pretend, this is just a demo)')
      }}
    >
      <label className="flex flex-col font-semibold text-gray-700">
        Name
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="mt-2 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />
      </label>

      <label className="flex flex-col font-semibold text-gray-700">
        Email
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="mt-2 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />
      </label>

      <label className="flex flex-col font-semibold text-gray-700">
        Message
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Your message here..."
          className="mt-2 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
        ></textarea>
      </label>

      <button
        type="submit"
        className="self-start bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transform transition"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

      </div>
    </>
  )
}

export default App
