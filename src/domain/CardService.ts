export interface CardData {
  id: number;
  months: string;
  type: string;
  title: string;
  description: string;
  price: string;
}

const cardData: CardData[] = [
  { id: 1, months: "3 months", type: "Base", title: "Карточка 1", description: "Описание", price: "1000" },
  { id: 2, months: "6 months", type: "Premium", title: "Карточка 2", description: "Описание", price: "2000" },
];

export default class CardService {
  static getCardData(): CardData[] {
    return cardData;
  }
}
