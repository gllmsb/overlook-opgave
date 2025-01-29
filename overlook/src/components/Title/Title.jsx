import React from "react";
import styles from "./Title.module.scss";

export const Title = ({ text }) => {
  return (
    <div className={styles.titleContainer}>
      <h2>{text}</h2>
    </div>
  );
};
