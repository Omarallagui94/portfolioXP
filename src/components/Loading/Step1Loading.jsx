import React from 'react';
import styled from 'styled-components';
import ContentCenter from './ContentCenter';

const BlackScreen = styled(ContentCenter)`
  background: black !important;
`;

const Step1Loading = () => {
  return <BlackScreen />;
};

export default Step1Loading;
