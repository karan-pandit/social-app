import React, { useState, useRef, useEffect } from 'react';
// Redux stuff
import { useSelector, useDispatch } from 'react-redux';
import { editUserDetails } from '../redux/actions/userActions';

//MUI Stuff
import {useStyles} from '../styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
// Icons
import EditIcon from '@material-ui/icons/Edit';

export const EditProfile = () => {
    const classes = useStyles();
    const credentials = useSelector(state => state.user.credentials);
    const dispatch = useDispatch();
    const [open,setOpen] = useState(false);
    const state = useRef({
        bio: '',
        website: '',
        location: '',
    })

  const mapUserDetailsToState = credentials => {
          state.current.bio = credentials.bio ? credentials.bio : ''
          state.current.website = credentials.website ? credentials.website : ''
          state.current.location = credentials.location ? credentials.location : ''
    };

    useEffect(() => {
        mapUserDetailsToState(credentials)
    }, [credentials]);

  const handleOpen = () => {
      setOpen(true)
      mapUserDetailsToState(credentials);

  };
  const handleClose = () => {
    setOpen(false)
  };

  const handleChange = (e) => {
    if(e.target.name === 'bio') {
        state.current.bio = e.target.value
    } else if (e.target.name === 'website'){
        state.current.website = e.target.value
    } else if (e.target.name === 'location'){
        state.current.location = e.target.value
        console.log(state.current.location)
    } 
  };

  const handleSubmit = () => {
      const userDetails = {
        bio: state.current.bio,
        website: state.current.website,
        location: state.current.location
      }

    dispatch(editUserDetails(userDetails))
    handleClose();
  };
    
  return (
      <>
        <Tooltip title="Edit Details" placement="bottom-end">
            <IconButton onClick={handleOpen} className="button">
            <EditIcon color="primary" />
            <small>Edit Profile</small>
            </IconButton>
        </Tooltip>
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Edit your details</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                name="bio"
                tpye="text"
                label="Bio"
                multiline
                rows="3"
                placeholder="A short bio about yourself"
                className={classes.textField}
                value={state.bio}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                name="website"
                tpye="text"
                label="Website"
                placeholder="Your personal/professinal website"
                className={classes.textField}
                value={state.website}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                name="location"
                tpye="text"
                label="Location"
                placeholder="Where you live"
                className={classes.textField}
                value={state.location}
                onChange={handleChange}
                fullWidth
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
}
