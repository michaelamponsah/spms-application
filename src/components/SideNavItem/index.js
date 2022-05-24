import React from "react";
import classes from "./style.module.css";

const SideNavItem = ({ title, icon }) => {
  return (
    <li
      className={[
        `${classes["nav__item"]} 
      ${classes["nav__item--wrapper"]}`,
      ]}
    >
      <div className={classes["icon__wrapper"]}>
        <span class="material-symbols-outlined">{icon}</span>
      </div>
      <a href="#" className={classes["nav__link"]}>
        {title}
      </a>
    </li>
  );
};

export default SideNavItem;
