import React, { useEffect } from "react";
import "./AboutMe.css";

function AboutMe() {
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
      handleIntersection(entries, "bounce-aboutme", "bounce-aboutme");
    });

    const hiddenElements = document.querySelectorAll(".aboutme-content");
    const hiddenElements2 = document.querySelectorAll(".aboutme-image");
    const hiddenElements3 = document.querySelectorAll(".aboutme-title");

    hiddenElements.forEach((el) => observer.observe(el));
    hiddenElements2.forEach((el) => observer.observe(el));
    hiddenElements3.forEach((el) => observer2.observe(el));
  }, []);

  return (
    <div id="about-me">
      <div className="aboutme-container">
        <div className="aboutme-image">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/decorations/pic.png`}
              alt="Agnes"
            />
          </div>
        </div>
        <div className="aboutme-content">
          <div id="about-me-title" className="aboutme-title title">
            About Me!
          </div>
          <span className="emoji">👋</span>&nbsp; Hello! I'm Agnes, a passionate{" "}
          <span className="highlight">web developer </span>
          with a knack for crafting seamless and user-friendly digital
          experiences. Committed to continuous learning and collaboration, I
          thrive on driving innovation within teams. I'm dedicated to staying
          ahead of the curve by constantly adapting to and mastering new
          technologies.
          <br />
          <br /> 💻&nbsp; With a robust skill set encompassing{" "}
          <span className="highlight">HTML</span>,
          <span className="highlight"> CSS</span>, and{" "}
          <span className="highlight">JavaScript</span>, I specialize in
          creating visually stunning and intuitive user interfaces that drive
          engagement and enhance user experiences. <br />
          <br /> 🔧&nbsp; Leveraging the power of modern frameworks like{" "}
          <span className="highlight">React</span> and{" "}
          <span className="highlight">Express.js</span>, I develop dynamic and
          scalable web applications that push boundaries and deliver seamless
          user experiences. <br />
          <br /> ⚙️&nbsp; On the server side, I'm well-versed in{" "}
          <span className="highlight">Node.js</span>, utilizing its power to
          develop efficient and high-performing backend solutions. My database
          experiences includes <span className="highlight">MongoDB</span> and{" "}
          <span className="highlight">PostgreSQL</span>, ensuring data integrity
          and optimal performance.
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
