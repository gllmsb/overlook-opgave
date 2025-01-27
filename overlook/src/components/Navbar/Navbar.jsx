import { useState } from "react";
import { Link } from "react-router-dom"; 
import styles from "./Navbar.module.scss";
import logo from "../../assets/images/header.png";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="logo" />
        </Link>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Forside</Link> 
          <Link to="/hotels" onClick={() => setMenuOpen(false)}>Hoteller & Destinationer</Link>
          <Link to="/rooms" onClick={() => setMenuOpen(false)}>Værelser</Link>
          <Link to="/reservations" onClick={() => setMenuOpen(false)}>Reservation</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        </div>

        <div className={styles.burgerMenu} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>
      </div>
    </nav>
  );
};
