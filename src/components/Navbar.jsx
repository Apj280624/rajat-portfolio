import React from "react";
// import { a, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import "../css/navbar.css";
import "../css/home.css";

import { routes, vars } from "../vars.js";

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function MyNavbar(props) {
  return (
    <div>
      <nav className="navbar-custom navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="custom-brand navbar-brand" href={routes.HOME}>
            <p className="brand-name">{vars.brandName}</p>
          </a>

          <div className="" id="navbarNav">
            {/* you can put buttons in two different list item, but the one i used looks good on mobile scrn */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a
                  href="https://www.linkedin.com/in/rajat-jain-224b6424a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-btn1 btn"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2xl" />{" "}
                </a>
                <a
                  href={routes.SIGN_UP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-btn1 btn"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2xl" />{" "}
                </a>
                <a
                  href="https://www.instagram.com/_rajatxo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-btn1 btn"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2xl" />{" "}
                </a>
                <a
                  href="mailto:rajatworkspace89@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-btn1 btn"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="2xl" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MyNavbar;
