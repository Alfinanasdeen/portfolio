import React from "react";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import "lightbox2/dist/css/lightbox.min.css";

// import components
import Intro from "./components/intro.jsx";
import Skills from "./components/Skills.jsx";
import Navbar from "./components/navbar.jsx";
import About from "./components/about.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import Portfolio from "./components/portfolio.jsx";
import Contact from "./components/contact.jsx";

function App() {
  return (
    <React.Fragment>
      <Intro />
      <About />
      <Skills />
      <WorkExperience />
      <Portfolio />
      <Contact />
      <Navbar />
    </React.Fragment>
  );
}

export default App;
