import React from "react";
import "../css/navtab.css";

const NavTab = (props) => {
  return (
    <div className="nav-tab-div">
      <a className="nav-tab-a" href={`#${props.text}`}>
        {props.text}
      </a>
    </div>
  );
};

export default NavTab;
