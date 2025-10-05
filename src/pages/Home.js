import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import Header from "../components/Header";
import MyFavouritesPanel from "../components/MyFavouritesPanel";
import DisplayResults from "../components/DisplayResults";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();
  const [isLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(4);
  const LOCAL_STORAGE_KEY = "my-favourites";
  const [myFavourites, setMyFavourites] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  useEffect(() => {
    const checkLoginStatus = () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (!isLoggedIn) {
        navigate("/", { replace: true });
      }
    };

    checkLoginStatus();
  }, [navigate]);

  const handleSetKeyword = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  useEffect(() => {
    const getLocalStorage = () => {
      const favouritesFromStorage = localStorage.getItem(LOCAL_STORAGE_KEY);

      if (favouritesFromStorage) {
        const parsedFavourites = JSON.parse(favouritesFromStorage);
        setMyFavourites(parsedFavourites);
      }
    };

    getLocalStorage();
  }, []);

  const updateMyFavourites = (news) => {
    // console.log("updateMyFavourites:", news);
    const existingFavourites = myFavourites.find((fav) => fav.url === news.url);

    if (!existingFavourites) {
      setMyFavourites([
        ...myFavourites,
        {
          ...news,
        },
      ]);

      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify([
          ...myFavourites,
          {
            ...news,
          },
        ])
      );
    } else {
      alert("Already added!");
    }
  };

  const clearMyFavourites = () => {
    setMyFavourites([]);

    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 8);
  };

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Header keyword={keyword} handleSetKeyword={handleSetKeyword} />
        </Grid>
        <Grid item xs={4} md={3}>
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
        <Grid item xs={12} md={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}
