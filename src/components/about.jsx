import avatar from "../img/portfolio-avatar.png";
import { useState, useEffect } from "react";
import "./about.css";

const About = () => {
  const [aboutMe] = useState([
    {
      id: "first-p-about",
      content:
        "I’m a Full Stack Developer passionate about building scalable and user-focused applications using the MERN stack. I specialize in creating responsive web and mobile experiences that combine performance, clean design, and seamless functionality.",
    },
    {
      id: "second-p-about",
      content:
        "In my work experience, I’ve developed a comprehensive employee management app with features like biometric and location-based check-ins, dynamic leave tracking, and secure account management — enhancing user engagement and efficiency across the platform.",
    },
    {
      id: "third-p-about",
      content:
        "Beyond my professional work, I’ve developed several personal projects — including a Zen Class Dashboard, Social Media Platform, E-Commerce Website, and Blog App — each showcasing my ability to design, build, and deploy complete full-stack solutions with a focus on performance, usability, and clean architecture.",
    },
  ]);

  useEffect(() => {
    const aboutSection = document.querySelector(".about-mf");

    const handleScroll = () => {
      const sectionPosition = aboutSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition) {
        aboutSection.classList.add("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" className="about-mf route">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6 avatar-section">
                  <img src={avatar} alt="Avatar" className="about-avatar" />
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About Me</h5>
                    </div>
                    {aboutMe.map((content) => (
                      <p className="lead" key={content.id}>
                        {content.content}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
