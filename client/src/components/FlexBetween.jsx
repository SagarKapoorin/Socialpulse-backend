import { Box } from "@mui/material";
import { styled } from "@mui/system";
// making our own material ui components
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;