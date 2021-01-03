import React from 'react'
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import {ScreamDelete} from './ScreamDelete';
import {ScreamDialog} from './ScreamDialog';
import {LikeButton} from './LikeButton';

//MUI Stuff
import {useStyles} from '../styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Icons
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';

// Redux
import { useSelector} from 'react-redux';

export const Scream = ({openDialog, scream: {body, createdAt, userImage, userHandle, screamId, likeCount, commentCount}}) => {
    const classes = useStyles();
    const authenticated = useSelector(state => state.user.authenticated);
    const handle = useSelector(state => state.user.credentials.handle);
    dayjs.extend(relativeTime);

    const deleteButton =
      authenticated && userHandle === handle ?  (
        <ScreamDelete screamId={screamId} />
      ) : null;
    return (
      <Card className={classes.card}>
      <CardMedia
        image={userImage}
        title="Profile image"
        className={classes.image}
      />
      <CardContent className={classes.content}>
        <Typography
          variant="h5"
          component={Link}
          to={`/users/${userHandle}`}
          color="primary"
        >
          {userHandle}
        </Typography>
        {deleteButton}
        <Typography variant="body2" color="textSecondary">
          {dayjs(createdAt).fromNow()}
        </Typography>
        <Typography variant="body1">{body}</Typography>
        <LikeButton screamId={screamId} />
        <span>{likeCount} Likes</span>
        <Tooltip title="comments"  placement="top">
            <IconButton>
                    <ChatIcon color="primary" />
            </IconButton>
        </Tooltip>
        <span>{commentCount} comments</span>
        <ScreamDialog
          screamId={screamId}
          userHandle={userHandle}
          openDialog={openDialog}
        />
      </CardContent>
    </Card>
    )
}