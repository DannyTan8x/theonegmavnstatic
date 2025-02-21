import { Link } from "react-router-dom";

const Service = () => {
  return (
    <section id="service-couintries">
      <div className="container service-couintries text-white">
        <h2 className="text-center responsive-font fs-1 my-5">
          Our Service Countries
        </h2>
        <div className="row flex-column-reverse  flex-md-row">
          <div className="col flex-1">
            <img
              className="img-fluid rounded-5"
              src="assets/countries.jpg"
              alt="Services"
            />
          </div>
          <div className="col flex-1 ">
            <div className="d-flex">
              <ul className="">
                <strong className="fs-3">Asia</strong>
                <li>Taiwan</li>
                <li>Japan</li>
                <li>China</li>
                <li>India</li>
                <li>VIETNAM</li>
                <li>Malaysia</li>
                <li>Thailand</li>
                <li>Cambodia</li>

                <li className="text-danger">58+ countries</li>
              </ul>
              <ul className="">
                <strong className="fs-3">Americas</strong>
                <li>United States</li>
                <li>Canada</li>
                <li>Brazil</li>
                <li>Argentina</li>

                <li className="text-danger">24+ countries</li>
              </ul>
              <ul className="">
                <strong className="fs-3">Europe</strong>
                <li>France</li>
                <li>United Kingdom</li>
                <li>Germany</li>
                <li>Finland</li>
                <li>Spain</li>
                <li>Belgium</li>

                <li className="text-danger">51+ countries</li>
              </ul>
            </div>
            <hr className="text-black fs-5"></hr>
            <div className="d-flex flex-column  align-items-end mb-5">
              <p>
                And Middle-East, Oceana, Afica,{" "}
                <span className="text-danger">200+countries. </span>
              </p>
            </div>
            <Link className="btn end-0" to="/contact">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
