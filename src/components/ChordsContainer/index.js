import React from 'react';

import ChordImage from '../ChordImage';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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
                <Grid item xs={3} key={chord.key+chord.suffix}>
                     <Paper className={classes.paper}><ChordImage chordData={chord}/></Paper>
                </Grid>
            );
            })
        );
    });

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {chordsToRender}
            </Grid>
        </div>
    );
}
 
export default ChordsContainer;