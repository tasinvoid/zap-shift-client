// src/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // Trigger search directly on change
    onSearch(value.trim());
  };

  return (
    <div className="mb-4 flex gap-2"> {/* Changed from <form> to <div> */}
      <input
        type="text"
        placeholder="Search district or city..."
        value={searchTerm}
        onChange={handleChange}
        className="input input-bordered w-full max-w-xs" // Tailwind/DaisyUI input styling
      />
      {/* Removed the button */}
    </div>
  );
};

export default SearchBar;