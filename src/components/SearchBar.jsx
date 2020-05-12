import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="&#61447;Search"
        className={styles.searchBox}
      />
      <button type="submit" className={styles.searchBtn}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
