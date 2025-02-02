import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="relative max-w-xl mx-auto mb-8">
      <input
        type="text"
        placeholder="Search resources..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
    </div>
  );
};

export default SearchBar;
