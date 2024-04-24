import { useEffect } from "react";
import "./App.css";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Header from "./sections/Header";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  useEffect(() => {
    const container = document.getElementById("container");
    const app = document.getElementById("App");
    if (container && app) {
      container.style.opacity = "1";
      app.style.display = "none";
      setTimeout(function () {
        container.style.opacity = "0";
        app.style.display = "block";
      }, 3600);
    }
  }, []);

  return (
    <div>
      <div id="container">
        <div class="box">
          <div class="loading-title">
            <span class="block"></span>
            <h1>
              System
              <span style={{ color: "white" }}>
                .<span style={{ color: "#e06c75" }}>out</span>.
              </span>
              <span style={{ color: "#61afef" }}>println</span>
              <span style={{ color: "#fa8231" }}>(" Hello World! ");</span>
              <span id="dot" />
            </h1>
          </div>
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
