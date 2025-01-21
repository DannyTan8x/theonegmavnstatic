import { useEffect, useState } from "react";
import "../styles/navbar.scss";
import Logo from "../assets/Logo.png";
export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  // Handle active class dynamically
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarSupportedContent = document.getElementById(
      "navbarSupportedContent"
    );

    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        // Remove 'active' class from all nav-links
        navLinks.forEach((item) => item.classList.remove("active"));

        // Add 'active' class to the clicked nav-link
        this.classList.add("active");
        // Collapse the navbar
        if (navbarSupportedContent.classList.contains("show")) {
          navbarSupportedContent.classList.remove("show");
        }
      });
    });

    //change style
    const sections = document.querySelectorAll("section");
    const options = {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []); // Empty array ensures this runs once after the component is mounted

  return (
    <nav className="navbar navbar-expand-lg bg-white bg-opacity-75 sticky-top">
      <div className={`container nav-${activeSection} `}>
        <img height="50px" src={Logo} alt="Logo" />
        <a
          className="navbar-brand d-flex flex-column col libre-baskerville-bold mx-2"
          href="#"
        >
          <span>THE ONE</span> <span>ONE SOLUTION</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse  row`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-around">
            <li className="nav-item ">
              <a
                className={`nav-link ${
                  activeSection === "home" || activeSection === "equipment"
                    ? "active"
                    : ""
                }`}
                aria-current="page"
                href="#home"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "service" ? "active" : ""
                }`}
                href="#service"
              >
                SERVICE
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "news" ? "active" : ""
                }`}
                href="#news"
              >
                NEWS
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "contactus" ? "active" : ""
                }`}
                href="#contactus"
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
