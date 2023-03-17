import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/api";
import styles from "../styles/Comments.module.css";
import CommentAdder from "./CommentAdder";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(article_id).then((data) => {
      setComments(data.comments);
      setIsLoading(false);
    });
  }, [article_id]);
  return (
    <section>
      <h2>Comments</h2>
      <CommentAdder />
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id} className={styles.commentCards}>
            <p>Comment: {comment.body}</p>
            <p>Author: {comment.author}</p>
            <p>Created at: {comment.created_at}</p>
            <p>Votes: {comment.votes}</p>
          </li>
        );
      })}
    </section>
  );
};
export default Comments;
