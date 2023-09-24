import React, { useEffect, useState } from "react";
import Article from "../components/Article";
import ArticlesContainer from "../components/ArticlesContainer";
import { getArticles } from "../utils/api";
import TopicBar from "../components/TopicBar";
import styles from "../styles/ArticleContainer.module.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  const articleCards = articles.map((article) => {
    return (
      <li className={styles.list} key={article.id}>
        <Article data={article} />
      </li>
    );
  });

  return (
    <section>
      <TopicBar />
      <br></br>
      <h2 className={styles.headline}>Here is the latest news........</h2>

      <ArticlesContainer>{articleCards}</ArticlesContainer>
    </section>
  );
};

export default Articles;
