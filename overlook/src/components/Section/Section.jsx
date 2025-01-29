import React from "react";
import styles from "./Section.module.scss";

export const Section = ({ children, width = "80%", padding = "40px 0" }) => {
  return (
    <div className={styles.section} style={{ width, padding }}>
      {children}
    </div>
  );
};
