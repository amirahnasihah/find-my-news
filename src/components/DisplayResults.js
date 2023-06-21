import { useEffect, useState } from "react";
import api from "../api/newsData";
import NewsItem from "./NewsItem";

export default function DisplayResults({
  page,
  keyword,
  updateMyFavorites,
  onLoadMore,
}) {
  // DATA STATE
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParam] = useState(["description", "name"]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const response = await api.get(`/articles`);
      setNews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredNewsData = news.filter((item) => {
    return searchParam.some((param) => {
      return item[param].toLowerCase().includes(keyword.toLowerCase());
    });
  });

  return (
    <div>
      <h2>DisplayResults</h2>
      {filteredNewsData.length > 0 ? (
        <NewsItem news={filteredNewsData} />
      ) : (
        <p>Not found...</p>
      )}
    </div>
  );
}
