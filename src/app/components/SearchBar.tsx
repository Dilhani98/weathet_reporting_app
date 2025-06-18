"use client";
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

type SearchBarProps = {
    // Define your props here, e.g.:
     onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = (props) => {

    const [query, setQuery] = useState('');

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(e.target.value);
        };

        const handleSubmit = (e: React.FormEvent) => {
             e.preventDefault();
             props.onSearch(query);
        };
        
    return (
        <form onSubmit={handleSubmit} className="flex items-center">
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <AiOutlineSearch className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                        placeholder="Search..."
                        value={query}
                        onChange={handleChange}
                    />
                </div>
            </form>
    );
};

export default SearchBar;


