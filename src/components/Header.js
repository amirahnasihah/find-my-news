import { AppBar, Box, Button, Chip, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import logo from "../assets/logo.png";
import FaceIcon from "@mui/icons-material/Face";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header({ keyword, handleSetKeyword }) {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmitLogout = () => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "plum", color: "rgb(0, 0, 0)" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* LOGO */}
            SEHA
            <img
              style={{ width: 22, display: { md: "flex" }, marginRight: 1 }}
              src={logo}
              alt="icon ketupat"
            />
            {/* SEARCH INPUT */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                type="text"
                placeholder="type something..."
                value={keyword}
                onChange={handleSetKeyword}
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          {/* LOGOUT + CHIP */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Chip
              icon={<FaceIcon style={{ color: "pink" }} />}
              label={userName}
              sx={{ marginRight: 1, color: "white" }}
            />
            <Button color="inherit" size="small" onClick={handleSubmitLogout}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
