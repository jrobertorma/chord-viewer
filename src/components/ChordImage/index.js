import React from 'react';
import Chord from '@tombatossals/react-chords/lib/Chord';

import Typography from '@material-ui/core/Typography';

const ChordDiagram = ({chordPositions}) => {
    
    const chord = {
        frets: chordPositions.frets,
        fingers: chordPositions.fingers,
        barres: chordPositions.barres,
        capo: chordPositions.capo ? chordPositions.capo : false,
        baseFret: chordPositions.baseFret,
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

    return ( 
        <div style={{'minWidth':'144px'}}> 
            <Typography variant="h6" gutterBottom>
                {chordData.key+" "+chordData.suffix}
            </Typography>
            <ChordDiagram chordPositions={chordData.positions[position]}/>
        </div>);
}
 
export default ChordImage;

/**
 * Agregamos una 'clickable surface' en el contenedor?
 * en el listener del onClick le ponemos el generador MIDI?
 */

var context = null;
var oscillator = null;
function getOrCreateContext() {
  if (!context) {
    context = new AudioContext();
    oscillator = context.createOscillator();
    oscillator.connect(context.destination);
  }
  return context;
  
}

let isStarted = false;
function noteOn(midiNote) {
    getOrCreateContext();
    const freq = Math.pow(2, (midiNote-69)/12)*440;
    oscillator.frequency.setTargetAtTime(freq, context.currentTime, 0);
    if (!isStarted) {
      oscillator.start(0);
      isStarted = true;
    } else {
      context.resume();
    }
}

function noteOff() {
    context.suspend();
}

noteOn(key);
noteOff();