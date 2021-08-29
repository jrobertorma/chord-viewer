import ChordsetSelectorForm from '../ChordsetSelectorForm';

import Typography from '@material-ui/core/Typography';

function App() {
  
  return (
    <div className="App">
      <Typography variant="h4" gutterBottom>
        Diatonic Chords Viewer
      </Typography>
      <ChordsetSelectorForm />
    </div>
  );
}

export default App;