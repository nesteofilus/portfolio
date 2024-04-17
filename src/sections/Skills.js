import React, { useEffect } from "react";
import "./Skills.css";

function Skills() {
  useEffect(() => {
    const handleIntersection = (entries, classToAdd, classToRemove) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classToAdd);
        } else {
          entry.target.classList.remove(classToRemove);
        }
      });
    };

    const observer = new IntersectionObserver((entries) => {
      handleIntersection(entries, "bounce", "bounce");
    });

    const observer2 = new IntersectionObserver((entries) => {
      handleIntersection(entries, "pop", "pop");
    });

    const observeElements = (elements, observerInstance) => {
      elements.forEach((el) => observerInstance.observe(el));
    };

    const hiddenElements = document.querySelectorAll(".skills-title");
    const hiddenElements2 = document.querySelectorAll(".item");

    observeElements(hiddenElements, observer);
    observeElements(hiddenElements2, observer2);

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      hiddenElements2.forEach((el) => observer2.unobserve(el));
      observer.disconnect();
      observer2.disconnect();
    };
  }, []);

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
    { image: "Postman", name: "Postman" },
    { image: "Git", name: "Git" },
    { image: "Code", name: "Code" },
    { image: "Eclipse", name: "Eclipse" },
    { image: "Ssms", name: "SSMS" },
    { image: "Bootstrap", name: "Bootstrap" },
    { image: "Wordpress", name: "Wordpress" },
    { image: "Figma", name: "Figma" },
    { image: "Paradigm", name: "Paradigm" },
    { image: "Mendix", name: "Mendix" },
  ];

  const setAnimationOrder = (i, name) => {
    const item = document.getElementById(name);
    item && item.style.setProperty("--animation-order", i + 1);
  };

  return (
    <div id="skills">
      <div className="skills-heading">
        <div className="skills-title title">
          Technologies I've been working with
        </div>
      </div>
      <div className="skills-wrapper">
        <div className="skills-container">
          {logos.map((logo, i) => (
            <div className="item" id={logo.name} key={logo.name}>
              {setAnimationOrder(i, logo.name)}
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/${logo.image}.png`}
                  className="skill-logo"
                  alt={logo.name}
                />
              </div>
              <div style={{ marginTop: "0.5vw" }}>{logo.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
