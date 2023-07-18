import { Typography, Link } from "@mui/material";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer>
      <img style={{ width: 50 }} src={logo} alt="icon" />

      <Typography variant="h6">Start creating to see some magic!</Typography>

      <Typography variant="caption">
        {"made by "}
        <Link
          href="http://amirahnasihah.vercel.app/"
          rel="website"
          title="Amirah Nasihah"
          target="_blank"
          style={{ color: "red", textDecorationLine: "none" }}
        >
          amirahnasihah
        </Link>
        {" || source code on "}
        <Link
          href="https://github.com/amirahnasihah/find-my-news"
          title="GitHub Add To Fav Mock Api"
          target="_blank"
          style={{ color: "red", textDecorationLine: "none" }}
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
      </Typography>
    </footer>
  );
}

export default Footer;
