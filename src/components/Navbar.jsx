import { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom"; // Use NavLink for active state management

import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const scrollToSection = useCallback((targetId) => {
    console.log(targetId);
    setActiveSection(targetId);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);
  // Handle active class dynamically using IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Trigger when 50% of the section is visible
    };
    console.log("Scrolling");
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
  }, [location]);
  // Smooth scrolling for sections

  useEffect(() => {
    //Ensure smooth scroll works when navigating via links
    if (location.hash) {
      const targetSection = document.getElementById(location.hash.slice(1)); // remove "#" from hash.
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [location]);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top p-md-4">
      <div className={`container nav-${activeSection} mt-md-5 `}>
        <img height="50px" src={Logo} alt="Logo" />
        <a
          className="navbar-brand d-flex flex-column col libre-baskerville-bold mx-2"
          href="#"
        >
          <span className="fs-3">THE ONE</span>{" "}
          <span className="font-italic fs-6">ONE SOLUTION</span>
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
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeSection === "home" ||
                  activeSection === "featured_service" ||
                  activeSection === "equipment"
                    ? "active"
                    : ""
                }`}
                // activeclassname="active"
                // exact
                to="/"
                onClick={() => scrollToSection("home")}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeSection === "service" ||
                  activeSection === "service-couintries"
                    ? "active"
                    : ""
                }`}
                // activeclassname="active"
                // exact
                to="/#service"
                onClick={() => scrollToSection("service")}
              >
                SERVICE
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeSection === "news" ? "active" : ""
                }`}
                // activeclassname="active"
                // exact
                to="/#news"
                onClick={() => scrollToSection("news")}
              >
                NEWS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeSection === "contactus" ? "active" : ""
                }`}
                to="/contact"
                // onClick={() => scrollToSection("contactus")}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
