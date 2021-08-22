import * as chordsData from '../../lib/guitar.json';
import Chord from '@tombatossals/react-chords/lib/Chord';

const MyChord = () => {
  const chord = {
      frets: [-1, 2, 0, -1, 0, 1],
      fingers: [0, 3, 0, 0, 0, 2],
      barres: [],
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
  //const cmajDiatonicChords = ['Cmaj','Dmin','Emin','Fmaj','Gmaj','Amin','Bdim'];
  const cmajDiatonicChords = [
    { key: 'C', suffix: 'major' },
    { key: 'D', suffix: 'minor' },
    { key: 'E', suffix: 'minor' },
    { key: 'F', suffix: 'major' },
    { key: 'G', suffix: 'major' },
    { key: 'A', suffix: 'minor' },
    { key: 'B', suffix: 'dim' }
  ];

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
        Aquí vas a ver acordes, este es Bdim :o
      </p>

      <div style={{width: "200px"}}>
        <MyChord />
      </div>
    </div>
  );
}

export default App;