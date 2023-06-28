import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import OrangeButton from "./OrangeButton";

export default function NewsItem({ news, updateMyFavourites }) {
  const { name, title, urlToImage, publishedAt, url, content } = news;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "plum" }} aria-label="avatar">
            {name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={title.slice(0, 25)}
        subheader={new Date(publishedAt).toLocaleDateString("en-MY")}
      />
      <CardMedia component="img" height="194" image={urlToImage} alt={title} />
      <CardContent sx={{ height: 100 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "auto",
            maxHeight: "100px",
            "::-webkit-scrollbar": {
              display: "none",
            },
            cursor: "default",
          }}
        >
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add-to-favorites"
          onClick={() => updateMyFavourites(news)}
        >
          <BookmarkIcon sx={{ color: "plum" }} />
        </IconButton>
        <OrangeButton size="small" href={url} target="_blank" rel="noopener">
          Read more
        </OrangeButton>
      </CardActions>
    </Card>
  );
}
