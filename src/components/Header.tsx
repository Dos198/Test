import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import { useTheme } from '../context/ThemeContext';

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10px 30px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadow};
  animation: fadeIn 0.5s ease-in;
  min-height: 410px;
`;

const LeftInfo = styled.div`
  flex: 1;
  color: white;
  width: 50%;
  padding-right: 20px;
  box-sizing: border-box;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainTitle = styled.h2`
  font-size: 1.9em;
  margin-bottom: -15px;
  text-align: left;
  color: white;
`;

const SubTitle = styled.h2`
  font-size: 1.3em;
  margin-bottom: 0px;
  text-align: left;
  color: white;
`;

const TextWithIcons = styled.div`
  margin-bottom: 15px;
  flex-grow: 1;

  p {
    font-size: 1.0em;
    margin: 15px 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  i {
    font-size: 1.2em;
  }
`;

const NoteAndButton = styled.div`
  margin-top: 15px;

  .note {
    font-style: italic;
    font-size: 0.9em;
    color: white;
    margin-bottom: 10px;
  }
`;

const DoneButton = styled.button`
  background-color: transparent;
  border: 2px solid ${props => props.theme.primaryColor};
  padding: 8px 0;
  width: 250px;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;

  &:hover {
    background-color: ${props => props.theme.primaryColor};
    color: #fff;
  }
`;

const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <HeaderSection className="header-section" theme={theme}>
      <LeftInfo className="header-section__left-info">
        <MainTitle className="header-section__main-title">ТЕСТОВОЕ ЗАДАНИЕ</MainTitle>
        <SubTitle className="header-section__sub-title">ВЫПОЛНЕН ВЕРСТКИ КОМПОНЕНТА</SubTitle>
        <TextWithIcons className="header-section__text-with-icons">
          <p><i className="fas fa-book"></i> Используйте чистый BEM, React контекст проработки, MVVM и CleanArchitecture</p>
          <p><i className="fas fa-th"></i> Flex и Grid системы верстки.</p>
        </TextWithIcons>
        <NoteAndButton className="header-section__note-and-button">
          <p className="header-section__note">Будем рады видеть вас в нашей команде :)</p>
          <DoneButton className="header-section__done-button" theme={theme}>Я все выполнил!</DoneButton>
        </NoteAndButton>
      </LeftInfo>
      <div className="header-section__form-wrapper">
        <Form buttonText="Записаться" showTitle={true} />
      </div>
    </HeaderSection>
  );
};

export default Header;
