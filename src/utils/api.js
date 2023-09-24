import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://newsapi.org/v2",
});

const API_KEY = "4ed7d74a37aa40ca869e650935364b25";

export const getArticles = () => {
  return newsApi
    .get("/top-headlines", {
      params: {
        country: "uk",
        apiKey: API_KEY,
      },
    })
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
    });
};
export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};
