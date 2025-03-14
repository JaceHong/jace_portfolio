import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/100 backdrop-blur-md shadow-sm z-50">
      <div className="bg-black max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.a
            onClick={() => scrollToSection("home")}
            className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Jace
          </motion.a>
          <div className="hidden md:flex items-center gap-8">
            <motion.a
              onClick={() => scrollToSection("home")}
              className="text-white font-medium cursor-pointer p-2 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.a>
            <motion.a
              onClick={() => scrollToSection("about")}
              className="text-white font-medium cursor-pointer p-2 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.a>
            <motion.a
              onClick={() => scrollToSection("projects")}
              className="text-white font-medium cursor-pointer p-2 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.a>
            <motion.a
              onClick={() => scrollToSection("contact")}
              className="text-white font-medium cursor-pointer p-2 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </div>
          <div className="md:hidden" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white font-medium cursor-pointer p-2 hover:text-purple-400 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* mobile menu */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-20 left-0 right-0 bg-black py-4"
              >
                <motion.a
                  onClick={() => scrollToSection("home")}
                  className="block text-white font-medium cursor-pointer p-4 hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Home
                </motion.a>
                <motion.a
                  onClick={() => scrollToSection("about")}
                  className="block text-white font-medium cursor-pointer p-4 hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About
                </motion.a>
                <motion.a
                  onClick={() => scrollToSection("projects")}
                  className="block text-white font-medium cursor-pointer p-4 hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Projects
                </motion.a>
                <motion.a
                  onClick={() => scrollToSection("contact")}
                  className="block text-white font-medium cursor-pointer p-4 hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact
                </motion.a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
