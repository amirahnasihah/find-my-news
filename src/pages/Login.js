import { Box, Button, TextField, Typography } from "@mui/material";

export default function Login() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5">Login</Typography>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Username"
          placeholder="Enter username"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div>
      <Button variant="contained">Login</Button>
    </Box>
  );
}
