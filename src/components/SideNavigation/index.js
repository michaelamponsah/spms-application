import React from "react";
import SideNavItem from "../SideNavItem";
import classes from "./style.module.css";
const SideNavigation = () => {
  return (
    <aside className={classes["aside__wrapper"]}>
      <nav>
        <ul className={classes["nav__list"]}>
          <SideNavItem title="Dashboard" navUrl="" icon="dashboard" />
          <SideNavItem
            title="File Indexes"
            navUrl="file-indexes"
            icon="description"
          />
          <SideNavItem
            title="Promotion Records"
            navUrl="promotion-records"
            icon="folder"
          />
          <SideNavItem
            title="Letters Received"
            navUrl="letters-received"
            icon="inbox"
          />
          <SideNavItem
            title="Letters Worked On"
            navUrl="letters-worked-on"
            icon="done_outline"
          />
          <SideNavItem
            title="Letters Seen"
            navUrl="letters-seen"
            icon="visibility"
          />
          <SideNavItem
            title="Reservations"
            navUrl="reservations"
            icon="calendar_month"
          />
        </ul>
      </nav>
    </aside>
  );
};

export default SideNavigation;
