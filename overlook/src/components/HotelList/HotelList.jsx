import React from "react";
import styles from "./HotelList.module.scss";

export const HotelList = ({ hotels, onSelectHotel }) => {
  if (!hotels || hotels.length === 0) return <p>No hotels available.</p>;

  return (
    <div className={styles.hotelList}>
      {hotels.map((hotel) => (
        <button key={hotel.slug} className={styles.hotelItem} onClick={() => onSelectHotel(hotel.slug)}>
          {hotel.title}
        </button>
      ))}
    </div>
  );
};
