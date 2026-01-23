import React from 'react';
import styled from 'styled-components';
import LoadingBar from './LoadingBar';

const Screen = styled.div`
  background-color: #000;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Tahoma', sans-serif;
  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-bottom: 3rem;
`;

const WindowsFlag = styled.img`
  width: 300px;
  height: auto;
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.15));
`;

const TrademarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 1rem;
  color: #fff;
  font-family: 'Arial', sans-serif;
`;

const FooterLeft = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 2rem;
  font-size: 0.75rem;
  color: #999;
  font-family: 'Tahoma', sans-serif;
`;

const FooterRight = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
  
  img {
    height: 20px;
    width: auto;
    opacity: 0.8;
  }
`;

const LoadingScreen = () => {
  return (
    <Screen>
      <LogoContainer>
        <WindowsFlag src="/logo-portfolio-black.png" alt="Windows XP" />
        <TrademarkContainer>
          <span>®</span>
          <span>™</span>
        </TrademarkContainer>
      </LogoContainer>
      <LoadingBar />
      <FooterLeft>Copyright © Microsoft Corporation</FooterLeft>
      <FooterRight>
        <svg width="80" height="20" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="20" fill="#999" fontSize="16" fontFamily="Arial, sans-serif" fontWeight="bold">Microsoft</text>
        </svg>
      </FooterRight>
    </Screen>
  );
};

export default LoadingScreen;
