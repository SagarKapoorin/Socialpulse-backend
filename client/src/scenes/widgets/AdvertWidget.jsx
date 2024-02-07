import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:8080/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main} fontSize="0.6rem">Magic-Cosmetics</Typography>
        <Typography color={medium} fontSize="0.6rem">magiccosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      I put on makeup to distract people from the fact that I haven't slept in days.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;