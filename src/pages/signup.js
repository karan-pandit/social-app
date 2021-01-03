import React, {useRef} from 'react';
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
import { signupUser } from '../redux/actions/userActions';

export const Signup = () => {
    // const [state, setState] = useState({
    //     email: '',
    //     password:''
    // })
    const state = useRef({
        email:'',
        password:'',
        confirmPassword:'',
        handle:'',
    });
    const loading = useSelector(state => state.UI.loading);
    const errors = useSelector(state => state.UI.errors);

    let history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const newUserData = state.current;
        dispatch(signupUser(newUserData, history));
    }

    const handleChange = e => {
        if(e.target.name === 'email') {
            // setState({ ...state, email : e.target.value})
            state.current.email = e.target.value
        } else if (e.target.name === 'password'){
            //setState({ ...state, password : e.target.value})
            state.current.password = e.target.value
        } else if (e.target.name === 'confirmPassword'){
            //setState({ ...state, password : e.target.value})
            state.current.confirmPassword = e.target.value
        } else {
            state.current.handle = e.target.value
        }
    }
    const classes = useStyles();
    return (
        <Grid container className={classes.form}>
            <Grid item sm/>
            <Grid item sm>
                <img className={classes.image} src={Icon} alt='monkey '/>
                <Typography className={classes.loginTitle} variant='h2'>Signup</Typography>
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
                <TextField
                    id="confirmPassword"
                    name="confirmPassword"
                    type="confirmPassword"
                    label="Confirm Password"
                    className={classes.textField}
                    helperText={errors.confirmPassword}
                    error={errors.confirmPassword ? true : false}
                    value={state.confirmPassword}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    id="handlle"
                    name="handlle"
                    type="text"
                    label="Handle"
                    className={classes.textField}
                    helperText={errors.handle}
                    error={errors.handle ? true : false}
                    value={state.handle}
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
                    Signup
                    {
                        loading && (
                            <CircularProgress size={30} className={classes.progress} />
                        )
                    }
                </Button>
                <br />
                <small>already have an account? login <span className={classes.link} onClick={() => history.push('/login')}>here</span></small>
                </form>
            </Grid>
            <Grid item sm/>
        </Grid>
    )
} 