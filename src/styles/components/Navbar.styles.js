import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Nav = styled.nav`
  background-color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
  cursor: pointer;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

export const NavLink = styled(motion.a)`
  text-decoration: none;
  color: #666;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #333;
  }
`;
