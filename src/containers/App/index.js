import * as chordsData from '../../lib/guitar.json';

function App() {
  const cmaj = chordsData.chords.C[0].positions[0].frets.map( (value) => {
    return <li>{value}</li>;
  });
  return (
    <div className="App">
      <p>
        Aquí vas a ver acordes, este es C major :o
      </p>
      <ul>
        {cmaj}
      </ul>
    </div>
  );
}

export default App;
