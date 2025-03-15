import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full py-8 text-left text-gray-500 text-sm bg-black">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-8">
        <p>Designed & Built by Jace Hong © {new Date().getFullYear()}</p>
        <div className="flex gap-4">
          <motion.a
            href="https://github.com/JaceHong"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-300 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-300 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
