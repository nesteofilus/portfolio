import "./App.css";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Header from "./sections/Header";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
