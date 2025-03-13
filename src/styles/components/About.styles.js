import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const AboutSection = styled.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutText = styled(motion.div)`
  line-height: 1.6;
  color: #666;
`;

export const SkillsSection = styled(motion.div)`
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
`;

export const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SkillItem = styled.li`
  margin-bottom: 1rem;
  color: #666;
`;
