import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom'

import {useStyles} from '../styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import Icon from '../assets/monkey.png'

// Redux stuff
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

export const Login = () => {
    const state = useRef({
        email:'',
        password:'',
    });
    const loading = useSelector(state => state.UI.loading);
    const errors = useSelector(state => state.UI.errors);

    let history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault(); 
        const userData = state.current;
        dispatch(loginUser(userData, history));
    }

    const handleChange = e => {
        if(e.target.name === 'email') {
            // setState({ ...state, email : e.target.value})
            state.current.email = e.target.value
        } else if (e.target.name === 'password'){
            //setState({ ...state, password : e.target.value})
            state.current.password = e.target.value
        } 
    }
    const classes = useStyles();
    return (
        <Grid container className={classes.form}>
            <Grid item sm/>
            <Grid item sm>
                <img className={classes.image} src={Icon} alt='monkey '/>
                <Typography className={classes.loginTitle} variant='h2'>Login</Typography>
                <form noValidate onSubmit={handleSubmit}>
                <TextField
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    className={classes.textField}
                    helperText={errors.email}
                    error={errors.email ? true : false}
                    value={state.email}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    className={classes.textField}
                    helperText={errors.password}
                    error={errors.password ? true : false}
                    value={state.password}
                    onChange={handleChange}
                    fullWidth
                />
                {
                    errors.general && (
                        <Typography className={classes.errors} varient='body2'>
                            {errors.general}
                        </Typography>
                    )
                }
                <Button
                    style={{margin: '15px'}}
                    className={classes.button}
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading}
                >
                    Login
                    {
                        loading && (
                            <CircularProgress size={30} className={classes.progress} />
                        )
                    }
                </Button>
                <br />
                <small>don't have an account? signup <span className={classes.link} onClick={() => history.push('/signup')}>here</span></small>
                </form>
            </Grid>
            <Grid item sm/>
        </Grid>
    )
} 