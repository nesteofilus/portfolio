import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <div id="header" className="header-container">
        <div className="header-content">
          <div className="intro-text">
            I'm&nbsp;
            <span className="highlighted-text">Agnes Agatha Chang</span>
            , <br /> a web developer.
          </div>
          <div>
            <button
              onClick={() => {
                const element = document.getElementById("about-me-title");
                element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get to know me better
            </button>
          </div>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/images/decorations/astronaut.png`}
          className="header-image"
        />
      </div>
    </div>
  );
}

export default Header;
