import CardService, { CardData } from './CardService';

export default class CardViewModel {
  private cards: CardData[];

  constructor() {
    this.cards = CardService.getCardData();
  }

  getCards(): CardData[] {
    return this.cards;
  }

  getCardById(id: number): CardData | undefined {
    return this.cards.find(card => card.id === id);
  }
}
