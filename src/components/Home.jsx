import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>
        Search for breaking news from across the world, across the times.
      </h2>
      <img
        src={require("../assets/undraw_treasure_of9i.svg")}
        alt="person"
        className={styles.imgClass}
      />
    </div>
  );
};

export default Home;
