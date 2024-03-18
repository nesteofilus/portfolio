import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div id="about-me" style={{ position: "relative" }}>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "50%",
            position: "relative",
            zIndex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/icons/ag2.png`}
              style={{
                width: "78%",
                transform: "rotate(5deg)",
              }}
            />
          </div>
        </div>
        <div
          style={{
            lineHeight: "2",
            width: "55%",
            zIndex: "10",
            color: "#CED8F8",
            position: "relative",
            zIndex: "1",
            fontSize: "1rem",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "3vw",
              marginBottom: "5%",
              position: "relative",
              zIndex: "1",
              color: "#D672B4",
            }}
          >
            About Me!
          </div>
          <span className="emoji">👋</span> Hello! I'm Agnes, a passionate web
          developer with a knack for crafting seamless and user-friendly digital
          experiences.
          <br />
          <br /> 💻 With a robust skill set encompassing{" "}
          <span className="highlight">HTML</span>,
          <span className="highlight"> CSS</span>, and{" "}
          <span className="highlight">JavaScript</span>, I specialize in
          creating visually stunning and intuitive user interfaces that drive
          engagement and enhance user experiences. <br />
          <br /> 🔧 Leveraging the power of modern frameworks like{" "}
          <span className="highlight">React</span> and{" "}
          <span className="highlight">Express.js</span>, I develop dynamic and
          scalable web applications that push boundaries and deliver seamless
          user experiences. <br />
          <br /> ⚙️ On the server side, I'm well-versed in{" "}
          <span className="highlight">Node.js</span>, utilizing its power to
          develop efficient and high-performing backend solutions. My database
          expertise includes <span className="highlight">MongoDB</span> and{" "}
          <span className="highlight">PostgreSQL</span>, ensuring data integrity
          and optimal performance.
        </div>
        <div></div>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/images/icons/tes.png`}
        style={{
          position: "absolute",
          left: "0",
          top: "-25%",
          width: "35vw",
          zIndex: "0",
        }}
      />
    </div>
  );
}

export default AboutMe;
