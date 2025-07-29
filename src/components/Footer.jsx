import React from "react";
import { Box, Typography, IconButton, Stack, Container } from "@mui/material";
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";

const FooterBox = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0f172a", // slate-900 like color
        color: "#ffffff",
        py: 4,
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          {/* Left Side: Branding or Copy */}
          <Typography variant="body2" sx={{ fontSize: 14 }}>
            © {new Date().getFullYear()} Allah Ditta. All Rights Reserved.
          </Typography>

          {/* Right Side: Social Icons */}
          <Stack direction="row" spacing={2}>
            <IconButton
              component="a"
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener"
              sx={{ color: "#ffffff", "&:hover": { color: "#facc15" } }} // yellow-400
            >
              <FaGithub />
            </IconButton>
            <IconButton
              component="a"
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener"
              sx={{ color: "#ffffff", "&:hover": { color: "#facc15" } }}
            >
              <FaLinkedinIn />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener"
              sx={{ color: "#ffffff", "&:hover": { color: "#facc15" } }}
            >
              <FaInstagram />
            </IconButton>
            <IconButton
              component="a"
              href="mailto:your@email.com"
              sx={{ color: "#ffffff", "&:hover": { color: "#facc15" } }}
            >
              <FaEnvelope />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterBox;
