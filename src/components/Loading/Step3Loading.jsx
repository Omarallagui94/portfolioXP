import React from 'react';
import styled from 'styled-components';
import ContentCenter from './ContentCenter';

const LogoContainer = styled.div`
  width: 16rem; /* w-64 */
  margin-left: 1.25rem; /* ml-5 */
  margin-bottom: 2.5rem; /* mb-10 */
  
  @media (min-width: 768px) {
    width: 33.333333%; /* w-4/12 */
  }
`;

const Step3Loading = () => {
    return (
        <ContentCenter
            top={<div />} // Renders the default styled Top bar
            center={
                <LogoContainer>
                    {/* Placeholder for logo-portfolio-black.webp */}
                    <h2 style={{ fontSize: '2em' }}>Loading...</h2>
                </LogoContainer>
            }
            bottom={<div />} // Renders the default styled Bottom bar
        />
    );
};

export default Step3Loading;
