import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <main>
      {/* <img src={article.img} alt={article.name} /> */}

      <h3>{article.title}</h3>
      <h2>{article.topic}</h2>
      <img
        src={article.article_img_url}
        alt={`image of ${article.title}`}
      ></img>
      <p>{article.body}</p>
      <p>Author {article.author}</p>
      <p>posted at {article.created_at}</p>
      <p>Votes {article.votes}</p>
    </main>
  );
};

export default SingleArticle;
