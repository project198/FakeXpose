export type FactRating = 'True' | 'False' | 'Partially True' | 'Unverified';

export interface Article {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  category: string;
  rating: FactRating;
  date: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}