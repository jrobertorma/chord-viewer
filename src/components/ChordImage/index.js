import React, { Component } from 'react';
import Chord from '@tombatossals/react-chords/lib/Chord';

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
    const chordData = props.chordData
    console.log(chordData);
    

    return ( 
        <div> 
            <p>{chordData.key+chordData.suffix}</p>
            <div style={{width: "200px"}}>
                <ChordDiagram chordPositions={chordData.positions[0]}/>
            </div>
        </div>);
}
 
export default ChordImage;