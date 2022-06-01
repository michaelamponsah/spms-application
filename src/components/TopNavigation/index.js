import React from "react";
import classes from "./style.module.css";

const NavBar = () => {
  return (
    <nav className={`${classes["nav__wrapper"]} bg-white shadow text-small text-dark`}>
      <div className={classes["nav__left"]}>
        <p>Dean's Office, SPMS UG</p>
      </div>
      <div className={classes["nav__right"]}>
        <p>Welcome, Mike</p>
      </div>
    </nav>
  );
};

export default NavBar;
