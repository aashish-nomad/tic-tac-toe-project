import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";

function deriveActivePlayer(gameTurn) {
  let currentPlayer = 'X';

  if (gameTurn.length > 0 && gameTurn[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurn);

  function handleSelectSquare(rowIndex, colIndex) {

    setGameTurn((prevTurn) => {
      let currentPlayer = deriveActivePlayer(prevTurn);
      return [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurn]
    });
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player1" symbol="X" isActive={activePlayer == 'X'} />
          <Player name="Player2" symbol="O" isActive={activePlayer == 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurn} />
      </div>
      <Log turns={gameTurn} />
    </main>
  )
}

export default App
