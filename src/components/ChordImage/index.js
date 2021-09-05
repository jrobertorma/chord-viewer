import React from 'react';
import Chord from '@tombatossals/react-chords/lib/Chord';

import Typography from '@material-ui/core/Typography';

const ChordDiagram = ({chordPositions}) => {
    const chord = {
        frets: chordPositions.frets,
        fingers: chordPositions.fingers,
        barres: chordPositions.barres,
        capo: chordPositions.capo ? chordPositions.capo : false,
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

const ChordImage = (props) => {
    const chordData = props.chordData;
    const position = props.position;
    console.log(chordData);

    return ( 
        <div style={{'minWidth':'144px'}}> 
            <Typography variant="h6" gutterBottom>
                {chordData.key+" "+chordData.suffix}
            </Typography>
            <ChordDiagram chordPositions={chordData.positions[position]}/>
        </div>);
}
 
export default ChordImage;