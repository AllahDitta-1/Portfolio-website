import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Appbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const linkStyle = (active) => ({
    position: "relative",
    fontWeight: "600",
    color: active ? "#facc15" : "#ffffff",
    textDecoration: "none",
    transition: "color 0.3s ease",
    marginLeft: "20px",
    marginRight: "20px",
    display: "inline-block",
  });

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(23, 37, 84, 0.8)", // blue-950/80
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          {/* Logo */}
          <div style={{ fontSize: "1.5rem", fontWeight: "bold", letterSpacing: "0.05em" }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <span style={{ color: "#ffffff" }}>Port</span>
              <span style={{ color: "#facc15" }}>folio</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  style={linkStyle(location.pathname === item.path)}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.span
                      layoutId="underline"
                      style={{
                        position: "absolute",
                        bottom: -4,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        borderRadius: "1px",
                        backgroundColor: "#facc15",
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Menu Toggle */}
          {isMobile && (
            <button onClick={() => setIsOpen(!isOpen)} style={{ background: "none", border: "none", color: "#fff" }}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              display: "block",
              backgroundColor: "#172554", // bg-blue-950
              color: "#ffffff",
              padding: "1rem",
              transition: "all 0.3s ease",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                style={{
                  display: "block",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  marginBottom: "0.75rem",
                  color: location.pathname === item.path ? "#facc15" : "#ffffff",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Appbar;
