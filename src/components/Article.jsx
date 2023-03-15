import React from "react";
import styles from "../styles/Article.module.css";
import { Link } from "react-router-dom";
const Article = ({ data }) => {
  const { title, article_img_url, article_id } = data;

  return (
    <Link to={`/articles/${article_id}`}>
      <article className={styles.article_card}>
        <h3>{title}</h3>
        <img
          className={styles.article_img}
          src={article_img_url}
          alt={`image of ${title}`}
        ></img>
        <p>Author {data.author}</p>
        <p>posted at {data.created_at}</p>
      </article>
    </Link>
  );
};

export default Article;
