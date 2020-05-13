import React, { useEffect, useState } from "react";
import styles from "./News.module.css";

const News = ({ news, term }) => {
  return (
    <div>
      <h3>{`Here are your search results for "${term}"`}</h3>
      <div className={styles.tblWrapper}>
        <h2>ARTICLES</h2>
        <table>
          <tr>
            <th className={styles.date}>Published Date</th>
            <th className={styles.headline}>Headline</th>
            <th className={styles.summary}>Summary</th>
            <th className={styles.url}>URL</th>
            <th className={styles.source}>Source</th>
          </tr>
          {news.map((n, i) => (
            <tr>
              <td className={styles.date}>{n.pub_date.slice(0, 9)}</td>
              <td className={`${styles.truncate} ${styles.headline}`}>
                {n.headline.main}
              </td>
              <td className={`${styles.summary} ${styles.truncate}`}>
                {n.abstract}
              </td>
              <td className={`${styles.url} ${styles.truncate}`}>
                <a href={n.web_url}>{n.web_url}</a>
              </td>
              <td className={`${styles.truncate} ${styles.source}`}>
                {n.source}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default News;
