import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

import listening from "../assets/images/listening-skills.jpg";

const SkillTab = (props) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "var(--dark-purple)",
          padding: "0 0 2rem 0",
          borderRadius: "1rem",
          marginTop: "13px",
          marginBottom: "13px",
          // cursor: "pointer",
        }}
      >
        <div
          style={{
            color: "white",
            marginBottom: "0.8rem",
            // borderRadius: "8px",
          }}
        >
          {/* <FontAwesomeIcon icon={faPeopleGroup} size="2xl" /> */}
          <img src={props.imgSrc} className="skill-tab-img" alt="skill"></img>
        </div>
        <a
          style={{
            color: "white",
            fontFamily: "var(--ff2)",
            fontSize: "1.3rem",
            textDecoration: "none",
          }}
          href={`#${props.text}`}
        >
          {props.text}
        </a>
      </div>
    </div>
  );
};

export default SkillTab;
