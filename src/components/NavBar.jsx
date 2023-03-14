import React from "react";
import styles from "../styles/NavBar.module.css";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <h1 className={styles.logo}>NEWS HUNT</h1>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : `${styles.navLink}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : `${styles.navLink}`
            }
          >
            UserLogin
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
