import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaUserGraduate } from "react-icons/fa";

const About = () => {
  const cardStyle = {
    borderRadius: "1.5rem",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    backgroundColor: "#ffffff",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "800",
    color: "#1e40af",
    letterSpacing: "-0.025em",
  };

  const paragraphStyle = {
    fontSize: "1.125rem",
    marginTop: "1rem",
    color: "#4b5563",
  };

  const sectionStyle = {
    background: "linear-gradient(to bottom, #ffffff, #eff6ff, #ffffff)",
    padding: "6rem 1rem",
  };

  return (
    <div style={sectionStyle}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Heading */}
        <motion.div
         
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "5rem" }}
        >
          <h1 style={headingStyle}>About Me</h1>
          <p style={paragraphStyle}>
            Learn more about who I am and what I do professionally.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
        >
          {/* Background Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            style={{ ...cardStyle, backgroundColor: "#f0fdf4" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", color: "#1e40af" }}>
              <FaUserGraduate style={{ fontSize: "1.75rem" }} />
              <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>My Background</h2>
            </div>
            <p style={{ color: "#374151", lineHeight: "1.75", fontSize: "1rem" }}>
              I’m <strong>Allah Ditta</strong>, a Software Engineer passionate about
              building scalable and dynamic web applications. I specialize in creating intuitive user
              experiences using React, Tailwind CSS, and Material UI. I focus on writing clean,
              maintainable code and continuously improving performance and accessibility.
            </p>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            style={cardStyle}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", color: "#1e40af" }}>
              <FaCode style={{ fontSize: "1.75rem" }} />
              <h2 style={{ fontSize: "1.5rem", fontWeight: "600" }}>My Skills</h2>
            </div>
            <ul style={{ paddingLeft: "1.25rem", color: "#374151", lineHeight: "1.75", fontSize: "1rem" }}>
              <li><strong>Frontend:</strong> React.js, HTML5, CSS3, JavaScript (ES6+)</li>
              {/* <li><strong>Backend:</strong> Node.js, Express.js</li>
              <li><strong>Database:</strong> MongoDB, Firebase</li> */}
              <li><strong>UI Libraries:</strong> Tailwind CSS, Material UI</li>
              <li><strong>Version Control:</strong> Git & GitHub</li>
            </ul>

            {/* Skill Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.5rem" }}>
              {[
                "Responsive Design",
                "Hooks",
                "REST APIs",
                "Git",
                "Performance Optimization",
              ].map((skill) => (
                <span
                  key={skill}
                  style={{
                    backgroundColor: "#dbeafe",
                    color: "#1e40af",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    transition: "background-color 0.3s ease",
                    cursor: "default",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
