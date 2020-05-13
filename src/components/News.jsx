import React, { useEffect, useState } from "react";
import styles from "./News.module.css";

const News = ({ news }) => {
  return (
    <div>
      <h2>ARTICLES</h2>

      <div className={styles.tblWrapper}>
        <table>
          <tr>
            <th>Published Date</th>
            <th>Headline</th>
            <th className={styles.summary}>Summary</th>
            <th className={styles.url}>URL</th>
            <th>Source</th>
          </tr>
          {news.map((n, i) => (
            <tr>
              <td>{n.pub_date.slice(0, 9)}</td>
              <td>{n.headline.main}</td>
              <td className={styles.summary}>{n.abstract}</td>
              <td className={styles.url}>
                <a href={n.web_url}>{n.web_url}</a>
              </td>
              <td>{n.source}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default News;
