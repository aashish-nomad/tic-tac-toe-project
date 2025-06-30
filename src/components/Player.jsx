import { useState } from "react";

export default function Player({ name, symbol, isActive, handleSetPlayerName }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditSaveClick() {
    setIsEditing(curVal => !curVal);

    if (isEditing) {
      handleSetPlayerName(symbol, playerName);
    }
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ?
          <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
          :
          <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditSaveClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}