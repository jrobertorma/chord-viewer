import React from 'react';

import * as chordsData from '../../lib/guitar.json';
import * as chordSets from '../../lib/chordSets.json';
import ChordsContainer from '../../components/ChordsContainer';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  selectField: {
    minWidth: 140,
    maxWidth: 180
  },
  chordsContainer: {
    marginTop: '1em'
  }
}));

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
 * Filters a set of chords an returns the matching chord or chords diagrams based on key and suffix props
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

const ChordSelectorForm = () => {
    const rawChords = chordsData.chords; //Original chordset, console.log(rawChords); console.log(allParsedChords);
    const allParsedChords = parseAllChords(rawChords); //converting the chordset into an array of objects

    const allDiatonicChordsets = chordSets; //console.log(allDiatonicChordsets.default.cmajDiatonicChords);

    const [chordsetKey, setChordsetKey] = React.useState('CmajDiatonicChords');
    const [filteredChords, setfilteredChords] = React.useState([]);

    const generateChordDiagrams = ( chordsKey ) => {
        const chordDiagrams = allDiatonicChordsets.default[chordsKey].map(( chord )=>{
            return filterChordsByKeyAndSuffix(allParsedChords, chord);
        });

        return chordDiagrams;
    }

    const handleChange = (event) => {
        setChordsetKey(event.target.value);
    };

    const handleSubmit = (event) => {
        const chordsKey = {chordsetKey}.chordsetKey; 
        //console.log (allDiatonicChordsets.default[chordsKey]);

        //filtering the chords, and generating the diagrams
        const fChords = generateChordDiagrams(chordsKey);
        //console.log(fChords);

        setfilteredChords(fChords);
    }

    const chordsetsKeys = Object.keys(allDiatonicChordsets.default);

    const classes = useStyles();

    return (
        <div>
            <form noValidate autoComplete="off">
                <Grid container spacing={2} alignItems="center"> 
                    <Grid item xs={6} sm={4} md={2}> 
                        <TextField
                            id="standard-select-key"
                            select
                            label="Chordset Key"
                            value={chordsetKey}
                            onChange={handleChange}
                            helperText="Please select the key"
                            className={classes.selectField}
                        >
                            {
                                chordsetsKeys.map( (key) => {
                                    let placeholderValue = allDiatonicChordsets.default[key];
                                    return (
                                        <MenuItem key={key} value={key}>
                                            {placeholderValue[0].key+" "+placeholderValue[0].suffix}
                                        </MenuItem>
                                    )
                                })
                            }
                        </TextField>
                    </Grid>

                    <Grid item xs={6} sm={4} md={3}>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Show diatonic chords
                        </Button>
                    </Grid>
                </Grid>
            </form>
            
            <div className={classes.chordsContainer}>
                <ChordsContainer filteredChords={filteredChords} />
            </div>
        </div>
    );
}
 
export default ChordSelectorForm;