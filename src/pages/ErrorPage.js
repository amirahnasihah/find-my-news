import { Link } from "react-router-dom";
import notfound from "../assets/not-found.png";
import { Box, Button, Grid, Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 5,
      }}
    >
      <Typography variant="h2" gutterBottom>
        Oops!
      </Typography>
      <Typography variant="overline" gutterBottom>
        That page cannot be found
      </Typography>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={notfound}
          alt="404 page not found"
          sx={{
            height: 400,
          }}
        />
      </Grid>

      <Link to="/home" className="link-btn">
        <Button variant="contained" sx={{ bgcolor: "black" }}>
          👉 Home
        </Button>
      </Link>
    </Box>
  );
};

export default ErrorPage;
