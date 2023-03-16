import React, { useEffect } from "react";
import { useState } from "react";
import Article from "../components/Article";
import ArticlesContainer from "../components/ArticlesContainer";
import { getArticles } from "../utils/api";
import TopicBar from "../components/TopicBar";
import styles from "/Users/alhunt/northcoders/frontend/nc-news/src/styles/ArticleContainer.module.css";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles("/articles").then((data) => {
      setArticles(data.data.articles);
    });
  }, []);

  const articleCards = articles.map((article) => {
    return (
      <li className={styles.list} key={article.article_id}>
        <Article data={article} />
      </li>
    );
  });

  return (
    <section>
      <TopicBar />
      <br></br>
      <h2>Here is the latest news........</h2>

      <ArticlesContainer>{articleCards}</ArticlesContainer>
    </section>
  );
};
export default Articles;
