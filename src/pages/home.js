import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export const home = () => {
    return (
        <Grid container>
            <Grid item sm={8} xs={12}>
                <Typography variant='body1'>Content...</Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Typography variant='body1'>Profile...</Typography>
            </Grid>
        </Grid>
    )
}