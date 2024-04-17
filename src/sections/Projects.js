import React, { useEffect } from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function Projects() {
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
      handleIntersection(entries, "show", "show");
    });
    const observer2 = new IntersectionObserver((entries) => {
      handleIntersection(entries, "bounce", "bounce");
    });

    const hiddenElements = document.querySelectorAll(".project-item");
    const hiddenElements2 = document.querySelectorAll(".projects-title");

    hiddenElements.forEach((el) => observer.observe(el));
    hiddenElements2.forEach((el) => observer2.observe(el));
  }, []);

  const projects = [
    {
      image: "1",
      name: "Electronic Certificate of Origin Service",
      desc: "E-Ska, short for Electronic Certificate of Origin Service, is a digital platform developed by the Ministry of Trade (Kementerian Perdagangan) in Indonesia. E-Ska facilitates the issuance and oversight of certificates of origin, which are essential documents in global trade that confirm the source of exported goods.",
      stack: ["ReactJS", "NodeJS", "PostgreSQL"],
      link: "http://ska.kemendag.go.id",
    },
    {
      image: "2",
      name: "Mizuee",
      desc: "Mizuee, a distinguished brand operating under PT. Bersama Ong Sejahtera, stands out as a F&B store specializing in Japanese-styled beverages and snacks. I was tasked with the responsibility of designing and developing their website from scratch.",
      stack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
      link: "",
    },
    {
      image: "3",
      name: "Wajan Sunda",
      desc: "Wajan Sunda is a restaurant located in Pasar Minggu, South Jakarta. I was in charge to design and develop website for their restaurant. This website features comprehensive information about their restaurant, including its history, menus, contact details, and more. ",
      stack: ["Wordpress", "HTML", "CSS"],
      link: "http://wajansunda.com",
    },
    {
      image: "4",
      name: "Castale",
      desc: "Castale, short for 'Castle of Tales,' is a full-stack website that I developed with a focus on providing a rich repository of stories, specifically curated for children. It serves as a digital haven where young readers can immerse themselves in a diverse collection of captivating tales.",
      stack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
      link: "http://bit.ly/castale",
    },
    {
      image: "5",
      name: "Simon Game",
      desc: "In an endeavor to sharpen my cognitive skills, I embarked on a project to develop a captivating memory-enhancement game. This simple game requires the player to memorize an ever-increasing sequence of colors and sounds. The higher the level, the more difficult it gets. This game is called 'Simon Game' which was invented in 1978. ",
      stack: ["HTML", "CSS", "Javascript"],
      link: "https://nesteofilus.github.io/simongame/",
    },
  ];

  const visitLink = (link) => {
    window.open(link);
  };

  return (
    <div id="projects">
      <div className="projects-title title">Projects</div>

      {projects.map((project, index) => {
        return (
          <div className={`project-item ${index % 2 === 0 ? "odd" : "even"}`}>
            <div>
              <img
                className="project-image"
                src={`${process.env.PUBLIC_URL}/images/${project.image}.png`}
                alt="Project"
                style={{
                  height: "30vw",
                  display: "flex",
                  float: index % 2 === 0 ? "left" : "right",
                  width: "50%",
                  cursor: "pointer",
                }}
                onClick={() => visitLink(project.link)}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  float: index % 2 === 0 ? "left" : "right",
                  padding: "0 40px",
                  boxSizing: "border-box",
                  width: "50%",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "inline-flex", position: "relative" }}>
                  <div
                    onClick={() => visitLink(project.link)}
                    className="project-name"
                    style={{
                      height: "100%",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <span id="name"> {project.name}</span>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      style={{
                        color: "#93da9e",
                        fontSize: "1.5vw",
                        marginLeft: "0.8vw",
                      }}
                    />
                  </div>
                </div>
                <p className="project-description">{project.desc}</p>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  {project.stack.map((stack) => {
                    return <div className="stack-item">{stack}</div>;
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
