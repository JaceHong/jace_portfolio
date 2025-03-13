import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ProjectImage = styled.div`
  height: 200px;
  background-color: #f0f0f0;
  // You can replace this with an actual image
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;
`;

export const ProjectTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #333;
`;

export const ProjectDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ProjectLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProjectInfo = styled.div`
  padding: 1.5rem;
`;
