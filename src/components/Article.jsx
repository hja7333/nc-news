import React from "react";
import styles from "../styles/Article.module.css";
const Article = ({ data }) => {
  const { title, article_img_url } = data;

  return (
    <article className={styles.article_card}>
      <h3 className={styles.title}>{title}</h3>
      <img
        className={styles.article_img}
        src={article_img_url}
        alt={`image of ${title}`}
      ></img>
      <p>Author {data.author}</p>
      <p>posted at {data.created_at}</p>
    </article>
  );
};

export default Article;
