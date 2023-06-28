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

export default function MyFavouritesPanel({
  myFavourites,
  handleSetKeyword,
  clearMyFavourites,
}) {
  return (
    <Box
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      className="my-favourites-panel"
    >
      <Badge badgeContent={myFavourites.length} color="secondary">
        <Typography variant="h6">Favourites</Typography>
      </Badge>

      <Button variant="contained" size="small" onClick={clearMyFavourites}>
        Clear
      </Button>

      <nav aria-label="favourites list">
        {myFavourites.map((item) => (
          <List key={item.id}>
            <ListItem disablePadding>
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
          </List>
        ))}
      </nav>
    </Box>
  );
}
