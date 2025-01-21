// JSX File Example

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/page.scss";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    let currentSectionIndex = 0;
    let isScrolling = false;

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
      }, 1000); // Adjust this time based on animation duration
    };

    const handleWheel = (event) => {
      if (isScrolling) return; // Prevent scrolling during animation
      event.preventDefault(); // Prevent default scrolling behavior

      const direction = event.deltaY > 0 ? 1 : -1; // Determine scroll direction
      const nextIndex = currentSectionIndex + direction;

      if (nextIndex >= 0 && nextIndex < sections.length) {
        currentSectionIndex = nextIndex;
        scrollToSection(nextIndex);
      }
    };

    // Add wheel event listener
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      // Remove wheel event listener on cleanup
      window.removeEventListener("wheel", handleWheel);
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
        <div className="container equipment mt-5">
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
          <div className="row flex-sm-column-reverse flex-xl-row">
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
        <div className="container news justify-content-center justify-content-center   ">
          <h2 className="responsive-font text-center libre-baskerville-regular fs-1">
            News
          </h2>
          <p className="libre-baskerville-regular-italic responsive-font text-center fs-4">
            What’s New in Vietnam Certification
          </p>
          <div className="row flex-column libre-baskerville-regular-italic flex-lg-row justify-content-center align-items-start justify-content-md-start align-items-md-start">
            <div className="col newsbox">- 1</div>
            <div className="col newsbox">- 2</div>
            <div className="col newsbox">- 3</div>
          </div>
        </div>
      </section>
      <section id="contactus">
        <div className="container contactus">
          <div className="row flex-column flex-lg-row justify-content-center align-items-start justify-content-md-start align-items-md-start">
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
              <p className="fontGold">Monday to Friday</p>
              <p>8:00 am to 5:00 pm</p>
              <p className="fontGold">Closed on Saturdays and Sundays</p>
              <h2 className="responsive-font libre-baskerville-regular">
                Follow us online
              </h2>
              <p>www.theone-gma.vn</p>
            </div>
            <div className="col">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.91599516871543!2d106.84432601678863!3d10.837621610068728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317521b70140f657%3A0xec5bf58f0a4b507e!2sMinh%20An%20Homes!5e0!3m2!1szh-TW!2stw!4v1737343810309!5m2!1szh-TW!2stw"
                allowFullScreen="true"
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
