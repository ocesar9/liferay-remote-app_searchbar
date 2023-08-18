import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    if (event.target.value === '') {
      onSearch(''); 
    }
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (event.key === 'Enter' || event.type === 'submit') {
      onSearch(query);
    }
  };

  return (
    <section className="liferay-search-bar">
      <form onSubmit={handleSearch}>
        <div className='liferay-search-bar__form-container'>
          <button
            type="submit"
            aria-label="Submit Button"
          >
            Search
          </button>
          <input
            type="text"
            placeholder="Click to search"
            value={query}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchBar;