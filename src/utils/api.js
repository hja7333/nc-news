import axios from "axios";
const newsApi = axios.create({
  baseURL: "https://hjanews.onrender.com/api",
});

export const getArticles = (url) => {
  return newsApi
    .get("/articles")
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const postComment = (article_id, newComment) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, { body: newComment })
    .then(({ commentFromApi }) => {
      console.log(commentFromApi);
    });
};
