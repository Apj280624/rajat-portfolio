import React from "react";
import ContactInput from "./ContactInput";
import "../css/footer.css";

const Footer = () => {
  return (
    <div>
      <hr className="footer-hr" />
      <div className="footer-div">
        {/* <ContactInput placeholder="mail" /> */}
        <h5 style={{ fontFamily: "var(--ff2)", color: "grey" }}>
          Get in touch
        </h5>
        <a
          href="mailto:rajatworkspace89@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-email"
        >
          rajatworkspace89@gmail.com{" "}
        </a>

        <p
          style={{ fontFamily: "var(--ff2)", color: "grey", marginTop: "4rem" }}
        >
          © Rajat Jain
        </p>
      </div>
    </div>
  );
};

export default Footer;
