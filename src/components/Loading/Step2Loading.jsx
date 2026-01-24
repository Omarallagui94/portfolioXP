import React from 'react';
import styled from 'styled-components';
import ContentCenter from './ContentCenter';
import LoadingBar from './LoadingBar';

const LogoContainer = styled.div`
  width: 16rem; /* w-64 */
  margin-left: 1.25rem; /* ml-5 */

  @media (min-width: 768px) {
    width: 33.333333%; /* w-4/12 */
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

const WelcomeText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  color: white;
`;

const H1 = styled.h1`
  font-size: 0.875rem; /* text-sm */
  @media (min-width: 768px) {
    font-size: 1.25rem; /* text-xl */
  }
`;

const H2 = styled.h2`
  font-size: 1rem; /* text-md */
  letter-spacing: -0.05em; /* tracking-tighter */
  font-weight: 600;
  font-family: 'Helvetica', sans-serif;
  @media (min-width: 768px) {
    font-size: 1.5rem; /* text-2xl */
  }
`;

const Step2Loading = () => {
  return (
    <ContentCenter
      className="bg-black"
      center={
        <LogoContainer>
          {/* Placeholder text for missing image */}
          <h2 style={{ color: 'white', fontSize: '2em' }}>UnMugViolet</h2>
        </LogoContainer>
      }
      bottom={
        <FooterContainer className="app-container">
          <div>
            <WelcomeText>
              <div>
                <H1>Welcome</H1>
              </div>
              <div>
                <H2>UnMugViolet</H2>
              </div>
            </WelcomeText>
          </div>
        </FooterContainer>
      }
    >
      {/* LoadingBar positioned at bottom-center logically/visually in the original.
          The Vue template had a specific #bottom-center slot which we didn't explicitly create in ContentCenter.
          We can put it in the main children area or adjust ContentCenter. 
          For now let's put it as a direct child which renders after center but before bottom.
       */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 'auto',
          marginBottom: '15rem',
        }}
      >
        <LoadingBar />
      </div>
    </ContentCenter>
  );
};

export default Step2Loading;
