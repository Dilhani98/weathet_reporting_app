'use client';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';

const SearchBar = ({ onSearch }: { onSearch: (city: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    onSearch(searchTerm.trim());
    setSearchTerm('');
  };

  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <div className="relative w-72">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <AiOutlineSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
          placeholder="Enter city name"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>
    </form>
  );
};

export default SearchBar;
