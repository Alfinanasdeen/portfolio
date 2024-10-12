import avatar from "../img/portfolio-avatar.png"; 
import { useState, useEffect } from "react";
import "./about.css";

const About = () => {
  const [aboutMe] = useState([
    {
      id: "first-p-about",
      content:
        "I am a full stack developer focused on creating efficient and user-friendly web applications. I specialize in the MERN stack, including React, Node.js, MongoDB, and Express.js.",
    },
    {
      id: "second-p-about",
      content:
        "I have developed projects ranging from e-commerce platforms to blog websites, constantly pushing the boundaries of my skills. I thrive on tackling new challenges and learning new technologies.",
    },
    {
      id: "third-p-about",
      content:
        "My focus is always on writing clean, maintainable code while delivering visually appealing and responsive designs that offer seamless user experiences.",
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
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6 avatar-section">
                  <img
                    src={avatar} 
                    alt="Avatar"
                    className="about-avatar"
                  />
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
