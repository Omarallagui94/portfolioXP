import React from 'react';
import styled from 'styled-components';

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  /* Approximate gradient from 'bg-color-load-blue radial-gradient-loading' */
  background: radial-gradient(circle at center, #2b50d8 0%, #1f3ca6 100%);
`;

const Top = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 16.666%; /* h-1/6 */
  /* Approximate 'bg-color-load-header-blue' and 'down-stroke-white-2' */
  background-color: #003399;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  z-index: 20;

  @media (min-width: 768px) {
    height: 8rem; /* md:h-32 */
  }
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20%; /* h-1/5 */
  /* Approximate 'bg-color-load-header-blue' and 'up-stroke-green-2' */
  background-color: #003399;
  border-top: 2px solid #55aa00;
  z-index: 20;

  @media (min-width: 768px) {
    height: 12rem; /* md:h-48 */
  }
`;

const ContentCenter = ({ children, top, center, bottom, className }) => {
  return (
    <CenterContainer className={className}>
      {top && <Top>{top}</Top>}
      {center && <Center>{center}</Center>}
      {children}
      {/* Fallback for direct children if not using explicit slots, 
          though Vue slots usually map to props or direct children. 
          The Vue template used explicit named slots like <template #top>. 
          Here we accept props or checking if 'children' has specific types? 
          Simplest is to use props for slots. */}
      {bottom && <Bottom>{bottom}</Bottom>}
    </CenterContainer>
  );
};

export default ContentCenter;
