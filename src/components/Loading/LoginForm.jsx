import React from 'react';
import styled from 'styled-components';
import profilePic from '../../assets/pic.png';

const LoginButton = styled.div`
  position: absolute;
  height: 7rem; /* h-28 */
  width: 100vw;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 58.333333%; /* md:w-7/12 */
  }
`;

const InnerContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 0.75rem; /* rounded-xl */
  /* bg-color-login-blue approximation */
  background-color: rgba(66, 165, 245, 0.8);
  display: flex;
  align-items: center;
  padding: 0.625rem 1.5rem; /* py-2.5 px-6 */
  border: 1px solid white; /* stroke-white-1 */

  &:hover {
    background-color: rgba(66, 165, 245, 1);
  }
`;

const ProfilePic = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  border-radius: 4px;
  border: 2px solid yellow; /* stroke-yellow-2 */
`;

const LoginForm = ({ onLogin }) => {
  return (
    <div
      className="flex items-center"
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        height: '100px',
        width: '100%',
      }}
    >
      <LoginButton onClick={onLogin}>
        <InnerContainer>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              color: 'white',
            }}
          >
            <div>
              <ProfilePic src={profilePic} alt="Omar" />
            </div>
            <div>
              <h2 style={{ fontSize: '1.5rem' }}>Omar</h2>
            </div>
          </div>
        </InnerContainer>
      </LoginButton>
    </div>
  );
};

export default LoginForm;
