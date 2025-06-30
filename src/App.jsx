import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import winningCombinations from "../winning-combinations";
import GameOver from "./components/GameOver";

function deriveActivePlayer(gameTurn) {
  let currentPlayer = 'X';

  if (gameTurn.length > 0 && gameTurn[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [player, setPlayer] = useState({
    X: 'Player 1',
    O: 'Player 2'
  }); // This state changes when player enters save button and save the player name.

  const activePlayer = deriveActivePlayer(gameTurn);

  let gameBoard = [...initialGameBoard.map(array => [...array])]; // Here we are creating the deep copy of initialGameBoard

  for (const turn of gameTurn) {
    const { square, player } = turn;
    gameBoard[square.row][square.col] = player
  }

  let winner;

  for (const combination of winningCombinations) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSymbol && firstSymbol == secondSymbol && firstSymbol == thirdSymbol) {
      winner = player[firstSymbol];
    }
  }
  const draw = gameTurn.length >= 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {

    setGameTurn((prevTurn) => {
      let currentPlayer = deriveActivePlayer(prevTurn);
      return [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurn]
    });
  }

  function handleSetPlayerName(symbol, newPlayerName) {
    setPlayer(prevPlayer => {
      return {
        ...prevPlayer,
        [symbol]: newPlayerName
      }
    });
  }

  function resetGame() {
    setGameTurn([]);
  }

  return (
    <main>
      <div id="game-container">

        <ol id="players" className="highlight-player">
          <Player name="Player1" symbol="X" isActive={activePlayer == 'X'} handleSetPlayerName={handleSetPlayerName} />
          <Player name="Player2" symbol="O" isActive={activePlayer == 'O'} handleSetPlayerName={handleSetPlayerName} />
        </ol>
        {(winner || draw) && <GameOver winner={winner} onResetGame={resetGame} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  )
}

export default App
