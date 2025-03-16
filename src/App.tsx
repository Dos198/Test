import React from 'react';
import styled from 'styled-components';
import CardViewModel from './domain/CardViewModel';
import Header from './components/Header';
import About from './components/About';
import Card from './components/Card';
import FinalSection from './components/FinalSection';
import { ThemeProvider } from './context/ThemeContext';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AppStyled = styled.div`
  font-family: 'Roboto', sans-serif;
  max-width: 900px;
  margin: 0 auto;
  padding: 50px;
  background-color: #fff;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadow};
  color: #333;
`;

const CardsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AppTitle = styled.h2`
  text-align: left;
  color: #1a3c6e;
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 1.5em;
`;

const App: React.FC = () => {
  const viewModel = new CardViewModel();
  const cards = viewModel.getCards();

  return (
    <ThemeProvider>
      <AppStyled className="app">
        <Header />
        <About />
        <AppTitle>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</AppTitle>
        <CardsStyled className="cards">
          {cards.map((card) => (
            <Card
              key={card.id}
              headerMonths={card.months}
              headerType={card.type}
              title={card.title}
              description={card.description}
              price={card.price}
              type={card.id === 1 ? 'base' : 'premium'}
            />
          ))}
        </CardsStyled>
        <FinalSection />
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
