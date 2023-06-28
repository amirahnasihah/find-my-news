import {
  Badge,
  Box,
  Button,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import OrangeButton from "./OrangeButton";

export default function MyFavouritesPanel({ myFavourites, clearMyFavourites }) {
  return (
    <Box className="my-favourites-panel">
      <Badge badgeContent={myFavourites.length} color="secondary">
        <Typography variant="h6">Favourites</Typography>
      </Badge>

      <Button variant="contained" size="small" onClick={clearMyFavourites}>
        Clear
      </Button>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          maxHeight: 400,
          overflowY: "scroll",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            borderRadius: "4px",
          },
        }}
        aria-label="favourites list"
      >
        {myFavourites.map((item) => (
          <ListItem disablePadding key={item.id}>
            <ListItemButton>
              <ListItemText
                primary={
                  <Link
                    href={item.url}
                    color="inherit"
                    underline="none"
                    target="_blank"
                    rel="noopener"
                  >
                    <Typography variant="body2">
                      <span role="img" aria-label="emoji">
                        👉{" "}
                      </span>
                      {item.title}
                    </Typography>
                  </Link>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
