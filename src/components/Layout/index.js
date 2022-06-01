import React from "react";
import classes from "./style.module.css"
const Layout = ({ children }) => {
  return <div className={classes["app-wrapper"]}>{children}</div>;
};

export default Layout;
