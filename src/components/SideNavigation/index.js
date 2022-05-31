import React from "react";
import SideNavItem from "../SideNavItem";
import classes from "./style.module.css";
const SideNavigation = () => {
  return (
    <aside className={classes["aside__wrapper"]}>
      <nav className={classes["nav"]}>
        <ul className={classes["nav__list"]}>
          <SideNavItem title="Dashboard" navUrl="" icon="dashboard" />
          <SideNavItem title="File Indexes" navUrl="file-indexes" icon="description" />
          <SideNavItem title="Promotion Records" navUrl="promotion-records" icon="folder" />
          <SideNavItem title="Letters Received" navUrl="letters-received" icon="inbox" />
          <SideNavItem title="Letters Worked On" navUrl="letters-worked-on" icon="mark_email_read" />
          <SideNavItem title="Letters Seen by Dean" navUrl="letters-seen" icon="visibility" />
        </ul>
      </nav>
    </aside>
  );
};

export default SideNavigation;
