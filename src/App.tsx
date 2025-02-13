import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import ArticleCard from './components/ArticleCard';
import { articles, politicsArticles, techArticles } from './data/sampleData';

function App() {
  const featuredArticle = articles[0];
  const trendingArticles = articles.slice(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Search Section */}
        <SearchBar />

        {/* Hero Section */}
        <section className="bg-blue-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Uncovering Truth in a World of Misinformation
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Your trusted source for fact-checking and debunking false claims.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700">
                  Start Exploring
                </button>
              </div>
              <div className="relative h-64 md:h-96">
                <img
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1000"
                  alt="Truth finding"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Fact Check</h2>
            <ArticleCard article={featuredArticle} />
          </div>
        </section>

        {/* News & Politics Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">News & Politics</h2>
              <a href="/news-politics" className="text-blue-600 hover:text-blue-800 font-medium">
                View All →
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {politicsArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* Science & Technology Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Science & Technology</h2>
              <a href="/science-tech" className="text-blue-600 hover:text-blue-800 font-medium">
                View All →
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {techArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* Trending Articles */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Trending Fact Checks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trendingArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App