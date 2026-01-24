import React from 'react';
import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0% { 
    transform: translateX(-20px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% { 
    transform: translateX(220px);
    opacity: 0;
  }
`;

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 2.75rem;
  overflow: hidden;
  border-radius: 0;
  padding: 0;
  height: 12px;
  width: 220px;
  display: flex;
  align-items: center;
  border: 1px solid #ffffff;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.5),
    0 1px 2px rgba(255, 255, 255, 0.1);
  background: #000;
  position: relative;
`;

const Box = styled.div`
  position: absolute;
  display: inline-block;
  height: 10px;
  width: 18px;
  background: #ffffff;
  border-radius: 0;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  animation: ${move} 2.5s linear infinite;
`;

const LoadingBar = () => {
  return (
    <Container className="loading-bar">
      <Box className="loading-box" style={{ animationDelay: '0s' }} />
      <Box className="loading-box" style={{ animationDelay: '0.3s' }} />
      <Box className="loading-box" style={{ animationDelay: '0.6s' }} />
    </Container>
  );
};

export default LoadingBar;
