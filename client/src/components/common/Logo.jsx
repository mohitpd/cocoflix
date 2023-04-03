import { useTheme, Typography } from "@mui/material";
import React from "react";

const Logo = () => {
  const theme = useTheme();
  return (
    <Typography fontWeight={700} fontSize="1.7rem">
      Coco<span style={{ color: theme.palette.primary.main }}>Flix</span>
    </Typography>
  );
};

export default Logo;
