import React from 'react';
import './SearchBar.css';

import logo from '../imgs/logo-instagram.jpg';
import compass from '../imgs/iconfinder_Compass-01_1976058 (1).png';
import heart from '../imgs/iconfinder_heart_430099.png';
import person from '../imgs/iconfinder_outlined_account_4280505.png';
import magglass from '../imgs/iconfinder_zoom-normal-regular_2931184.png'


const SearchBar = (props) => {
  return (
    <div className = 'searchbar-container'>
      <div className = 'left'>
        <img src = {logo} alt = 'logo'/>
        <p>|</p>
        <h1 className = 'logo'> Instagram </h1>
      </div>


      <input
        type = 'text'
        name = 'searchTerm'
        placeholder= ' Search'
        className = 'searcher'
      />
      <div className= 'right'>
        <img src = {compass} alt = 'compass'/>
        <img src = {heart} alt = 'heart'/>
        <img src = {person} alt = 'person' />
      </div>

    </div>


  )


};

export default SearchBar;
