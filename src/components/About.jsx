import React from "react";
import "../css/about.css";

import rajatFull from "../assets/images/rajat-square.png";

const About = () => {
  return (
    <div id="About">
      <div className="margin-div"></div>
      <div className="sec-div">
        <h2 className="heading">About me</h2>
        <div className="row">
          <div className="col-lg-3 col-md-4 about-img-div">
            <img
              src={rajatFull}
              className="rajat-about-img"
              alt="rajat-full"
            ></img>
          </div>
          <div className="col-lg-9 col-md-8 about-about-div">
            <h4 style={{ margin: "0 0 1rem 0" }}>Hi, I am Rajat!</h4>
            <p style={{ margin: "0.6rem 0 0 0" }}>
              I am an MBA candidate specializing in Marketing/Finance at SIRT
              (Barkatullah University Bhopal, 2022 - Present).
            </p>
            <p style={{ margin: "0.8rem 0 0 0" }}>
              I am a Bachelor of Commerce - BCOM (HONS) from Career College
              (Barkatullah University Bhopal, 2019 - 2022).
            </p>
            <p style={{ margin: "0.8rem 0 0 0" }}>
              I possess non-technical skills in negotiating and building
              customer relationships and I absolutely love connecting with new
              people.
            </p>
            <p style={{ margin: "0.8rem 0 0 0" }}>
              In my free time, I explore the world of real estate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
