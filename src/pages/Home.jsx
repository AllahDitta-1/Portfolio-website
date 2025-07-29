import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Chip,
  useMediaQuery,
  useTheme,
  Grid,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import profilePic from "../assets/photo.jpeg"; // Ensure the path is correct

const MotionBox = motion(Box);

const techStack = ["React", "MUI", "Git", "REST APIs"];
const skillSet = [
  "React js",
  "Javascript",
  "TailwindCSS",
  "CSS",
  "HTML",
  "Responsive Web Design",
  "Single Page Applications",
  "Version Control (Git)",
];
const tools = ["VS Code", "ChromeExtention", "GitHub"];

const Home = () => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 8 },
          pt: { xs: 10, sm: 12 },
          background: "linear-gradient(135deg, #0d47a1, #00c8aa)",
          color: "#fff",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Text Section */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography variant={isSmDown ? "h4" : "h2"} fontWeight="bold">
            Hi, I am Allah Ditta
          </Typography>

          <Typography
            variant={isSmDown ? "h6" : "h5"}
            sx={{ mt: 1, mb: 3, fontWeight: "medium", color: "#fff" }}
          >
            <Typewriter
              words={[
                "Frontend Web Developer",
                "Software Engineer",
                "UI/UX Enthusiast",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
            {techStack.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                size="small"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 4 }}
          >
            <Button
              variant="contained"
              component={RouterLink}
              to="/projects"
              sx={{
                backgroundColor: "#00c8aa",
                px: 4,
                "&:hover": {
                  backgroundColor: "#00b29b",
                },
              }}
            >
              View Projects
            </Button>
            <Button
              variant="outlined"
              component={RouterLink}
              to="/contact"
              sx={{
                borderColor: "#fff",
                color: "#fff",
                px: 4,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderColor: "#fff",
                },
              }}
            >
              Contact Me
            </Button>
          </Stack>
        </Box>

        {/* Profile Picture */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: "center",
            mt: { xs: 6, md: 0 },
            mb: { xs: 18, md: 0 },
          }}
        >
          <Box
            component="img"
            src={profilePic}
            alt="Allah Ditta"
            sx={{
              width: { xs: 200, md: 300 },
              height: { xs: 200, md: 300 },
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              transition: "transform 0.5s ease, filter 0.5s ease",
              "&:hover": {
                transform: "scale(1.1)",
                filter: "brightness(1.1)",
              },
            }}
          />
        </Box>
      </Box>

      {/* Skills Section */}
      <Box
        component="section"
        sx={{
          background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
          py: 10,
          px: 3,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={4}>
          My Professional Skills
        </Typography>

        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Stack
            spacing={2}
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            direction="row"
            sx={{ gap: 2 }}
          >
            {skillSet.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                sx={{
                  background: "linear-gradient(135deg, #0d47a1, #42a5f5)",
                  color: "#fff",
                  fontWeight: "bold",
                  px: 2,
                  py: 1,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    transform: "scale(1.1)",
                    boxShadow: "0 6px 20px rgba(66, 165, 245, 0.6)",
                  },
                }}
              />
            ))}
          </Stack>
        </MotionBox>
      </Box>

      {/* Tools Section */}
      <Box
        component="section"
        sx={{
          background: "linear-gradient(10deg, #0d47a1, #1565c0)",
          py: { xs: 8, md: 12 },
          px: 3,
          textAlign: "center",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Section Title */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "2.5rem" },
              mb: 5,
              position: "relative",
              display: "inline-block",
              "::after": {
                content: '""',
                position: "absolute",
                left: "50%",
                bottom: -6,
                transform: "translateX(-50%)",
                width: "60%",
                height: "4px",
                backgroundColor: "#00e5ff",
                borderRadius: "2px",
              },
            }}
          >
            Tools I Use
          </Typography>
        </MotionBox>

        {/* Tool Chips */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Stack
            spacing={2}
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            direction="row"
            sx={{ gap: 2 }}
          >
            {tools.map((tool) => (
              <Chip
                key={tool}
                label={tool}
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  fontWeight: "bold",
                  px: 2.5,
                  py: 1.5,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  backdropFilter: "blur(8px)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    boxShadow: "0 0 12px #00e5ff, 0 0 20px #00bcd4",
                    background: "rgba(255, 255, 255, 0.2)",
                  },
                }}
              />
            ))}
          </Stack>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Home;