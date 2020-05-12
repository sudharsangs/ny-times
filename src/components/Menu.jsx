import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <ul>
        <img
          src={require("../assets/new-york-times-logo-png-transparent.png")}
          alt=""
          className={styles.logoClass}
        />
        <li className={styles.dash}>Dashboard</li>
        <li>Articles</li>
        <li>Analytics</li>
        <li>Messages</li>
        <li>Calendar</li>
      </ul>
    </div>
  );
};

export default Menu;
