import React from "react";

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
    <div
      id="skills"
      style={{
        backgroundColor: "#1B2234",
        // backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/36.png)`,
        // backgroundSize: "cover",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "2.5vw",
          marginBottom: "5%",
          backgroundColor: "#131929",
          // backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/e.png)`,
          backgroundSize: "cover",
          color: "#D672B4",
          padding: "3% 10% 3%",
        }}
      >
        Technologies I've been working with
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "0 10% 2%",
          gap: "3vw",
        }}
      >
        {logos.map((logo) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/58.png)`,
                backgroundSize: "cover",
                width: "10rem",
                height: "10rem",
              }}
            >
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/${logo.image}.png`}
                  style={{ width: "4.5vw", paddingTop: "16%" }}
                ></img>
              </div>
              <div style={{ marginTop: "10px" }}>{logo.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
