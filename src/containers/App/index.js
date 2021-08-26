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

/**
 * Transforms the chordsData object into an Array
 * 
 * @param {Array} rawChords - The chord object stored on ChordsData
 * @returns {Array} An array with all the chords in the format [{object},{object},...] 
 */
const parseAllChords = (rawChords) => {
  let allChords = [];

  for (const key in rawChords) {
    const chords = rawChords[key];

    chords.forEach( (chord) => {
      let chordItem = {
        key: chord.key,
        suffix: chord.suffix,
        positions: chord.positions
      }
      
      allChords.push(chordItem);
    });
  }

  return allChords;
}

/**
 * Filters a set of chords an returns the matching chord or chords based on key and suffix props
 * 
 * @param {Array} chordset - The parsed chordset returned by parseAllChords();
 * @param {Object} chordToFilter - An object with the format: { key: 'C', suffix: 'major' }
 * @returns {Array} filteredChords - The array returned by a filter() calling over the chordset based on chordToFilter
 */
const filterChordsByKeyAndSuffix = ( chordset, chordToFilter ) => {
  //en este punto del flujo estás dentro de un map, cada row del array llama a esta función, lo que retornes
  //aquí se va a guardar en el array generado por el susodicho.

  const filteredChords = chordset.filter(( chord )=>{
    if ( chord.key === chordToFilter.key && chord.suffix === chordToFilter.suffix ){
      return true;
    }
    else{
      return false;
    }
  });

  return filteredChords;
}

function App() {
  const cmajDiatonicChords = [
    { key: 'C', suffix: 'major' },
    { key: 'D', suffix: 'minor' },
    { key: 'E', suffix: 'minor' },
    { key: 'F', suffix: 'major' },
    { key: 'G', suffix: 'major' },
    { key: 'A', suffix: 'minor' },
    { key: 'B', suffix: 'dim' }
  ];

  const rawChords = chordsData.chords; 
  const allParsedChords = parseAllChords(rawChords);
  let filteredChords = [];
  let chordsToRender = '';

  filteredChords = cmajDiatonicChords.map(( chord )=>{
    return filterChordsByKeyAndSuffix(allParsedChords, chord);
  });
  
  //console.log(chordsData.chords);
  console.log(filteredChords); //acordes filtrados según un set de acordes provisto, es una matriz de una columna, ¿lo cambiamos?

  chordsToRender = filteredChords.map( element => {
    return (
      element.map(chord => {
        return (
          <div key={chord.key+chord.suffix}>{chord.key+chord.suffix}</div>
        );
      })
    );
  });

  return (
    <div className="App">
      <p>
        Aquí vas a ver acordes, este es Bdim :o
      </p>

      <div style={{width: "200px"}}>
        <MyChord />
      </div>

      {chordsToRender}
    </div>
  );
}

export default App;