import React, { useState } from 'react';

function YourBotArmy() {
  const [army, setArmy] = useState([]);

  const handleEnlistBot = (bot) => {
    if (!army.some((armyBot) => armyBot.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.length === 0 ? (
        <p>No bots enlisted in your army.</p>
      ) : (
        <ul>
          {army.map((bot) => (
            <li key={bot.id}>
              {bot.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default YourBotArmy;
