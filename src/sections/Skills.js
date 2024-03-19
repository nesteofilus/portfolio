import React from "react";
import "./Skills.css";

function Skills() {
  const logos = [
    { image: "React", name: "ReactJS" },
    { image: "Node", name: "NodeJS" },
    { image: "Express", name: "ExpressJS" },
    { image: "Mongo", name: "MongoDB" },
    { image: "Postgre", name: "PostgreSQL" },
    { image: "Next", name: "NextJS" },
    { image: "Html", name: "HTML" },
    { image: "Css", name: "CSS" },
    { image: "Mysql", name: "MySQL" },
    { image: "Ejs", name: "EJS" },
    { image: "Java", name: "Java" },
    { image: "Jquery", name: "jQuery" },
    { image: "Code", name: "Code" },
    { image: "Eclipse", name: "Eclipse" },
    { image: "Ssms", name: "SSMS" },
    { image: "Bootstrap", name: "Bootstrap" },
    { image: "Wordpress", name: "Wordpress" },
    { image: "Figma", name: "Figma" },
    { image: "Paradigm", name: "Paradigm" },
    { image: "Mendix", name: "Mendix" },
  ];

  return (
    <div id="skills">
      <div className="skills-heading">Technologies I've been working with</div>
      <div className="skills-container">
        {logos.map((logo) => (
          <div className="skill-item" key={logo.name}>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/${logo.image}.png`}
                className="skill-logo"
                alt={logo.name}
              />
            </div>
            <div style={{ marginTop: "1vw" }}>{logo.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
