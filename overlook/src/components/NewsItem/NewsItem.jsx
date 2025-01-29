import React from "react";
import styles from "./NewsItem.module.scss";

import nyhedIsland from "../../assets/images/nyhed-island.jpeg";
import nyhedBerlin from "../../assets/images/nyhed-berlin.jpeg";
import nyhedGdansk from "../../assets/images/nyhed-gdansk.jpeg";

const newsImages = {
  "nyhed-island.jpeg": nyhedIsland,
  "nyhed-berlin.jpeg": nyhedBerlin,
  "nyhed-gdansk.jpeg": nyhedGdansk,
};

export const NewsItem = ({ newsItem }) => {
  const imagePath = newsImages[newsItem.image.filename] || nyhedIsland;

  return (
    <div className={styles.card}>
      <img src={imagePath} alt={newsItem.title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{newsItem.title}</h3>
        <p className={styles.description}>{newsItem.teaser}</p>
      </div>
    </div>
  );
};
