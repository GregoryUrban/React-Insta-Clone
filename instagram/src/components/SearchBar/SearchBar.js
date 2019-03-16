import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
      <div className='search-bar'>
        <div className='logo'>
          <img src='instagram\design\icons8-instagram-26.png' />
        </div>
        <input type="text" placeholder="Search" />

      </div>
    );
  };

export default SearchBar;