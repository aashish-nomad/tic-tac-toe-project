import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleButtonClick(rowIndex, colIndex) {
    setGameBoard((prevValue) => {
      const updatedBoard = [...prevValue.map((arrays) => [...arrays])] // It is important that we do not mutate the state but make a copy of it.
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectSquare();
  }

  return (<ol id="game-board">
    {gameBoard.map((row, rowIndex) => {
      return <li key={rowIndex}>
        <ol>
          {row.map((col, colIndex) => <li key={colIndex}>
            <button onClick={() => handleButtonClick(rowIndex, colIndex)}>{col}</button>
          </li>)}
        </ol>
      </li>
    })}
  </ol>)
}