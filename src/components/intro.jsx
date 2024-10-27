import "./stars.css";
import "./intro.css";
import { ReactTyped } from "react-typed";

const Intro = () => {
  return (
    <div id="home" className="intro route ">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-helo mb-4">Hello, I am </h1>
            <strong className="intro-name">Alfina.M</strong>
            <p className="intro-subtitle">
              <span className="text-slider-items"></span>
              <strong className="text-slider">
                <ReactTyped
                  strings={["Full Stack Developer"]}
                  typeSpeed={80}
                  backDelay={1100}
                  backSpeed={30}
                  loop
                />
              </strong>
            </p>
            <p className="pt-3">
              <a
                className="btn btn-primary btn js-scroll px-4"
                href="#work"
                role="button"
              >
                View My Work
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
