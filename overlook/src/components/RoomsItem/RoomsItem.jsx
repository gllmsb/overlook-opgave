import React from "react";
import styles from "./RoomsItem.module.scss";

export const RoomsItem = ({ room }) => {
  return (
    <div className={styles.card}>
      <img src={room.image} alt={room.title} className={styles.image} />
      <div className={styles.content}>
        <h3>{room.title}</h3>
      </div>
    </div>
  );
};
