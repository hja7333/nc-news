import React from "react";
import styles from "/Users/alhunt/northcoders/frontend/nc-news/src/styles/ArticleContainer.module.css";
const ArticlesContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ArticlesContainer;
