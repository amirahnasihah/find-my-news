import {
  Badge,
  Box,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import OrangeButton from "./OrangeButton";

export default function MyFavouritesPanel({ myFavourites, clearMyFavourites }) {
  return (
    <Box className="my-favourites-panel">
      <Badge badgeContent={myFavourites.length} color="secondary">
        <Typography variant="h6">Favourites</Typography>
      </Badge>
      <OrangeButton
        variant="contained"
        size="small"
        onClick={clearMyFavourites}
      >
        Clear
      </OrangeButton>
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
        {myFavourites.map((item, index) => (
          <ListItem disablePadding key={index}>
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
                    <Tooltip title={item.title}>
                      <Typography variant="body2">
                        <span role="img" aria-label="emoji">
                          👉
                        </span>
                        {item.title.slice(0, 100) + "..."}
                      </Typography>
                    </Tooltip>
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
