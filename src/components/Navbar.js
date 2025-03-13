import React from "react";
import { motion } from "framer-motion";
import {
  Nav,
  NavContainer,
  Logo,
  NavLinks,
  NavLink,
} from "../styles/components/Navbar.styles";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Nav>
      <NavContainer>
        <Logo onClick={() => scrollToSection("home")}>Jace</Logo>
        <NavLinks>
          <NavLink
            onClick={() => scrollToSection("home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => scrollToSection("about")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </NavLink>
          <NavLink
            onClick={() => scrollToSection("projects")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </NavLink>
          <NavLink
            onClick={() => scrollToSection("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
