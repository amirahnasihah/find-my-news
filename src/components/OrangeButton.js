import styled from "@emotion/styled";
import { Button } from "@mui/material";

const OrangeButton = styled(Button)(({ theme }) => ({
  color: "purple",
  backgroundColor: "orange",
  "&:hover": {
    backgroundColor: "darkorange",
  },
}));

export default OrangeButton;
