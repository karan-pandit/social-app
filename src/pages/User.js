import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {StaticProfile} from '../components'
import {Scream} from '../components'

import Grid from '@material-ui/core/Grid';

import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from '../redux/actions/dataActions';

export const User = (props) => {
    const [profile, setProfile] = useState(null);
    const [screamIdParam, setScreamIdParam] = useState(null);
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();
    let handle = props.match.params.handle;
    let screamId = props.match.params.screamId;

    useEffect(() => {
        if (screamId) setScreamIdParam(screamId);

         console.log(1)

        dispatch(getUserData(handle))
        axios
        .get(`/user/${handle}`)
        .then((res) => {
        setProfile(res.data.user);
      })
      .catch((err) => console.log(err));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const { screams, loading } = data;
    const screamsMarkup = loading ? (
        <p>Loading...</p>
      ) : !(typeof screams !== 'undefined' && screams.length > 0) ? (
        <p>No screams from this user</p>
      ) : !screamIdParam ? (
        screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
      ) : (
        screams.map((scream) => {
          if (scream.screamId !== screamIdParam)
            return <Scream key={scream.screamId} scream={scream} />;
          else return <Scream key={scream.screamId} scream={scream} openDialog />;
        })
      );
      console.log(screams) 
    return(
        <Grid container spacing={6}>
        <Grid item sm={8} xs={12}>
          {screamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          {profile === null ? (
            <p>Loading...</p>
          ) : (
            <StaticProfile profile={profile} />
          )}
        </Grid>
      </Grid>
    )
}