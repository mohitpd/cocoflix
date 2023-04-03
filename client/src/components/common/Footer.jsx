import { Paper, Stack, Button, Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import menuConfigs from "../../configs/menu.configs";
import { Link } from "react-router-dom";
const Footer = () => {
  const theme = useTheme();
  return (
    <Container>
      <Paper square={true} sx={{ backgroundImage: "unset", padding: "2rem" }}>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row " }}
          sx={{ height: "max-content" }}
        >
          <Logo />
          <Typography variant="h5" fontWeight={700} textTransform="uppercase">
            Made By{" "}
            <a
              href="https://www.linkedin.com/in/mohitprasad98/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ "text-decoration": "none" }}
            >
              <span style={{ color: theme.palette.primary.main }}>Mohit</span>
            </a>
          </Typography>
          <Box>
            {menuConfigs.main.map((item, index) => (
              <Button
                key={index}
                sx={{ color: "inherit" }}
                component={Link}
                to={item.path}
              >
                {item.display}
              </Button>
            ))}
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Footer;
