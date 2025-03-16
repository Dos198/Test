import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

interface CardProps {
  headerMonths: string;
  headerType: string;
  title: string;
  description: string;
  price: string;
  type: 'base' | 'premium';
}

const CardStyled = styled.div<{ isPremium: boolean }>`
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  padding: 20px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadow};
  text-align: left;
  animation: fadeIn 0.5s ease-in;
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  ${props => props.isPremium && `border: 2px solid ${props.theme.primaryColor};`}
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CardHeaderSpan = styled.span`
  background-color: transparent;
  border: 0.5px solid #fff;
  padding: 2px 8px;
  width: 120px;
  border-radius: 25px;
  color: #fff;
  font-weight: 700;
  font-size: 0.9em;
  text-align: center;
`;

const CardDetailsButton = styled.button`
  background-color: #fff;
  color: #4a90e2;
  border: none;
  padding: 5px 15px;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.9em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 150px;
  margin-top: 40px;

  &:hover {
    background-color: #e0e0f0;
  }
`;

const Card: React.FC<CardProps> = ({ headerMonths, headerType, title, description, price, type }) => {
  const theme = useTheme();

  return (
    <CardStyled className={`card card--${type}`} isPremium={type === 'premium'} theme={theme}>
      <CardHeader className="card__header">
        <CardHeaderSpan>{headerMonths}</CardHeaderSpan>
        <CardHeaderSpan>{headerType}</CardHeaderSpan>
      </CardHeader>
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      <div className="card__price-row">
        <div className="card__price-container">
          <span className="card__price-label">Цена</span>
          <span className="card__price">{price}</span>
        </div>
      </div>
      <CardDetailsButton className="card__details-button">Подробнее</CardDetailsButton>
    </CardStyled>
  );
};

export default Card;
