import React from "react";
import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 5rem;
  flex: 1;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <MainContent>
        <Home />
        <About />
        <Projects />
        <Contact />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
