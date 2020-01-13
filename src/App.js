import React from 'react'
import './App.css';
import Router from './Router.js';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FCFAFB"
    },
    secondary: {
      main: "#202833"
    },
    success: {
      main: green[500],
      contrastText: "#fff"
    }
  }
});
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router />
    </MuiThemeProvider>
  );
}

export default App;