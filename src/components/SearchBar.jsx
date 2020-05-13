import React, { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ handleInput, search, fetch }) {
  return (
    <div className={styles.wrapper}>
      <form>
        <input
          type="text"
          placeholder="Search"
          onChange={handleInput}
          onKeyPress={search}
          className={styles.searchBox}
        />
        <button type="submit" className={styles.searchBtn} onClick={fetch}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
