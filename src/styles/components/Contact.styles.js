import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ContactSection = styled.section`
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
  text-align: center;
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: #666;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
`;

export const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const SocialLinks = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

export const SocialTitle = styled.h2`
  color: #333;
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const SocialIcon = styled(motion.a)`
  color: #666;
  font-size: 2rem;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

export const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #666;
`;

export const ContactIcon = styled.span`
  font-size: 1.5rem;
`;
