import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup variant="contained">
          {' '}
          <Button startIcon={<SaveIcon />} size="large" color="primary">
            Save
          </Button>
          <Button startIcon={<DeleteIcon />} size="large" color="secondary">
            Discard
          </Button>
        </ButtonGroup>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
