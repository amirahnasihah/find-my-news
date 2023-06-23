import { Box, Grid } from "@mui/material";
import Header from "../components/Header";
import MyFavouritesPanel from "../components/MyFavouritesPanel";
import DisplayResults from "../components/DisplayResults";
import { useEffect, useState } from "react";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const LOCALS_STORAGE_KEY = "my-favourites";
  const [myFavourites, setMyFavourites] = useState(
    JSON.parse(localStorage.getItem(LOCALS_STORAGE_KEY)) ?? []
  );
  const [page, setPage] = useState(4);

  const handleSetKeyword = (e) => {
    setKeyword(e.target.value);
    console.log("handleSetKeyword:", e.target.value);
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  const getLocalStorage = () => {
    const favouritesFromStorage = localStorage.getItem(LOCALS_STORAGE_KEY);

    if (favouritesFromStorage) {
      const parsedFavourites = JSON.parse(favouritesFromStorage);
      setMyFavourites(parsedFavourites);
    }
  };

  const clearMyFavourites = () => {
    setMyFavourites([]);

    localStorage.removeItem(LOCALS_STORAGE_KEY);
  };

  const updateMyFavourites = (news) => {
    console.log("updateMyFavourites");
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 8);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Header keyword={keyword} handleSetKeyword={handleSetKeyword} />
        </Grid>

        <Grid
          item
          xs={4}
          md={3}
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

        <Grid item xs={8} md={9}>
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
