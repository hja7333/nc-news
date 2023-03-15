import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import Article from "./components/Article";
import NavBar from "./components/NavBar";
import SingleArticle from "./pages/SingleArticle";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article" element={<Article />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
