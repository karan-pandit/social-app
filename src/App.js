import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
//Pages
import {Home, Login, Signup, User} from './pages'

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';

//Components
import {Navbar} from './components';
import {AuthRoute} from './utils';

//MUI Stuff
import {useStyles} from './styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {theme} from './theme';
import {ThemeProvider} from '@material-ui/core/styles';

import axios from 'axios';

axios.defaults.baseURL =
  'https://australia-southeast1-social-1db31.cloudfunctions.net/api';

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
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
        <AuthRoute path='/login' component={Login}/>
        <AuthRoute path='/signup' component={Signup}/>
        <Route exact path="/users/:handle" component={User} />
        <Route exact path="/users/:handle/scream/:screamId" component={User}/>
      </Switch>
    </Router>
    </div>
    </div>
    </ThemeProvider>
    </Provider>
    </>
  );
}

