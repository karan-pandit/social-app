import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Pages
import {home, login, signup} from './pages'

//Components
import {Navbar} from './components';

//MUI Stuff
import {useStyles} from './styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {theme} from './theme'
import {ThemeProvider} from '@material-ui/core/styles';


export const App = () => {
  const classes = useStyles();
  return (
    <>
    <CssBaseline/>
    <ThemeProvider theme={theme}>
    <div className={classes.container}>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={home}/>
        <Route path='/login' component={login}/>
        <Route path='/signup' component={signup}/>
      </Switch>
    </Router>
    </div>
    </ThemeProvider>
    </>
  );
}

