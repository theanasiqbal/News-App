// src/SelectComponent.js
import React, { useState } from 'react';

const SelectComponent = ({ sort, setSort }) => {
  

  const handleChange = (event) => {
    const value = event.target.value;
    setSort(value);
    ;
  };

  return (
    <div className="flex flex-col items-center">
      <label htmlFor="sortOptions" className="mb-2 text-lg font-medium text-gray-700">
        Sort by:
      </label>
      <select
        id="sortOptions"
        value={sort}
        onChange={handleChange}
        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="relevancy">Relevancy</option>
        <option value="popularity">Popularity</option>
        <option value="publishedAt">Published At</option>
      </select>
    </div>
  );
};

export default SelectComponent;
