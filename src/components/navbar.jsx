import { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [navCollapsed, setNavCollapsed] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      document
        .querySelector(".navbar-expand-md")
        .classList.add("navbar-reduce");
      document
        .querySelector(".navbar-expand-md")
        .classList.remove("navbar-trans");
    } else {
      document.querySelector(".navbar-expand-md").classList.add("navbar-trans");
      document
        .querySelector(".navbar-expand-md")
        .classList.remove("navbar-reduce");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setNavCollapsed(!navCollapsed);
  };

  const closeNavbarOnClick = () => {
    setNavCollapsed(true);
  };

  return (
    <nav
      className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll" href="#page-top">
          <span></span>
        </a>
        <button
          className={`navbar-toggler ${navCollapsed ? "collapsed" : ""}`}
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarDefault"
          aria-expanded={!navCollapsed}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className={`navbar-collapse collapse justify-content-end ${
            navCollapsed ? "" : "show"
          }`}
          id="navbarDefault"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link js-scroll"
                href="#home"
                onClick={closeNavbarOnClick}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll"
                href="#about"
                onClick={closeNavbarOnClick}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll"
                href="#skills"
                onClick={closeNavbarOnClick}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll"
                href="#work"
                onClick={closeNavbarOnClick}
              >
                Work
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll"
                href="#contact"
                onClick={closeNavbarOnClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
