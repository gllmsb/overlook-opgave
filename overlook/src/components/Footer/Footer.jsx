import React from "react";
import styles from "./Footer.module.scss";
import { FaTwitterSquare, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom"; 

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p>© 2021 Hotel Overlook. Alle rettigheder forbeholdt.</p>
      </div>

      <div className={styles.center}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare className={styles.icon} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className={styles.icon} />
        </a>
      </div>

      <nav className={styles.right}>
        <Link to="/">Forside</Link>
        <Link to="/hoteller">Hoteller & Destinationer</Link>
        <Link to="/vaerelser">Værelser</Link>
        <Link to="/reservation">Reservation</Link>
        <Link to="/login">Login</Link>
      </nav>
    </footer>
  );
};
