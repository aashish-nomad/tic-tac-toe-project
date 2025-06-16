import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ?
          <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
          :
          <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing(curVal => !curVal)}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}