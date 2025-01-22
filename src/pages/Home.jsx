// JSX File Example

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/page.scss";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let currentSectionIndex = 0;
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
          }
        } else {
          // Swipe down
          if (currentSectionIndex > 0) {
            currentSectionIndex -= 1;
            scrollToSection(currentSectionIndex);
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

  return (
    <>
      <Navbar />
      <section id="home">
        <div className="container home">
          <h2 className="libre-baskerville-regular responsive-font">
            Product Certification <br />
            Expert
          </h2>
          <p className="responsive-font">
            We provide one-stop professional services in the field of product
            compliance, bringing your products to market in Vietnam and
            Southeast Asia.
          </p>
          <a className="btn" href="#equipment">
            LEARN MORE
          </a>
        </div>
      </section>
      <section id="equipment">
        <div className="container equipment ">
          <h2 className="libre-baskerville-regular m-3 responsive-font">
            Equipment Required to Comply
          </h2>
          <div className="row flex-column flex-md-row my-5">
            <div className="col">
              <ul>
                <li>
                  Mobile phones, including feature phones and smartphones with
                  2G, 3G, 4G LTE, 5G, WLAN, and NFC.
                </li>
                <li>
                  WLAN WiFi transmitters, such as access points, routers,
                  laptops, tablets, etc.
                </li>
                <li>
                  2G, 3G, 4G LTE, and 5G NR terminals, RFID-enabled scanners,
                  and RFID readers.
                </li>
                <li>
                  Smart TVs, WiFi-enabled set-top boxes, and wireless
                  receiver-enabled translators.
                </li>
                <li>
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
      <section id="service">
        <div className="container service">
          <div className="row flex-column-reverse  flex-md-row">
            <div className="col">
              <img
                className="img-fluid"
                src="assets/services.jpg"
                alt="Services"
              />
            </div>
            <div className="col">
              <h2 className="libre-baskerville-regular responsive-font">
                Our Services
              </h2>
              <p className="responsive-font">
                We provide one-stop professional services in the field of
                product compliance, making product certification faster and
                simpler.
              </p>
              <ul className="libre-baskerville-regular">
                <li>
                  <span className="serviceicon"></span>EMC /Safety/RF/Energy
                  efficiency
                </li>
                <li>In Country Test / MRA</li>
                <li>Local Representative</li>
                <li>And More.</li>
              </ul>
              <a className="btn" href="#contactus">
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="news">
        <div className="container news justify-content-center ">
          <h2 className="responsive-font text-center libre-baskerville-regular fs-1 ">
            News
          </h2>
          <p className="libre-baskerville-regular-italic responsive-font text-center fs-4">
            What’s New in Vietnam Certification
          </p>
          <div className="row flex-column flex-md-row libre-baskerville-regular-italic newscontainer ">
            <div className="col newsbox">- 1</div>
            <div className="col newsbox">- 2</div>
            <div className="col newsbox">- 3</div>
          </div>
        </div>
      </section>
      <section id="contactus">
        <div className="container contactus">
          <div className="row flex-column flex-md-row pt-5">
            <div className="col">
              <h2 className="responsive-font libre-baskerville-regular">
                Contact Us
              </h2>
              <ul className="fontGold">
                <li>
                  <i className="material-icons">location_on</i>:
                </li>
                <li>
                  <i className="material-icons">phone</i>:
                </li>
                <li>
                  <i className="material-icons">email</i>:
                </li>
              </ul>
              <h2 className="responsive-font libre-baskerville-regular">
                Office Hours
              </h2>
              <p className="fontGold responsive-font">Monday to Friday</p>
              <p>8:00 am to 5:00 pm</p>
              <p className="fontGold responsive-font">
                Closed on Saturdays and Sundays
              </p>
              <h2 className="responsive-font libre-baskerville-regular">
                Follow us online
              </h2>
              <p>www.theone-gma.vn</p>
            </div>
            <div className="col atio ratio-4x3 ">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.91599516871543!2d106.84432601678863!3d10.837621610068728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317521b70140f657%3A0xec5bf58f0a4b507e!2sMinh%20An%20Homes!5e0!3m2!1szh-TW!2stw!4v1737343810309!5m2!1szh-TW!2stw"
                allowfullscreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
