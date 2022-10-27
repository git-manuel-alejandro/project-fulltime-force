import React from "react";
import icon from "../../assets/img/git-icon.png";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <div className="header">
        <img src={icon} alt="icon" className="icon-git" />
      </div>
    </>
  );
};
