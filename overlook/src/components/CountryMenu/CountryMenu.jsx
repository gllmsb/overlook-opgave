import React from "react";
import styles from "./CountryMenu.module.scss";

export const CountryMenu = ({ countries, onSelectCountry }) => {
  if (!countries || countries.length === 0) return <p>No countries available.</p>;

  return (
    <nav className={styles.countryMenu}>
      {countries.map((country) => (
        <button
          key={country.slug}
          className={styles.menuItem}
          onClick={() => onSelectCountry(country.slug)} 
        >
          {country.name}
        </button>
      ))}
    </nav>
  );
};
