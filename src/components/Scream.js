import React from 'react'
import { useHistory } from "react-router-dom";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import {useStyles} from '../styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export const Scream = ({scream: {body, createdAt, userImage, userHandle, screamId, likeCount, commentCount}}) => {
    const classes = useStyles();
    let history = useHistory();
    dayjs.extend(relativeTime);
    return (
        <Card className={classes.card}>
            <CardMedia
            className={classes.cardImage}
            image={userImage}
            title='Profile image'/>
            <CardContent className={classes.cardContent}>
                <Typography variant='h5' onClick={() => history.push(`/users/${userHandle}`)} color='primary'>{userHandle}</Typography>
                <Typography variant='body2' color='textSecondary'>{dayjs(createdAt).fromNow()}</Typography>
                <Typography variant='body1'>{body}</Typography>
            </CardContent>
        </Card>
    )
}