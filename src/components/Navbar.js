import React from 'react'
import { useHistory } from 'react-router-dom'

//MUI Stuff
import {useStyles} from '../styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export const Navbar = () => {
    const classes = useStyles();
    let history = useHistory()
    return (
        <AppBar>
            <Toolbar className={classes.navContainer}>
                <Button color='inherit' onClick={() => history.push('/')}><Typography>HOME</Typography></Button>
                <Button color='inherit' onClick={() => history.push('/login')}><Typography>LOGIN</Typography></Button>
                <Button color='inherit' onClick={() => history.push('/signup')}><Typography>SIGNUP</Typography></Button>
            </Toolbar>
        </AppBar>
    )
}