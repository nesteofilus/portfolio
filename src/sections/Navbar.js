import React from "react";
import "./Navbar.css";

function Navbar() {
  const scrollFunction = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar-container">
      <div className="navbar-items">
        <div
          className="navbar-item"
          onClick={() => scrollFunction("about-me-title")}
        >
          About Me
        </div>
        <div className="navbar-item" onClick={() => scrollFunction("skills")}>
          Skills
        </div>
        <div className="navbar-item" onClick={() => scrollFunction("projects")}>
          Projects
        </div>
        <div className="navbar-item" onClick={() => scrollFunction("contact")}>
          Contact
        </div>
      </div>
    </div>
  );
}

export default Navbar;
