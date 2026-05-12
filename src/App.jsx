import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import CardList from "./components/CardList/CardList";
import { cardsData } from "./data";

// Глобальні стилі
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Lato', sans-serif;
    background-color: #0f0e17;
    color: #fffffe;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

// Стилізовані компоненти сторінки
const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 60px 20px;
  background: radial-gradient(ellipse at 20% 10%, #1a1040 0%, #0f0e17 60%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    top: -200px;
    right: -200px;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 90, 120, 0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: fixed;
    bottom: -200px;
    left: -100px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(100, 60, 240, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const PageTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #fffffe 30%, #ff6b8a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const PageSubtitle = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  text-align: center;
  color: rgba(255, 255, 254, 0.4);
  margin-bottom: 60px;
`;

const Divider = styled.div`
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #ff6b8a, #a855f7);
  margin: 16px auto 48px;
  border-radius: 2px;
`;

// Основний компонент
function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <PageTitle>React Cards</PageTitle>
        <Divider />
        <PageSubtitle>Колекція карток</PageSubtitle>
        <CardList cards={cardsData} />
      </PageWrapper>
    </>
  );
}

export default App;
