import React from "react";
import SkillTab from "./SkillTab";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import listening from "../assets/images/listening-skills.jpg";
import communication from "../assets/images/communication.png";
import handling from "../assets/images/handling.jpg";
import convince from "../assets/images/convincing.png";
import negotiation from "../assets/images/negotiation.png";
import relationship from "../assets/images/relationship.png";

import msOffice from "../assets/images/ms-office.jpg";
import computer from "../assets/images/computer.jpg";
import social from "../assets/images/social.jpg";
import adobe from "../assets/images/adobe.jpg";
import video from "../assets/images/video.jpg";

// const skillIcons = [
//   faInstagram,
//   faPeopleGroup,
//   faInstagram,
//   faPeopleGroup,
//   faPeopleGroup,
// ];

const Skills = () => {
  const skillNames = [
    "Listening skills",
    "Effective communication",
    "Customer handling",
    "Art of convincing",
    "Negotiation",
    "Customer Relationship",
  ];

  const skillsImages = [
    listening,
    communication,
    handling,
    convince,
    negotiation,
    relationship,
  ];

  const techSkillNames = [
    "MS Office",
    "Computer proficiency",
    "Social media marketing",
    "Adobe products (BASIC)",
    "Layers editing (video)",
  ];

  const techSkillImages = [msOffice, computer, social, adobe, video];

  return (
    <>
      <div id="Non tech skills">
        <h2 className="heading">Skills</h2>

        <div className="row">
          {skillNames.map((skillName, index) => {
            return (
              <div className="col-lg-4 col-sm-6">
                <SkillTab text={skillName} imgSrc={skillsImages[index]} />
              </div>
            );
          })}
        </div>
      </div>

      <div id="Technical skills">
        {" "}
        <h2 className="heading">Technical Skills</h2>
        <div className="row">
          {techSkillNames.map((skillName, index) => {
            return (
              <div className="col-lg-6 col-sm-6">
                <SkillTab text={skillName} imgSrc={techSkillImages[index]} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;

/*
<div className="col-lg-4 col-sm-6">
          <SkillTab text="Listening skills" icon={faInstagram} />
        </div>
        <div className="col-lg-4 col-sm-6">
          <SkillTab text="Effective communication" icon={faPeopleGroup} />
        </div>
        <div className="col-lg-4 col-sm-6">
          <SkillTab text="Customer handling" icon={faInstagram} />
        </div>
        <div className="col-lg-4 col-sm-6">
          <SkillTab text="Art of convincing" icon={faPeopleGroup} />
        </div>
        <div className="col-lg-4 col-sm-6">
          <SkillTab text="Negotiation" icon={faInstagram} />
        </div>
        <div className="col-lg-4 col-sm-6">
          <SkillTab text="Customer Relationship" icon={faPeopleGroup} />
        </div>
*/
