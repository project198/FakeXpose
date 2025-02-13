import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const getRatingColor = (rating: Article['rating']) => {
    switch (rating) {
      case 'True':
        return 'bg-green-100 text-green-800';
      case 'False':
        return 'bg-red-100 text-red-800';
      case 'Partially True':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">{article.category}</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRatingColor(article.rating)}`}>
            {article.rating}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
        <p className="text-gray-600 mb-4">{article.summary}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{article.date}</span>
          <a
            href={`/article/${article.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
}