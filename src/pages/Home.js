import React from "react";
import {
  HeroSection,
  HeroContent,
  Title,
  Subtitle,
  CTAButton,
} from "../styles/components/Home.styles";

const Home = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Jace
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Frontend Developer passionate about creating beautiful and functional
          web experiences
        </Subtitle>
        <CTAButton
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View My Projects
        </CTAButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Home;
