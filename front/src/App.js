import React from 'react';
import SignUp from './SignUp.js';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid, Paper } from "@material-ui/core";

const theme = createMuiTheme();

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Grid 
          container
          alignItems='center'
          style={{ height: '100%' }}>
          <Grid 
            item xs={12}>
            <Paper
              elevation={4}
              style={{ margin: 150 }}>
              <Grid 
                container
                alignItems='center'
                justify='center'
                style={{ textAlign: 'center' }}>          
                <img  src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="Homer eating donut" />
                <Grid  
                  item xs={12} sm={2}
                  alignContent='center'>
                  <SignUp />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default App;