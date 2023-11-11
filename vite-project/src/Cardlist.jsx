// CardList.js
import React from 'react';

const CardList = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default CardList;
