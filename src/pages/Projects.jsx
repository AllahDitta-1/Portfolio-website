import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiOpenai,
} from "react-icons/si";

const projects = [
  {
    title: "Travel and Tour Website",
    description: "A modern website built with javascript  and CSS to showcase my work and skills.",
    tech: ["javascript","CSS3","HTML5"],
    link: "https://allahditta-1.github.io/Travel-and-Tour-website/",
  },
  {
    title: "Jewlery website",
    description: "jewlery website built with javascript  and CSS to showcase my work and skills.",
    tech: ["javascript","HTML","CSS3"],
    link: "https://allahditta-1.github.io/jewlery-website/",
  },
  {
    title: "Resume Analyzer",
    description: "A web app that analyzes resumes using AI and provides improvement tips.",
    tech: ["React", "javascript", "Material UI"],
    link: "https://allahditta-1.github.io/RESUME-EXPERT/",
  },
];

const techIcons = {
  React: <SiReact style={{ color: "#61DAFB" }} />,
  Tailwind: <SiTailwindcss style={{ color: "#38BDF8" }} />,
  "Framer Motion": <SiFramer style={{ color: "#E300F6" }} />,
  "Node.js": <SiNodedotjs style={{ color: "#3C873A" }} />,
  MongoDB: <SiMongodb style={{ color: "#10AA50" }} />,
  Express: <SiExpress style={{ color: "#444" }} />,
  "OpenAI API": <SiOpenai style={{ color: "#8B5CF6" }} />,
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Projects = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "7rem auto 3rem", padding: "0 1rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#1e3a8a", marginBottom: "1rem" }}>
            My Projects
          </h1>
          <p style={{ fontSize: "1rem", color: "#4b5563" }}>
            Here are some of the projects I've worked on.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "1rem",
                padding: "1.5rem",
                boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
                border: "1px solid #bfdbfe",
                transition: "transform 0.3s ease-in-out",
                cursor: "pointer",
              }}
              whileHover={{ scale: 1.05 }}
              variants={cardVariant}
              
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#1e40af", marginBottom: "0.5rem" }}>
                {project.title}
              </h2>
              <p style={{ fontSize: "0.95rem", color: "#374151", marginBottom: "1rem" }}>
                {project.description}
              </p>

              {/* Tech stack */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      background: "#eff6ff",
                      color: "#1d4ed8",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      padding: "0.4rem 0.75rem",
                      borderRadius: "999px",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                    }}
                  >
                    {techIcons[tech]} {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  color: "#2563eb",
                  textDecoration: "none",
                }}
              >
                View Project <FaExternalLinkAlt style={{ marginLeft: "0.4rem" }} size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
