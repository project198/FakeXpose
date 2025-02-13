import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import AboutSection from '../components/AboutSection';
import { faqs } from '../data/sampleData';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <SearchBar />
        
        <AboutSection />

        {/* FAQs Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                <a href="/faqs" className="text-blue-600 hover:text-blue-800 font-medium">
                  View All →
                </a>
              </div>
              
              <div className="space-y-8">
                {faqs.map((faq) => (
                  <div key={faq.id} className="border-b border-gray-200 pb-6 last:border-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}