import React, { useState } from "react";
import {
  ContactSection,
  Container,
  Title,
  ContactForm,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
  ContactInfo,
  ContactItem,
  ContactIcon,
  SocialLinks,
  SocialTitle,
  SocialIcons,
  SocialIcon,
} from "../styles/components/Contact.styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </Title>
        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
        <ContactInfo
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ContactItem>
            <ContactIcon>📧</ContactIcon>
            <p>hsh96111296@gmail.com</p>
          </ContactItem>
          <ContactItem>
            <ContactIcon>📱</ContactIcon>
            <p>+1 437 771 3343</p>
          </ContactItem>
          <ContactItem>
            <ContactIcon>📍</ContactIcon>
            <p>Thornhill, ON, Canada</p>
          </ContactItem>
        </ContactInfo>
        <SocialLinks
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SocialTitle>Connect With Me</SocialTitle>
        </SocialLinks>
      </Container>
    </ContactSection>
  );
};

export default Contact;
