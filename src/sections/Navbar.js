import React from "react";
import "./Navbar.css";

function Navbar() {
  const scrollFunction = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1yQOQU0OYxhsyGEhzUhpahTwLkOqeX_U6/view?usp=share_link"
    );
  };

  const navbarItems = [
    { id: "about-me", text: "About Me" },
    { id: "skills", text: "Skills" },
    { id: "projects", text: "Projects" },
    { id: "contact", text: "Contact" },
    { id: "resume", text: "Resume", action: openResume },
  ];

  return (
    <div className="navbar-container">
      <div className="navbar-items">
        {navbarItems.map((item, index) => (
          <div
            key={index}
            className={`navbar-item ${item.id === "resume" ? "resume" : ""}`}
            onClick={item.action ? item.action : () => scrollFunction(item.id)}
          >
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
