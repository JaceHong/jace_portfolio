import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold text-gray-800 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Jace
          </motion.a>
          <div className="flex space-x-8">
            <motion.a
              onClick={() => scrollToSection("home")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.a>
            <motion.a
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.a>
            <motion.a
              onClick={() => scrollToSection("projects")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.a>
            <motion.a
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
