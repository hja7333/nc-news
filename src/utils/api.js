import axios from "axios";
const articlesApi = axios.create({
  baseURL: "https://hjanews.onrender.com/api",
});

export const getArticles = (url) => {
  return articlesApi
    .get(url)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
