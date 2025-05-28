import React, { useEffect, useState } from "react";
import "./App.css";
import profile from "./profile.jpg";
import projectImg from "./img2.jpeg";

function App() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ["Software Developer", "Frontend Developer", "Web Developer"];

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentIndex];
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 1000;

    const handleTyping = () => {
      if (!isDeleting) {
        if (text.length < currentRole.length) {
          setTimeout(() => {
            setText(currentRole.substring(0, text.length + 1));
          }, typeSpeed);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (text.length > 0) {
          setTimeout(() => {
            setText(currentRole.substring(0, text.length - 1));
          }, deleteSpeed);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentIndex]);

  // Scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.querySelector(".top");
      scrollTop.style.display = window.scrollY > 500 ? "block" : "none";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <a href="#home" className="logo">
          Portfolio
        </a>
        <nav className="navbar">
          {["Home", "About", "Services", "Skills", "Contact"].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ "--i": i + 1 }}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-container">
          <div className="home-img">
            <img src={profile} alt="Profile" />
          </div>
          <div className="home-content">
            <h3>Hello, It's Me.</h3>
            <h1>Poojitha Madala</h1>
            <h3>
              And I'm a{" "}
              <span className="animated-text">
                {text}
                <span className="cursor">|</span>
              </span>
            </h3>
            <p>
              I'm a Software Engineer passionate about building efficient and
              scalable solutions. <br />I specialize in full-stack development,
              machine learning, and AI-driven applications.
            </p>
            <div className="home-sci">
              {["facebook", "instagram", "whatsapp", "linkedin"].map(
                (icon, i) => (
                  <a key={icon} href="#/" style={{ "--i": i + 6 }}>
                    <i className={`bx bxl-${icon}`}></i>
                  </a>
                )
              )}
            </div>
            <a href="#about" className="btn-box">
              More About Me
            </a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src={profile} alt="About" />
        </div>
        <div className="about-text">
          <h2>
            About <span>Me</span>
          </h2>
          <h4>Software Developer!</h4>
          <p>
            I am a skilled software developer with expertise in
            <strong> Full-Stack Development, Machine Learning, and AI</strong>.
            I have hands-on experience in designing, developing, and deploying
            high-performance applications using{" "}
            <strong>Python, C++, JavaScript, HTML, CSS, and SQL</strong>.
          </p>
          <a href="#contact" className="btn-box">
            More About Me
          </a>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <h1 className="sub-title">
            My <span>Services</span>
          </h1>
          <div className="services-list">
            {[
              {
                icon: "code",
                title: "Web Design",
                text: "Creating visually stunning websites with HTML, CSS, and JavaScript",
              },
              {
                icon: "crop",
                title: "UI/UX Design",
                text: "Designing intuitive user interfaces and experiences",
              },
              {
                icon: "bxl-apple",
                title: "App Development",
                text: "Building cross-platform mobile applications",
              },
            ].map((service, i) => (
              <div key={i}>
                <i
                  className={`bx bx-${service.icon}`}
                  style={{ color: "#0ef" }}
                ></i>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
                <a href="#/" className="read">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="container1">
          <h1 className="heading1">Technical Skills</h1>
          <div className="Technical-bars">
            {[
              {
                icon: "bxl-html5",
                color: "#c95d2e",
                skill: "HTML",
                width: "90%",
              },
              {
                icon: "bxl-css3",
                color: "#147bbc",
                skill: "CSS",
                width: "85%",
              },
              {
                icon: "bxl-javascript",
                color: "#b0bc10",
                skill: "JavaScript",
                width: "80%",
              },
              {
                icon: "bxl-python",
                color: "#c32ec0",
                skill: "Python",
                width: "75%",
              },
              {
                icon: "bxl-react",
                color: "#69bcbc",
                skill: "React",
                width: "85%",
              },
            ].map((tech, i) => (
              <div className="bar" key={i}>
                <i
                  className={`bx ${tech.icon}`}
                  style={{ color: tech.color }}
                ></i>
                <div className="info">
                  <span>{tech.skill}</span>
                </div>
                <div className="progress-line" style={{ width: tech.width }}>
                  <span></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container1">
          <h1 className="heading1">Professional Skills</h1>
          <div className="radial-bars">
            {[
              { percentage: "90%", text: "Creativity", class: "path-1" },
              { percentage: "85%", text: "Communication", class: "path-2" },
              { percentage: "90%", text: "Problem Solving", class: "path-3" },
              { percentage: "90%", text: "TeamWork", class: "path-4" },
            ].map((skill, i) => (
              <div className="radial-bar" key={i}>
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                  <circle
                    className="progress-bar"
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                  <circle
                    className={`path ${skill.class}`}
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                </svg>
                <div className="percentage">{skill.percentage}</div>
                <div className="text">{skill.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="main-text">
          <h2>
            Latest <span>Projects</span>
          </h2>
          <div className="portfolio-content">
            {[
              {
                title: "Personal Portfolio",
                tech: "HTML, CSS, JavaScript",
                link: "https://github.com/madalapoojitha/MyPortfolio.git",
              },
              {
                title: "Agriculture Commidities PricePrediction Project",
                tech: "Machine Learning",
                link: "https://github.com/madalapoojitha/price-prediction-of-agricultural-commidities.git",
              },
              {
                title: "To-do List",
                tech: "Python, Django",
                link: "https://github.com/madalapoojitha/TO-DO-LIST-USING-DJANGO.git",
              },
            ].map((project, i) => (
              <div className="row" key={i}>
                <img src={projectImg} alt={project.title} />
                <div className="layer">
                  <h5>{project.title}</h5>
                  <p>{project.tech}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bx-link-external"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-text">
          <h2>
            Contact <span>Me!</span>
          </h2>
          <h4>Let's Connect</h4>
          <p>
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
          <div className="contact-list">
            <li>
              <i className="bx bxs-send"></i>madalapoojitha2005@gmail.com
            </li>
            <li>
              <i className="bx bxs-phone"></i>+91 7013562747
            </li>
          </div>
          <div className="contact-icons">
            {["facebook-circle", "whatsapp", "instagram", "linkedin"].map(
              (icon, i) => (
                <a key={icon} href="#/">
                  <i className={`bx bxl-${icon}`}></i>
                </a>
              )
            )}
          </div>
        </div>

        <div className="contact-form">
          <h3>Say Hello</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" className="send" />
          </form>
        </div>
      </section>

      <div className="last-text">
        <p>Copyright © 2023 All Rights Reserved</p>
      </div>
      <a href="#home" className="top">
        <i className="bx bx-up-arrow-alt"></i>
      </a>
    </div>
  );
}

export default App;
