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
            width: "25ch",
          },
          color: "white",
        }}
      >
        <Typography component="h1" variant="h4">
          Sign in
        </Typography>
        <Box
          component="form"
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={handleSubmitLogin}
          noValidate
          autoComplete="off"
          className="login-input"
        >
          <Tooltip title="Dummy: John" placement="top-end">
            <TextField
              required
              id="outlined-required"
              label="Username"
              placeholder="Enter username"
            />
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
            <Button variant="contained">Login</Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
