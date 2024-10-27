import { useEffect } from "react";
import "./Skills.css";
import "./stars.css";
const Skills = () => {
  const skills = [
    {
      category: "FRONTEND",
      items: [
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "React.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Redux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
      ],
      additionalItems: [
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "SASS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        },
        {
          name: "Material UI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        },
        {
          name: "styled-components",
          icon: "https://avatars.githubusercontent.com/u/20658825?s=200&v=4",
        },
      ],
    },
    {
      category: "BACKEND",
      items: [
        {
          name: "Node.js",
          icon: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
        },
        {
          name: "Express.js",
          icon: "https://img.icons8.com/?size=80&id=9Gfx4Dfxl0JK&format=png",
        },
        {
          name: "MongoDB",
          icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
        },
        {
          name: "MySQL",
          icon: "https://img.icons8.com/?size=100&id=39858&format=png&color=FFFFFF",
        },
      ],
    },
    {
      category: "DEV TOOLS",
      items: [
        {
          name: "Postman",
          icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
        {
          name: "npm/yarn",
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
        },
        {
          name: "Git & GitHub",
          icon: "https://banner2.cleanpng.com/20180711/iqy/aawpwnuou.webp",
        },
      ],
    },
  ];

  useEffect(() => {
    const skillsSection = document.querySelector(".skills-container");

    const handleScroll = () => {
      const sectionPosition = skillsSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition) {
        skillsSection.classList.add("visible"); // Add the 'visible' class to trigger the animation
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="skills" className="skills-container">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <h1 className="title" style={{ marginBottom: "40px" }}>
        THINGS I KNOW!!
      </h1>
      {skills.map((skillGroup, index) => (
        <div key={index} className="skill-category">
          <h3
            style={{
              marginBottom: "20px",
              color: "white",
              fontSize: "2vw",
              fontWeight: 500,
            }}
          >
            {skillGroup.category}
          </h3>
          <ul className="skill-list">
            {skillGroup.items.map((skill, idx) => (
              <li key={idx} className="skill-item">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="skill-icon"
                />
                <p className="skill-name">{skill.name}</p>
              </li>
            ))}
          </ul>
          {skillGroup.additionalItems &&
            skillGroup.additionalItems.length > 0 && (
              <ul className="skill-list">
                {skillGroup.additionalItems.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      className="skill-icon"
                    />
                    <p className="skill-name">{skill.name}</p>
                  </li>
                ))}
              </ul>
            )}
          <span className="category-spacing" />
        </div>
      ))}
    </div>
  );
};

export default Skills;
