import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Scream} from '../components';
import {Profile} from '../components';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const Home = () => {

    const [screams, setScreams] = useState(null)
    useEffect(() => {
        axios.get('/screams').then(res => {
            setScreams(res.data)
        })
    }, [])

    let recentScreamsMarkup = screams ? (
        screams.map(scream => <Scream key={scream.screamId} scream={scream}/>)
    ) : <Typography> Loading... </Typography>

    return (
        <Grid container spacing={6}>
            <Grid item sm={8} xs={12}>
                {recentScreamsMarkup}
            </Grid>
            <Grid item sm={4} xs={12}>
                <Profile/>
            </Grid>
        </Grid>
    )
}