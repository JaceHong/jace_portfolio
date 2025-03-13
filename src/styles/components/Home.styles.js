import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  padding-top: 5rem;
`;

export const HeroContent = styled.div`
  max-width: 800px;
`;

export const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

export const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
`;

export const CTAButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
