import { Article, FAQ } from '../types';

export const articles: Article[] = [
  {
    id: '1',
    title: 'Did AI Really Write All Shakespeare\'s Plays?',
    summary: 'Recent viral claims suggesting AI wrote Shakespeare\'s works centuries ago are completely false.',
    imageUrl: 'https://images.unsplash.com/photo-1524668951403-d44b28200ce0?auto=format&fit=crop&q=80&w=800',
    category: 'Technology',
    rating: 'False',
    date: '2025-03-15',
  },
  {
    id: '2',
    title: 'Are Electric Cars Actually Worse for the Environment?',
    summary: 'Examining the full lifecycle impact of electric vehicles versus traditional combustion engines.',
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800',
    category: 'Science',
    rating: 'Partially True',
    date: '2025-03-14',
  },
  {
    id: '3',
    title: 'Does Drinking Water Really Boost Immunity?',
    summary: 'Investigating the scientific evidence behind popular health claims about water consumption.',
    imageUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=800',
    category: 'Health',
    rating: 'Partially True',
    date: '2025-03-13',
  },
];

export const politicsArticles: Article[] = [
  {
    id: '4',
    title: 'Fact Check: Government Spending Claims on Social Media',
    summary: 'Analyzing viral claims about recent government spending proposals and their accuracy.',
    imageUrl: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&q=80&w=800',
    category: 'Politics',
    rating: 'False',
    date: '2025-03-15',
  },
  {
    id: '5',
    title: 'Investigation: Electoral Process Misinformation',
    summary: 'Debunking widespread claims about electoral integrity and voting systems.',
    imageUrl: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=800',
    category: 'Politics',
    rating: 'False',
    date: '2025-03-14',
  }
];

export const techArticles: Article[] = [
  {
    id: '6',
    title: 'Latest AI Breakthrough: Separating Fact from Fiction',
    summary: 'Examining recent claims about artificial intelligence capabilities and limitations.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    category: 'Technology',
    rating: 'Partially True',
    date: '2025-03-15',
  },
  {
    id: '7',
    title: 'Quantum Computing Revolution: Reality Check',
    summary: 'Analyzing claims about quantum computing breakthroughs and their real-world impact.',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    category: 'Technology',
    rating: 'True',
    date: '2025-03-14',
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What does \'FakeXpose\' mean?',
    answer: 'FakeXpose is a combination of "Fake" and "Expose," representing our mission to expose and debunk false information circulating in media and online platforms.'
  },
  {
    id: '2',
    question: 'What makes FakeXpose a reliable resource?',
    answer: 'We employ rigorous fact-checking methodologies, rely on primary sources, and maintain transparency in our investigation process. Our team includes experienced researchers and subject matter experts.'
  },
  {
    id: '3',
    question: 'How can I submit content for fact-checking?',
    answer: 'You can submit content through our "Submit" page or email us directly. We review all submissions and prioritize based on public interest and potential impact.'
  },
  {
    id: '4',
    question: 'What is our fact-checking process?',
    answer: 'Our process involves thorough research, verification from multiple credible sources, expert consultation when necessary, and a rigorous review process before publication.'
  }
];