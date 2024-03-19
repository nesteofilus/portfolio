import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      image: "1",
      name: "Electronic Certificate of Origin Service",
      desc: "E-Ska, short for Electronic Certificate of Origin, is a digital platform developed by the Ministry of Trade (Kementerian Perdagangan) in Indonesia. E-Ska facilitates the issuance and oversight of certificates of origin, which are essential documents in global trade that confirm the source of exported goods.",
      stack: ["ReactJS", "NodeJS", "PostgreSQL"],
    },
    {
      image: "3",
      name: "Wajan Sunda",
      desc: "Wajan Sunda is a restaurant located in Pasar Minggu, South Jakarta. I was in charge to design and develop website for their restaurant. This website features comprehensive information about their restaurant, including its history, menus, contact details, and more. ",
      stack: ["Wordpress", "HTML", "CSS"],
    },
    {
      image: "4",
      name: "Castale",
      desc: "Castale, short for 'Castle of Tales,' is a full-stack website that I developed with a focus on providing a rich repository of stories, specifically curated for children. It serves as a digital haven where young readers can immerse themselves in a diverse collection of captivating tales.",
      stack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    },
    {
      image: "5",
      name: "Simon Game",
      desc: "In an endeavor to sharpen my cognitive skills, I embarked on a project to develop a captivating memory-enhancement game. This simple game requires the player to memorize an ever-increasing sequence of colors and sounds. The higher the level, the more difficult it gets. This game is called 'Simon Game' which was invented in 1978. ",
      stack: ["HTML", "CSS", "Javascript"],
    },
  ];

  return (
    <div id="projects" className="projects-container">
      <div className="projects-header">Projects</div>

      {projects.map((project, index) => {
        return (
          <div className="project-item" key={index}>
            <img
              src={`${process.env.PUBLIC_URL}/images/${project.image}.png`}
              className="project-image"
            />
            <div className="project-details">
              <div className="project-name">{project.name}</div>
              <p className="project-description">{project.desc}</p>
              <div className="project-stack">
                {project.stack.map((stack, stackIndex) => (
                  <div className="stack-item" key={stackIndex}>
                    {stack}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
