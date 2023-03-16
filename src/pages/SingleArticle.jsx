import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import TopicBar from "../components/TopicBar";
import styles from "../styles/SingleArticle.module.css";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://hjanews.onrender.com/api/articles/${article_id}`)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data.article);
        setIsLoading(false);
      });
  }, [article_id]);

  return isLoading ? (
    <p>Loading article</p>
  ) : (
    <main className={styles.page}>
      <article className={styles.article_card}>
        {" "}
        <section>
          <TopicBar />
        </section>
        <h2>{article.title}</h2>
        <h4>{article.topic}</h4>
        <img
          className={styles.image}
          src={article.article_img_url}
          alt={`${article.title}`}
        ></img>
        <p>{article.body}</p>
        <p>Author {article.author}</p>
        <p>posted at {article.created_at}</p>
        <p>Votes {article.votes}</p>
        <section>
          <Comments />
        </section>
      </article>
    </main>
  );
};

export default SingleArticle;
