export interface ICard {
  id: number;
  question: string;
  answer: string;
  category: string;
  imageUrl?: string;
  createdAt: Date;
  isLearned: boolean;
}
