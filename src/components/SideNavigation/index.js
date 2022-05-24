import React from "react";
import SideNavItem from "../SideNavItem";
import classes from "./style.module.css";
const SideNavigation = () => {
  return (
    <aside className={classes["aside__wrapper"]}>
      <nav className={classes["nav"]}>
        <ul className={classes["nav__list"]}>
          <SideNavItem title="File Indexes" icon="description" />
          <SideNavItem title="Promotion Records" icon="folder" />
          <SideNavItem title="Letters Received" icon="inbox" />
          <SideNavItem title="Letters Worked On" icon="mark_email_read" />
          <SideNavItem title="Letters Seen by Dean" icon="visibility" />
        </ul>
      </nav>
    </aside>
  );
};

export default SideNavigation;
