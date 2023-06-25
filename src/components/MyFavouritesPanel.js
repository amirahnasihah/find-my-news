import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

export default function MyFavouritesPanel({
  myFavourites,
  handleSetKeyword,
  clearMyFavourites,
}) {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Typography variant="h6">Favourites: {myFavourites.length}</Typography>
      <nav aria-label="favourites list">
        {myFavourites.map((item) => (
          <List key={item.id}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                      onClick={handleSetKeyword}
                    >
                      <Typography variant="caption">
                        <span role="img" aria-label="emoji">
                          👉
                        </span>
                        {item.title}
                      </Typography>
                    </a>
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
