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
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: center;
`;

export const ProjectCard = styled(motion.div)`
  cursor: pointer;
  flex: 1;
  min-width: 300px;
  max-width: 350px;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: #f0f0f0;
`;

export const ProjectInfo = styled.div`
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
