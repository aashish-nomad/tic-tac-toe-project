import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export default function GameBoard({ onSelectSquare, turns }) {

  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    gameBoard[square.row][square.col] = player
  }

  return (<ol id="game-board">
    {gameBoard.map((row, rowIndex) => {
      return <li key={rowIndex}>
        <ol>
          {row.map((col, colIndex) => <li key={colIndex}>
            <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{col}</button>
          </li>)}
        </ol>
      </li>
    })}
  </ol>)
}