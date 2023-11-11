// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './CardList';
import './index.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${currentPage}&name=${searchTerm}`
        );
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage, searchTerm]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
      <h1 className="heading">Rick and Morty Card App</h1>
      <input
        type="text"
        placeholder="Search characters"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="searchInput"
      />
      <CardList characters={characters} />
      <div className="pagination">
        <button onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}>
          Previous Page
        </button>
        <span>Page {currentPage}</span>
        <button onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>Next Page</button>
      </div>
      <div>
        <label>
          Dark Mode
          <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        </label>
      </div>
    </div>
  );
};

export default App;
