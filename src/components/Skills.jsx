import { useEffect } from "react";
import "./Skills.css";
import "./stars.css";
import python from "../img/python.png";
import PostgresSQL from "../img/PostgresSQL.png";
import MongoDB from "../img/MongoDB.png";
import Django from "../img/Django.png";
import NodeJs from "../img/NodeJs.png";
import VSCode from "../img/VSCode.png";
import PgAdminLogo from "../img/PgAdminLogo.png";
import git from "../img/git.png";
import github from "../img/github.png";
import postman from "../img/postman.png";
import api from "../img/api.png";

const Skills = () => {
  const skills = [
    {
      category: "Markup & Styling",
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
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
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
      category: "Programming Languages",
      items: [
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Python",
          icon: python,
        },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        {
          name: "React.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Redux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
        {
          name: "React Native",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          icon: NodeJs,
        },
        {
          name: "Express.js",
          icon: "https://img.icons8.com/?size=80&id=9Gfx4Dfxl0JK&format=png",
        },
        {
          name: "Django",
          icon: Django,
        },
        {
          name: "RESTful APIs",
          icon: api,
        },
        // {
        //   name: "JWT",
        //   icon: "https://img.icons8.com/?size=100&id=39858&format=png&color=FFFFFF",
        // },
      ],
    },
    {
      category: "Database",
      items: [
        {
          name: "MongoDB",
          icon: MongoDB,
        },
        {
          name: "PostgreSQL",
          icon: PostgresSQL,
        },
        {
          name: "MySQL",
          icon: "https://img.icons8.com/?size=100&id=39858&format=png&color=FFFFFF",
        },
      ],
    },
    {
      category: "Dev Tools",
      items: [
        {
          name: "Git",
          icon: git,
        },
        {
          name: "GitHub ",
          icon: github,
        },
        {
          name: "Postman",
          icon: postman,
        },
        {
          name: "VS Code",
          icon: VSCode,
        },
        {
          name: "pgAdmin",
          icon: PgAdminLogo,
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
        skillsSection.classList.add("visible");
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
              fontSize: "1.5em",
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
          <span className="category-spacing" />
        </div>
      ))}
    </div>
  );
};

export default Skills;
