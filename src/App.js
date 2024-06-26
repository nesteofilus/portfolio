import { useEffect } from "react";
import "./App.css";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Header from "./sections/Header";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import "./styles/style.css";

function App() {
  useEffect(() => {
    const container = document.getElementById("container");
    const app = document.getElementById("App");
    const hello = document.getElementById("hello");
    if (container && app) {
      setTimeout(function () {
        hello.style.opacity = "1";
      }, 200);
      setTimeout(function () {
        app.style.display = "block";
        container.style.opacity = "0";
        container.style.zIndex = "10";
      }, 2200);
      setTimeout(function () {
        container.style.zIndex = "-1";
      }, 2250);
    }
  }, []);

  return (
    <div>
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        id="container"
      >
        <div className="container">
          <div className="moon">
            <h1 id="hello">
              <span>H</span>
              <span>e</span>
              <span>l</span>
              <span>l</span>
              <span>o</span>
              <span style={{ color: "#d672b4" }}>!</span>
            </h1>
            <div className="star-1"></div>
            <div className="star-2"></div>
          </div>
        </div>
        <div id="star">
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
        </div>
      </div>

      <div id="App">
        <Navbar />
        <Header />
        <AboutMe />
        <Skills />
        <div id="wrapper">
          <Projects />
          <Contact />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
