import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <a className="logo" href="#home">Nwe Ni</a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-text">
          <p className="small-title">HELLO, I'M</p>
          <h1>Nwe Ni Hlaing</h1>
          <h2>Computer Science Student</h2>
          <p>
            I am studying Computer Science at the University of Computer
            Studies, Mandalay. I enjoy learning web development and programming.
          </p>
          <a className="button" href="#about">About Me</a>
        </div>

      <div className="hero-box">
  <div className="profile-circle">
    <img src="profile.jpg" alt="My Profile" />
  </div>

  <h3>Welcome to my portfolio</h3>
  <p>Learning today, building tomorrow.</p>
</div>
</section>

      <section className="section about" id="about">
        <p className="section-label">GET TO KNOW ME</p>
        <h2>About Me</h2>
        <p className="about-text">
          My name is Nwe Ni Hlaing. I am a Computer Science student at the
          University of Computer Studies, Mandalay. I have learned HTML, CSS,
          JavaScript, C#, PHP and Tailwind CSS. I also have basic knowledge of
          databases. I want to improve my programming skills and gain more
          experience by working on projects.
        </p>
      </section>

      <section className="section skills" id="skills">
        <p className="section-label">WHAT I HAVE LEARNED</p>
        <h2>My Skills</h2>
        <div className="skill-list">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">C#</div>
          <div className="skill">Tailwind CSS</div>
          <div className="skill">Basic Database and PHP</div>
          <div className="skill">React (Learning)</div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <p className="section-label">MY WORK</p>
        <h2>My Projects</h2>
        <div className="project-list">
          <div className="project-card">
  <h3>Personal Portfolio Website</h3>
  <p>
    A simple website to introduce myself, my skills, and my learning
    journey. Built with React and CSS.
  </p>

  <a
    href="https://github.com/nweni-123"
    target="_blank"
    rel="noopener noreferrer"
    className="github-link"
  >
    View on GitHub ↗
  </a>
</div>
          <div className="project-card">
            <h3>University Projects</h3>
            <p>
              Coursework projects created while learning programming,
              web development, and database concepts.I no longer have my previous projects on my laptop.
              Most of the projects I worked on were mainly focused on front-end development.I worked on the front-end development of an E-Wallet Payment System project, which involved Java, Object-Oriented Design and Development (OODD), 
              and Database Management. I also contributed to the back-end development.
              Student Management System: Developed the front-end interface using PHP.
              sHotel Management System: Developed the front-end interface using C#.
            </p>
          </div>
        </div>
      
      </section>

      <section className="section contact" id="contact">
        <p className="section-label">GET IN TOUCH</p>
        <h2>Contact Me</h2>
        <p>If you would like to contact me, please send me an email.</p>
        <a className="button" href="mailto:your-email@example.com">Send Email</a>
        <p className="email-note">nnihlaing47@gmail.com</p>
      </section>

      <footer>
        <p>2026 Nwe Ni Hlaing. Personal Portfolio for Nexa Core</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
