import React from 'react';

import ChordImage from '../ChordImage';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const ChordsContainer = ({filteredChords}) => {
    const classes = useStyles();

    const chordsToRender = filteredChords.map( element => {
        return (
            element.map(chord => {
            return (
                <Box p={1} key={chord.key+chord.suffix}>
                    <Paper className={classes.paper}><ChordImage chordData={chord}/></Paper>
                </Box>
            );
            })
        );
    });

    return (
        <Box display="flex">
            {chordsToRender}
        </Box>
    );
}
 
export default ChordsContainer;