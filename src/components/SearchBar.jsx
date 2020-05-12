import React, { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <form>
        <input type="text" placeholder="Search" className={styles.searchBox} />
        <button type="submit" className={styles.searchBtn}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
