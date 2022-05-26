import React from "react";
import SideNavigation from "../../components/SideNavigation";
import PromotionRecordsPage from "../PromotionRecords";
import classes from "./style.module.css";

const Dashboard = () => {
  return (
    <section className={classes.dashboard}>
      <SideNavigation />
      <PromotionRecordsPage />
    </section>
  );
};

export default Dashboard;
