import React from "react";
import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
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
    </AppContainer>
  );
}

export default App;
