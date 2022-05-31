import React from "react";
import { Link } from "react-router-dom";
import classes from "./style.module.css";

const SideNavItem = ({ title, icon, navUrl }) => {
  return (
    <li
      className={[
        `${classes["nav__item"]} 
      ${classes["nav__item--wrapper"]}`,
      ]}
    >
      <div className={classes["icon__wrapper"]}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <Link to={`/${navUrl}`} className={classes["nav__link"]}>
        {title}
      </Link>
    </li>
  );
};

export default SideNavItem;
