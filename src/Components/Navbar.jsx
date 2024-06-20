import React, { useState } from 'react';

const Navbar = ({inputValue, setInputValue, onsearch}) => {
  

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

 

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">News App</div>
      <div className="flex space-x-4">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#trending" className="hover:text-gray-400">Trending</a>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search..."
          className="p-2 text-black rounded mr-2"
        />
        <button
          onClick={onsearch}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
