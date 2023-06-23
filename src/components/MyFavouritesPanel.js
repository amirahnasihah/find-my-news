import { Box, Typography } from "@mui/material";

export default function MyFavouritesPanel({
  myFavourites,
  handleSetKeyword,
  clearMyFavourites,
}) {
  return (
    <Box>
      <Typography variant="h6">Favourites</Typography>
    </Box>
  );
}
