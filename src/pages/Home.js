import { Box, Grid, Paper } from "@mui/material";
import Header from "../components/Header";
import styled from "@emotion/styled";
import MyFavouritesPanel from "../components/MyFavouritesPanel";
import DisplayResults from "../components/DisplayResults";
import { useState } from "react";

export default function Home() {
  // SEARCH BAR STATE
  const [keyword, setKeyword] = useState("");
  // FAVORITES STATE
  const [myFavourites, setmyFavourites] = useState([]);
  // PAGINATION STATE
  const [page, setPage] = useState(null);

  // Search function
  // - for input text field onchange
  const handleSetKeyword = (e) => {
    setKeyword(e.target.value);
    console.log("handleSetKeyword:", e.target.value);
  };

  // Favorite function
  const clearMyFavourites = () => {};

  const updateMyFavourites = () => {};

  // Paginations function
  const onLoadMore = () => {};

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header keyword={keyword} handleSetKeyword={handleSetKeyword} />
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            backgroundColor: "white",
            overflowY: "scroll",
          }}
        >
          <MyFavouritesPanel
            myFavourites={myFavourites}
            handleSetKeyword={handleSetKeyword}
            clearMyFavourites={clearMyFavourites}
          />
        </Grid>
        <Grid item xs={9}>
          <DisplayResults
            page={page}
            keyword={keyword}
            updateMyFavourites={updateMyFavourites}
            onLoadMore={onLoadMore}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
