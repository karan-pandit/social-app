import React from 'react';

import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
// MUI
import {useStyles} from '../styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export const ScreamComments = ({comments}) => {
    const classes = useStyles();
    
    return (
      <Grid container>
        {comments.map((comment, index) => {
          const { body, createdAt, userImage, userHandle } = comment;
          return (
            <div key={createdAt}>
              <Grid item sm={12}>
                <Grid container>
                  <Grid item sm={2}>
                    <img
                      src={userImage}
                      alt="comment"
                      className={classes.commentImage}
                    />
                  </Grid>
                  <Grid item sm={9}>
                    <div className={classes.commentData}>
                      <Typography
                        variant="h5"
                        component={Link}
                        to={`/users/${userHandle}`}
                        color="primary"
                      >
                        {userHandle}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
                      </Typography>
                      <hr className={classes.invisibleSeparator} />
                      <Typography variabnt="body1">{body}</Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              {index !== comments.length - 1 && (
                <hr className={classes.visibleSeparator} />
              )}
            </div>
          );
        })}
      </Grid>
    );
}
