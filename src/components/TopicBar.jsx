import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/TopicBar.module.css";

const TopicBar = () => {
  return (
    <>
      <div className={styles.searchContainer}>
        <ul className={styles.categories}>
          <h3 className={styles.filterBy}>Filter by: </h3>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            to="/topic/cooking"
          >
            cooking
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            to="/topic/football"
          >
            football
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            to="/topic/coding"
          >
            coding
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default TopicBar;
