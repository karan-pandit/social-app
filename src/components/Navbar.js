import React from 'react';
import { Link } from 'react-router-dom';
import {PostScream} from './PostScream';
import {Notifications} from './Notifications';

import { useSelector } from 'react-redux';

//MUI Stuff
import {useStyles} from '../styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

export const Navbar = () => {
    const classes = useStyles();
    const authenticated = useSelector(state => state.user.authenticated)
    return (
        <AppBar>
            <Toolbar className={classes.navContainer}>
            {authenticated ? (
            <>
              <PostScream />
              <Link to="/">

              <Tooltip title="Home">
                    <IconButton>
                    <HomeIcon />
                    </IconButton>
                </Tooltip>
              </Link>
              <Notifications />
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </>
          )}
            </Toolbar>
        </AppBar>
    )
}