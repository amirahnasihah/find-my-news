import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

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

export default function Login() {
  const handleSubmitLogin = () => {};

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
            <TextField required id="outlined-required" label="Username" />
          </Tooltip>
          <Tooltip title="Dummy: 12345" placement="top-end">
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </Tooltip>
          <Link to="/home">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Link>
          <Copyright sx={{ mt: 2 }} />
        </Box>
      </Box>
    </Container>
  );
}
