import React from "react";
import "./Header.css";

function Header() {
  return (
    <div
      id="header"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          color: "#CED8F8",
          fontSize: "2.5vw",
          fontWeight: "400",
          lineHeight: "2",
        }}
      >
        <div style={{ marginBottom: "3%" }}>
          I'm&nbsp;
          <span
            style={{ color: "#D672B4", fontWeight: "600", fontSize: "3vw" }}
          >
            Agnes Agatha Chang
          </span>
          , <br /> a web developer.
        </div>
        <div>
          <button>Get to know me better</button>
        </div>
      </div>

      <img
        src={`${process.env.PUBLIC_URL}/images/icons/21.png`}
        style={{
          position: "absolute",
          right: "0",
          bottom: "-25%",
          height: "47vw",
          zIndex: "1",
        }}
      />
    </div>
  );
}

export default Header;
