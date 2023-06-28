import styled from "@emotion/styled";
import { Button } from "@mui/material";

const useStyles = styled((Button) => ({
  root: {
    color: "#fff",
    backgroundColor: "#F38181",
    "&:hover": {
      backgroundColor: "#E65F5F",
    },
  },
}));

const OrangeButton = (props) => {
  const classes = useStyles();

  return <Button className={classes.root} {...props} />;
};

export default OrangeButton;
