import React from "react";
import classes from "./style.module.css";

const MainArea = ({ content }) => {
  return (
    <section className={`${classes["main-wrapper"]} bg-white border-radius shadow`}>
      {content}
    </section>
  );
};

export default MainArea;
