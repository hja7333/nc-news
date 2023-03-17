import React from "react";
import styles from "../styles/ArticleContainer.module.css";
const ArticlesContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ArticlesContainer;
