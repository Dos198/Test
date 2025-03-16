import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import { useTheme } from '../context/ThemeContext';

const FinalSectionStyled = styled.div`
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  border-radius: ${props => props.theme.borderRadius};
  text-align: center;
  animation: slideUp 0.5s ease-out;
  width: 95%;
  max-width: 900px;
  min-height: 280px;
`;

const FinalSectionTitle = styled.h2`
  color: white;
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const FinalSection: React.FC = () => {
  const theme = useTheme();

  return (
    <FinalSectionStyled className="final-section" theme={theme}>
      <FinalSectionTitle className="final-section__title">ДО КОНЦА АКЦИИ МЕНЬШЕ НЕДЕЛИ!</FinalSectionTitle>
      <Form showCheckbox={true} buttonText="Получить консультацию" />
    </FinalSectionStyled>
  );
};

export default FinalSection;
