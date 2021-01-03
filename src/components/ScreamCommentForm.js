import React, {useState} from 'react';

// MUI
import {useStyles} from '../styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// Redux stuff
import { useSelector, useDispatch } from 'react-redux';
import { submitComment } from '../redux/actions/dataActions';

export const ScreamCommentForm = ({screamId, comments}) => {
    const classes = useStyles();
    const [body,setBody] = useState('');
    const errors = useSelector(state => state.UI.errors);
    const authenticated = useSelector(state=> state.user.authenticated);
    const loading = useSelector(state => state.UI.loading);


    if (!errors && !loading)
    {
        setBody('')
    }

    const handleChange = e => {
        setBody(e.target.value)
      };
    
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();

        dispatch(submitComment(screamId, body));
      };
    
      const commentFormMarkup = authenticated ? (
        <Grid item sm={4} style={{ textAlign: 'center' }}>
          <form onSubmit={handleSubmit}>
            <TextField
              name="body"
              type="text"
              label="Comment on scream"
              error={errors.comment ? true : false}
              helperText={errors.comment}
              value={body}
              onChange={handleChange}
              fullWidth
              className={classes.textField}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Submit
            </Button>
          </form>
          <hr className={classes.visibleSeparator} />
        </Grid>
      ) : null;
      return commentFormMarkup;
}
