import axios from "axios";
const articlesApi = axios.create({
  baseURL: "http://localhost:9090/api",
});

export const getArticles = (url) => {
  return articlesApi.get(url).then((data) => {
    return data;
  });
};
