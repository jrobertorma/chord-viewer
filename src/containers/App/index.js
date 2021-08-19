import * as chordsData from '../../lib/guitar.json';
import Chord from '@tombatossals/react-chords/lib/Chord';

const MyChord = () => {
  const chord = {
      frets: [1, 3, 3, 2, 1, 1],
      fingers: [1, 3, 4, 2, 1, 1],
      barres: [1],
      capo: false,
  }
  const instrument = {
      strings: 6,
      fretsOnChord: 4,
      name: 'Guitar',
      keys: [],
      tunings: {
          standard: ['E', 'A', 'D', 'G', 'B', 'E']
      }
  }
  const lite = false // defaults to false if omitted
  return (
      <Chord
          chord={chord}
          instrument={instrument}
          lite={lite}
          
      />
  )
}

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
    <div style={{width: "200px"}}>
      <MyChord />
    </div>
      
      
    </div>
  );
}

export default App;