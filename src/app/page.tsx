"use client";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log("Search Query:", query);
    // add search logic if needed
  };

  return (
    <main className="bg-[url('/background.webp')] bg-cover bg-center bg-fixed min-h-screen flex flex-col items-center justify-center p-24">
      <SearchBar onSearch={handleSearch} />
      {searchQuery && (
        <p className="mt-4 text-white text-lg bg-black bg-opacity-50 px-4 py-2 rounded">
          Searching for: {searchQuery}
        </p>
      )}
      
    </main>
  );
}
