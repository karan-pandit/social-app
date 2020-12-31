import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
//Pages
import {Home, Login, Signup} from './pages'

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

//Components
import {Navbar} from './components';
import {AuthRoute} from './utils';

//MUI Stuff
import {useStyles} from './styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {theme} from './theme';
import {ThemeProvider} from '@material-ui/core/styles';

let authenticated;
const token = localStorage.FBIdToken;
if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()){
    authenticated = false;
  } else {
    authenticated = true;
  }
}
export const App = () => {
  const classes = useStyles();
  return (
    <>
    <Provider store={store}>
    <CssBaseline/>
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
    <div className={classes.container}>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <AuthRoute path='/login' component={Login} authenticated={authenticated}/>
        <AuthRoute path='/signup' component={Signup} authenticated={authenticated}/>
      </Switch>
    </Router>
    </div>
    </div>
    </ThemeProvider>
    </Provider>
    </>
  );
}

