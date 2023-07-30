import React, { useState, useEffect } from 'react';

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8001/bots');
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.length === 0 ? (
        <p>Loading bots...</p>
      ) : (
        <ul>
          {bots.map((bot) => (
            <li key={bot.id}>
              <h3>{bot.name}</h3>
              <p>Category: {bot.category}</p>
              <p>Special Ability: {bot.specialAbility}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BotCollection;

