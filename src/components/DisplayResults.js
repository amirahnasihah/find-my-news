import { useEffect, useState } from "react";
import api from "../api/newsData";
import NewsItem from "./NewsItem";
import { Box, Button, Grid, Typography } from "@mui/material";

export default function DisplayResults({
  page,
  keyword,
  updateMyFavorites,
  onLoadMore,
}) {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParam] = useState(["content", "title"]);
  const [hasMore, setHasMore] = useState(true);

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
    <Box>
      <Grid container spacing={2}>
        {filteredNewsData.length > 0 ? (
          filteredNewsData.slice(0, page).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <NewsItem news={item} updateMyFavorites={updateMyFavorites} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h4">No Results Found...</Typography>
            </Box>
          </Grid>
        )}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", margin: 5 }}>
        <Button
          variant="contained"
          size="small"
          style={{
            backgroundColor: "plum",
            color: "purple",
          }}
          onClick={onLoadMore}
        >
          Load More
        </Button>
      </Box>
    </Box>
  );
}
