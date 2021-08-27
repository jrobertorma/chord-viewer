import * as chordsData from '../../lib/guitar.json';
import ChordsContainer from '../../components/ChordsContainer';

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

  const dmajDiatonicChords = [
    { key: 'D', suffix: 'major' },
    { key: 'E', suffix: 'minor' },
    { key: 'F#', suffix: 'minor' },
    { key: 'G', suffix: 'major' },
    { key: 'A', suffix: 'major' },
    { key: 'B', suffix: 'minor' },
    { key: 'C#', suffix: 'dim' }
  ];

  const rawChords = chordsData.chords; //Original chordset, console.log(rawChords); console.log(allParsedChords);
  const allParsedChords = parseAllChords(rawChords); //converting the chordset into an array of objects
  let filteredChords = []; //will contain an array of filtered chord objects

  //filtering the chords
  filteredChords = cmajDiatonicChords.map(( chord )=>{
    return filterChordsByKeyAndSuffix(allParsedChords, chord);
  });

  return (
    <div className="App">
      <p>
        Diatonic Chords Viewer
      </p>
      <ChordsContainer filteredChords={filteredChords} />
    </div>
  );
}

export default App;