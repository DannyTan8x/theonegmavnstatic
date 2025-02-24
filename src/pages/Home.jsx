// JSX File Example

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useScroll } from "../context/ScrollContext"; // Import scroll context

export default function Home() {
  const { sectionIndex, setSectionIndex, setActiveSection } = useScroll();
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    let currentSectionIndex = sectionIndex;
    let isScrolling = false;

    // Variables for touch control
    let startY = 0;
    let endY = 0;

    const scrollToSection = (index) => {
      if (index < 0 || index >= sections.length) return; // Out of bounds check
      isScrolling = true;

      const section = sections[index];
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
      setActiveSection(section.id); // Update global state
      // Reset isScrolling after animation duration
      setTimeout(() => {
        isScrolling = false;
      }, 500); // Adjust this time based on animation duration
    };

    // Mouse wheel handler
    let wheelTimeout;
    const handleWheel = (event) => {
      if (isScrolling) return;

      clearTimeout(wheelTimeout); // Reset debounce timer
      wheelTimeout = setTimeout(() => {
        event.preventDefault();

        const direction = event.deltaY > 0 ? 1 : -1;
        const currentScroll = window.scrollY;

        const currentSection = sections[currentSectionIndex];
        console.log("wheelSection:", currentSection);
        const sectionTop = currentSection.offsetTop;
        const sectionBottom = sectionTop + currentSection.offsetHeight;

        if (
          (direction === 1 &&
            currentScroll + window.innerHeight >= sectionBottom) ||
          (direction === -1 && currentScroll <= sectionTop)
        ) {
          const nextIndex = currentSectionIndex + direction;
          if (nextIndex >= 0 && nextIndex < sections.length) {
            currentSectionIndex = nextIndex;
            setSectionIndex(nextIndex);
            scrollToSection(nextIndex);
          }
        }
      }, 100); // Debounce delay
    };

    // Touch start handler
    const handleTouchStart = (event) => {
      startY = event.touches[0].clientY; // Get the initial touch Y position
    };

    // Touch move handler
    const handleTouchMove = (event) => {
      endY = event.touches[0].clientY; // Update the touch Y position as the finger moves
    };

    // Touch end handler
    const handleTouchEnd = () => {
      if (isScrolling) return; // Prevent multiple scrolls during animation

      const direction = startY - endY; // Calculate the swipe direction
      if (Math.abs(direction) > 50) {
        // Only trigger if the swipe is significant
        if (direction > 0) {
          // Swipe up
          if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex += 1;
            scrollToSection(currentSectionIndex);
            setSectionIndex(sectionIndex);
          }
        } else {
          // Swipe down
          if (currentSectionIndex > 0) {
            currentSectionIndex -= 1;
            setSectionIndex(currentSectionIndex);
            scrollToSection(sectionIndex);
          }
        }
      }
    };

    // Add event listeners for both mouse and touch controls
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      // Cleanup event listeners
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="homepage">
      <section
        id="home"
        ref={(el) => (sectionRefs.current[0] = el)}
        className="hidden"
      >
        <div className="container home">
          <h2 className="Inter-bold responsive-font fs-1 ">
            Product Certification <br />
            Expert
          </h2>
          <p className="responsive-font">
            We provide one-stop professional services in the field of product
            compliance, bringing your products to market in Vietnam and
            Southeast Asia.
          </p>
          <a className="btn" href="#featured_service">
            LEARN MORE
          </a>
        </div>
      </section>
      <section
        id="featured_service"
        ref={(el) => (sectionRefs.current[1] = el)}
        className="hidden"
      >
        <div className="container featured_service ">
          <h2 className=" m-3 responsive-font fs-1">
            Featured service —— MIC ICT type approval certificate
          </h2>
          <div className="row flex-column flex-md-row my-md-2 responsive-font">
            <div className="col d-flex justify-content-around">
              <div className="d-flex flex-md-column justify-content-around align-items-center ">
                <img
                  className="img-thumbnail m-2"
                  src="assets/ICT.png"
                  alt="ICT with code"
                  style={{
                    maxHeight: "30vh",
                    width: `${Math.min(
                      window.innerHeight * 0.3,
                      window.innerWidth * 0.3
                    )}px`,
                  }}
                />
                <img
                  className="img-thumbnail m-2"
                  src="assets/ICT2.png"
                  alt="ICT"
                  style={{
                    maxHeight: "30vh",
                    width: `${Math.min(
                      window.innerHeight * 0.3,
                      window.innerWidth * 0.3
                    )}px`,
                  }}
                />
              </div>
            </div>
            <div className="col d-flex flex-column align-items-end ">
              <ul className="fs-1">
                <li className="m-md-3">
                  To enter Vietnam’s market, ICT manufacturers must obtain
                  <br />
                  <span className="text-danger font-weight-bold">
                    -Type Approval Certificate (TAC);{" "}
                  </span>
                  and/or
                  <br />
                  <span className="text-danger font-weight-bold">
                    -Declaration of Conformity (DoC)
                  </span>
                </li>
                <li className="m-md-3">
                  TAC is issued by VNTA based on MIC regulations, while DoC is
                  required for import clearance. Certification follows different
                  systems, including factory audits and shipment-based
                  approvals.
                </li>
                <li className="m-md-3">
                  After TAC and DoC, products need to be put on ICT Mark (ICT
                  label) as shown on the left also.
                </li>
              </ul>
              <div className="d-flex   position-absolute bottom-0 end-0">
                <span>Want to know more about the process? ➡️</span>
                <Link className="btn position-relative" to="/contact">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="equipment"
        ref={(el) => (sectionRefs.current[2] = el)}
        className="hidden"
      >
        <div className="container equipment ">
          <h2 className=" m-3 responsive-font fs-1">
            Equipment Required to Comply
          </h2>
          <div className="row flex-column flex-md-row my-5">
            <div className="col">
              <ul>
                <li className="m-md-3">
                  Mobile phones, including feature phones and smartphones with
                  2G, 3G, 4G LTE, 5G, WLAN, and NFC.
                </li>
                <li className="m-md-3">
                  WLAN WiFi transmitters, such as access points, routers,
                  laptops, tablets, etc.
                </li>
                <li className="m-md-3">
                  2G, 3G, 4G LTE, and 5G NR terminals, RFID-enabled scanners,
                  and RFID readers.
                </li>
                <li className="m-md-3">
                  Smart TVs, WiFi-enabled set-top boxes, and wireless
                  receiver-enabled translators.
                </li>
                <li className="m-md-3">
                  And more. Get in touch with us to understand your products.
                </li>
              </ul>
              <a className="btn" href="#contactus">
                GET IN TOUCH
              </a>
            </div>
            <div className="col">
              <img
                className="img-fluid"
                src="assets/equipment.jpg"
                alt="Equipment required"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="service"
        ref={(el) => (sectionRefs.current[3] = el)}
        className="hidden"
      >
        <div className="container service">
          <div className="row flex-column-reverse  flex-md-row">
            <div className="col">
              <div className="d-flex justify-content-center">
                <img
                  className="img-fluid"
                  src="assets/services.jpg"
                  alt="Services"
                />
              </div>
            </div>
            <div className="col">
              <h2 className=" responsive-font fs-1">Our Services</h2>
              <p className="responsive-font">
                We provide one-stop professional services in the field of
                product compliance, making product certification faster and
                simpler.
              </p>
              <ul className="">
                <li>
                  <span className="serviceicon"></span>EMC /Safety/RF/Energy
                  efficiency
                </li>
                <li>In Country Test / MRA</li>
                <li>Local Representative</li>
                <li>And More.</li>
              </ul>
              <div className="d-flex flex-column justify-content-center align-items-center position-absolute bottom-0 end-0">
                <p>over 200 countries</p>
                <Link
                  className="btn position-relative text-center"
                  to="/service-couintries"
                >
                  Our service countries
                </Link>
                {/* <a className="btn text-center" href="#contactus">
                  Our service countries
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="news"
        ref={(el) => (sectionRefs.current[4] = el)}
        className="hidden"
      >
        <div className="container news justify-content-center ">
          <h2 className="responsive-font text-center  fs-1 ">News</h2>
          <p className="-italic responsive-font text-center fs-4">
            What’s New in Vietnam Certification
          </p>
          <div className=" newscontainer">
            <div className="newsbox">
              <p>- 1</p>
              <ul className="text-white">
                <li>
                  MIC has issued Circular No. 04/2023 in which the new QCVN
                  117:2023/BTTTT.
                </li>
                <li>For more details, please visit:</li>
                <li>
                  <a href="https://www.glodacert.co/post/vietnam-mic-releases-new-notice-related-to-qcvn-117-2023-btttt-2024-jan-4">
                    Vietnam MIC releases new notice related to QCVN
                    117:2023/BTTTT (2024-Jan.-4) (glodacert.co){" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className=" newsbox">
              <p>- 2</p>
              <ul className="text-white">
                <li>
                  Vietnam enforces ITC- Safety in 2024 and MEPS in 2025
                  (2023-Dec.-14)
                </li>
                <li>For more details, please visit:</li>
                <li>
                  <a href="https://www.glodacert.co/post/vietnam-enforces-itc-safety-in-2024-and-meps-in-2025-2023-dec-14">
                    Vietnam-enforces-itc-safety-in-2024-and-meps-in-2025-2023-dec-14
                  </a>
                </li>
              </ul>
            </div>
            <div className=" newsbox">
              <p>- 3</p>
              <ul className="text-white">
                <li>
                  MIC has introduced Circular 20/2023/TT-BTTTT and the
                  corresponding National Technical Regulation (QCVN
                  117:2023/BTTTT)
                </li>
                <li>For more details, please visit:</li>
                <li>
                  <a href="https://www.glodacert.co/post/vietnam-circular-20-2023-tt-btttt">
                    vietnam-circular-20-2023-tt-btttt
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
