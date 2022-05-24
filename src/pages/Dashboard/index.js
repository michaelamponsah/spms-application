import React from "react";
import SideNavigation from "../../components/SideNavigation";
import classes from "./style.module.css";

const Dashboard = () => {
  return (
    <section className={classes.dashboard}>
      <SideNavigation />
    </section>
  );
};

export default Dashboard;
