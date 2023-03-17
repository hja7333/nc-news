import { useState } from "react";
// import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";

const CommentAdder = () => {
  const [newComment, setNewComment] = useState("");
  //   const { article_id } = useParams;

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(newComment);
  };

  return (
    <form className="CommentAdder" onSubmit={handleSubmit}>
      <label htmlFor="newComment">Add a comment</label>
      <textarea
        id="newComment"
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
      />
      <button type="submit">Add your comments here!</button>
    </form>
  );
};
export default CommentAdder;
