import React from "react";
import styles from "./CityList.module.scss";

export const CityList = ({ cities, onSelectCity }) => {
  if (!cities || cities.length === 0) return <p>No cities found.</p>;

  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <button
          key={city.slug}
          className={styles.cityItem}
          onClick={() => onSelectCity(city.slug)} 
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};
