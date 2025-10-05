import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { Box, Button, Grid, Typography } from "@mui/material";
import axios from "axios";

export default function DisplayResults({
  page,
  keyword,
  updateMyFavourites,
  onLoadMore,
}) {
  const [news, setNews] = useState([]);
  const [searchParam] = useState(["content", "title"]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_KEYWORD = process.env.REACT_APP_KEYWORD;

  // console.log("This is api_keyword:", API_KEYWORD);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${API_KEYWORD}&apiKey=${API_KEY}`
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };

    getNews();
  }, [API_KEYWORD, API_KEY]);

  const filteredNewsData = news.filter((item) => {
    return searchParam.some((param) => {
      return item[param].toLowerCase().includes(keyword.toLowerCase());
    });
  });

  return (
    <Box>
      <Grid container spacing={2}>
        {filteredNewsData.length > 0 ? (
          filteredNewsData.slice(0, page).map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.url}>
              <NewsItem news={item} updateMyFavourites={updateMyFavourites} />
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
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
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
