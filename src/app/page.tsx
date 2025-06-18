"use client";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

export default function Home() {
 const [searchQuery, setSearchQuery] = useState('');

const handleSearch = (query: string) => {
            setSearchQuery(query);
            console.log("Search Query:", query);
            // search logic 
        };

  return (
   <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <SearchBar onSearch={handleSearch} />
             {searchQuery && <p>Searching for: {searchQuery}</p>}
   </main>
  );
}
