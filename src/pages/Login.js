import {
  Alert,
  Box,
  Button,
  Container,
  CssBaseline,
  LinearProgress,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginInProgress, setIsLoginInProgress] = useState(false);
  const navigate = useNavigate();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setIsLoginInProgress(true);
    setIsLoggedIn(false);
    setErrorMessage("");

    setTimeout(() => {
      if (userName === "John" && password === "12345") {
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        localStorage.setItem("userName", JSON.stringify(userName));
        navigate("/home");
        setErrorMessage("");
      } else if (userName === "" || password === "") {
        setErrorMessage("Please fill in all the details");
        setIsLoggedIn(false);
      } else {
        setErrorMessage("Invalid username or password");
        setIsLoggedIn(false);
      }

      setIsLoginInProgress(false);
    }, 5000);
  };

  if (isLoggedIn) {
    return <Navigate to="/home">Home</Navigate>;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErrorMessage("");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Box
        className="login-page"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "100%",
          },
          color: "black",
          textAlign: "center",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmitLogin}
          noValidate
          autoComplete="off"
          className="login-input"
        >
          <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
            Sign in
          </Typography>
          <Tooltip title="Dummy: John" placement="top-end">
            <TextField
              required
              id="outlined-required"
              label="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Tooltip>
          <Tooltip title="Dummy: 12345" placement="top-end">
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </Tooltip>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>

          {isLoginInProgress && <LinearProgress />}
          <Copyright sx={{ mt: 2 }} />
        </Box>
      </Box>
      {errorMessage && (
        <Snackbar
          open={!!errorMessage}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity="error">{errorMessage}</Alert>
        </Snackbar>
      )}
    </Container>
  );
}

export default Login;
