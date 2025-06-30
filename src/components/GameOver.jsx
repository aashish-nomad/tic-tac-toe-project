export default function GameOver({ winner, onResetGame }) {
  return <div id="game-over">
    <h2>Game Over</h2>
    {winner ? <p>{winner} Won!</p> : <p>It's a Draw!</p>}
    <p><button onClick={onResetGame}>Rematch!</button></p>
  </div>
}