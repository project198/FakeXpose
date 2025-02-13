import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search FakeXpose..."
          className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 pr-12"
        />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <Search className="h-6 w-6 text-gray-400 hover:text-blue-500" />
        </button>
      </div>
    </div>
  );
}