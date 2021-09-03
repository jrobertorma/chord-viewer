import ChordsetSelectorForm from '../ChordsetSelectorForm';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop:'1em',
    marginBottom: '0.5em'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="lg" >
        <Typography variant="h4" className={classes.title} gutterBottom>
          Diatonic Chords Viewer
        </Typography>
        <ChordsetSelectorForm />
      </Container>
    </div>
  );
}

export default App;