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
  //const cmaj = chordsData.chords.C[0].key;
  const cmajDiatonicChords = ['Cmaj','Dmin','Emin','Fmaj','Gmaj','Amin','Bdim'];
  let allChords = [];

  for (const key in chordsData.chords) {
    const chords = chordsData.chords[key];

    chords.forEach( (chord) => {
      let chordItem = {
        key: chord.key,
        suffix: chord.suffix,
        positions: chord.positions
      }
      
      allChords.push(chordItem);
    });
  }

  let filteredChords = [];
  
  filteredChords = allChords.filter(( chord ) => {
    if (chord.key === 'B') {
      return true;
    }
  });

  console.log(chordsData.chords);
  console.log(filteredChords); //acá deben ir todos los acordes para usar filter() después ;), funciona lol, ahora solo debes filtrar por key y suffix

  return (
    <div className="App">
      <p>
        Aquí vas a ver acordes, este es C major :o
      </p>

      <div style={{width: "200px"}}>
        <MyChord />
      </div>
    </div>
  );
}

export default App;