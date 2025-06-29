export default function Log({turns}) {
  return (<ol id="log">
    {turns.map( turn => {
      return <li key={`${turn.square.row},${turn.square.col}`}>{turn.player} Selected {turn.square.row} row and {turn.square.col} column cell.</li>
    } )}
  </ol>);
}