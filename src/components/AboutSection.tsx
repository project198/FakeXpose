import React from 'react';

export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6">What Is FakeXpose?</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              /feɪkˈspoʊz/ NOUN and sometimes VERB
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              We are the internet's trusted destination for exposing misinformation and verifying facts in the digital age. Before you explore further, here's how to use FakeXpose:
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Search</h3>
              <p className="text-gray-600">
                Access our extensive database of fact-checks and investigations. You might want to bookmark our <a href="/archive" className="text-blue-600 hover:underline">archive page</a>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Discover</h3>
              <p className="text-gray-600">
                Explore trending topics and recent fact-checks on our{' '}
                <a href="/trending" className="text-blue-600 hover:underline">Top Stories</a> and{' '}
                <a href="/latest" className="text-blue-600 hover:underline">Latest Updates</a> pages.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Submit</h3>
              <p className="text-gray-600">
                Found something that needs fact-checking?{' '}
                <a href="/submit" className="text-blue-600 hover:underline">Send us a tip</a>.
                Your submission could be our next investigation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}