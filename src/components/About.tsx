import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const AboutSection = styled.div`
  margin-bottom: 40px;
  width: 100%;
  box-sizing: border-box;
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
`;

const AboutTitle = styled.h2`
  text-transform: uppercase;
  font-size: 1.5em;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: left;
  width: 100%;
`;

const AboutText = styled.div`
  flex: 1;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    font-size: 0.9em;
    line-height: 1.6;
    color: #444;
    font-weight: normal;
    text-align: left;
  }
`;

const AboutImage = styled.img`
  width: 50%;
  height: auto;
  border-radius: ${props => props.theme.borderRadius};
`;

const About: React.FC = () => {
  const theme = useTheme();

  return (
    <AboutSection className="about-section">
      <AboutTitle className="about-section__title">О НАС</AboutTitle>
      <AboutContent className="about-section__content">
        <AboutText className="about-section__text">
          <p><strong>Какая-то компания</strong> — стартап IT компания, занимающаяся <span className="about-section__text--right-aligned">разработкой сторонних решений</span>.</p>
          <p>Мы придерживаемся подходов TDD, DDD, Clean Code. Качество всегда в приоритете.</p>
        </AboutText>
        <AboutImage className="about-section__image" src="/image.png" alt="About Us" theme={theme} />
      </AboutContent>
    </AboutSection>
  );
};

export default About;
