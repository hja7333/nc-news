import React, { useEffect } from "react";
import { useState } from "react";
import Article from "../components/Article";
import ArticlesContainer from "../components/ArticlesContainer";
import { getArticles } from "../utils/api";
import TopicBar from "../components/TopicBar";
// import Section from "../components/Section.jsx";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  <h2>Here is the latest news........</h2>;
  useEffect(() => {
    getArticles("/articles").then((data) => {
      setArticles(data.data.articles);
    });
  }, []);

  const articleCards = articles.map((article) => {
    return (
      <li key={article.article_id}>
        <Article data={article} />
      </li>
    );
  });
  return (
    <section>
      <TopicBar />
      <ArticlesContainer>{articleCards}</ArticlesContainer>
    </section>
  );
};
export default Articles;
