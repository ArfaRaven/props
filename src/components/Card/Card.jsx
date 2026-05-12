import React from "react";
import styled, { keyframes } from "styled-components";

// Анімації
const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const floatUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Стилізовані компоненти
const CardWrapper = styled.div`
  width: 280px;
  margin: 16px;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 254, 0.04);
  border: 1px solid rgba(255, 255, 254, 0.08);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4);
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
  animation: ${floatUp} 0.5s ease both;
  position: relative;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 107, 138, 0.3);
    border-color: rgba(255, 107, 138, 0.25);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: linear-gradient(
      135deg,
      rgba(255, 107, 138, 0.06) 0%,
      transparent 50%
    );
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 190px;
  overflow: hidden;
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;

  ${CardWrapper}:hover & {
    transform: scale(1.08);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(15, 14, 23, 0.7) 100%);
`;

const CardBody = styled.div`
  padding: 22px 20px 24px;
`;

const CardTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fffffe;
  margin-bottom: 8px;
  letter-spacing: -0.2px;
`;

const CardDescription = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 0.88rem;
  font-weight: 300;
  color: rgba(255, 255, 254, 0.55);
  line-height: 1.6;
  margin-bottom: 20px;
`;

const CardButton = styled.button`
  font-family: 'Lato', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fffffe;
  background: linear-gradient(
    135deg,
    #ff6b8a,
    #a855f7,
    #ff6b8a
  );
  background-size: 200% auto;
  border: none;
  border-radius: 10px;
  padding: 11px 24px;
  cursor: pointer;
  width: 100%;
  transition: background-position 0.4s ease, box-shadow 0.3s ease, transform 0.15s ease;

  &:hover {
    background-position: right center;
    box-shadow: 0 4px 20px rgba(255, 107, 138, 0.5);
    animation: ${shimmer} 1.5s linear infinite;
  }

  &:active {
    transform: scale(0.97);
  }
`;

// Компонент
function Card({ title, description, image }) {
  const handleClick = () => {
    alert(title);
  };

  return (
    <CardWrapper>
      <ImageWrapper>
        <CardImage src={image} alt={title} />
        <ImageOverlay />
      </ImageWrapper>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardButton onClick={handleClick}>Дізнатися більше</CardButton>
      </CardBody>
    </CardWrapper>
  );
}

export default Card;
