import React from "react";
import {
  ProjectsSection,
  Container,
  Title,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ProjectLinks,
  ProjectLink,
} from "../styles/components/Projects.styles";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A brief description of project 1",
      image: "https://via.placeholder.com/300x200",
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com",
    },
    {
      id: 2,
      title: "Project 2",
      description: "A brief description of project 2",
      image: "https://via.placeholder.com/300x200",
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com",
    },
    {
      id: 3,
      title: "Project 3",
      description: "A brief description of project 3",
      image: "https://via.placeholder.com/300x200",
      github: "https://github.com/yourusername/project3",
      demo: "https://project2-demo.com",
    },
    {
      id: 4,
      title: "Project 4",
      description: "A brief description of project 4",
      image: "https://via.placeholder.com/300x200",
      github: "https://github.com/yourusername/project4",
      demo: "https://project2-demo.com",
    },
    {
      id: 5,
      title: "Project 5",
      description: "A brief description of project 5",
      image: "https://via.placeholder.com/300x200",
      github: "https://github.com/yourusername/project5",
      demo: "https://project2-demo.com",
    },
    {
      id: 6,
      title: "Project 6",
      description: "A brief description of project 6",
      image: "https://via.placeholder.com/300x200",
      github: "https://github.com/yourusername/project6",
      demo: "https://project2-demo.com",
    },
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectLinks>
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </ProjectLink>
                  <ProjectLink
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
