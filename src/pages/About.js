import React from "react";
import { motion } from "framer-motion";
import {
  AboutSection,
  Container,
  Title,
  Content,
  AboutText,
  SkillsSection,
  SkillsList,
  SkillItem,
} from "../styles/components/About.styles";

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </Title>
        <Content>
          <AboutText
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              I am a passionate Frontend Developer with a strong foundation in
              modern web technologies. I love creating responsive and
              user-friendly web applications that provide great user
              experiences.
            </p>
            <p>
              With a keen eye for design and a commitment to clean code, I
              strive to build applications that are both beautiful and
              maintainable.
            </p>
          </AboutText>
          <SkillsSection
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2>Skills</h2>
            <SkillsList>
              <SkillItem>React.js</SkillItem>
              <SkillItem>JavaScript (ES6+)</SkillItem>
              <SkillItem>HTML5 & CSS3</SkillItem>
              <SkillItem>Responsive Design</SkillItem>
              <SkillItem>Git & Version Control</SkillItem>
              <SkillItem>Modern Build Tools</SkillItem>
            </SkillsList>
          </SkillsSection>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;
