import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      style={{
        marginTop: "7rem",
        maxWidth: "768px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "0 1rem",
        marginBottom: "4rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1e3a8a" }}>
            Contact Me
          </h1>
          <p style={{ color: "#4b5563", marginTop: "0.75rem" }}>
            Have a question or want to work together? Fill out the form below!
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            borderRadius: "0.5rem",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              style={{
                display: "block",
                marginBottom: "0.25rem",
                fontWeight: 500,
                color: "#374151",
                fontSize: "0.875rem",
              }}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                border: "1px solid #d1d5db",
                borderRadius: "0.375rem",
                padding: "0.5rem 1rem",
                outline: "none",
                fontSize: "1rem",
              }}
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "0.25rem",
                fontWeight: 500,
                color: "#374151",
                fontSize: "0.875rem",
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                border: "1px solid #d1d5db",
                borderRadius: "0.375rem",
                padding: "0.5rem 1rem",
                outline: "none",
                fontSize: "1rem",
              }}
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              style={{
                display: "block",
                marginBottom: "0.25rem",
                fontWeight: 500,
                color: "#374151",
                fontSize: "0.875rem",
              }}
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                border: "1px solid #d1d5db",
                borderRadius: "0.375rem",
                padding: "0.5rem 1rem",
                outline: "none",
                fontSize: "1rem",
                resize: "vertical",
              }}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              backgroundColor: "#1d4ed8",
              color: "#fff",
              padding: "0.5rem 1.5rem",
              borderRadius: "0.375rem",
              fontSize: "1rem",
              fontWeight: 500,
              cursor: "pointer",
              border: "none",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1e40af")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
