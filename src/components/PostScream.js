import React, { useState, useEffect } from 'react';
// MUI Stuff
import {useStyles} from '../styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
// Redux stuff
import { useSelector, useDispatch } from 'react-redux';
import { postScream, clearErrors } from '../redux/actions/dataActions';

export const PostScream = () => {
    const [body,setBody] = useState('')
    const [open,setOpen] = useState(false);
    let errors = useSelector(state => state.UI.errors);
    const loading = useSelector(state => state.UI.loading);

    useEffect(() => {
        if(!errors && !loading) {
            setBody('');
            setOpen(false);
        }
    }, [errors,loading])

  const handleOpen = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(clearErrors())
    setOpen(false);
    errors = {};
  };

  const handleChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postScream({ body }));
    setOpen(false)
  };

  const classes = useStyles();
  return (
      <>
        <Tooltip title="Post a Scream!"  placement="top">
            <IconButton onClick={handleOpen}>
            <AddIcon />
            </IconButton>
        </Tooltip>
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          maxWidth="sm"
        >
            <Tooltip title="Close" className={classes.closeButton}>
            <IconButton onClick={handleClose}>
            <CloseIcon />
            </IconButton>
        </Tooltip>
        <DialogTitle>Post a new scream</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <TextField
                name="body"
                type="text"
                label="SCREAM!!"
                multiline
                rows="3"
                placeholder="Scream at your fellow apes"
                error={errors.body ? true : false}
                helperText={errors.body}
                className={classes.textField}
                onChange={handleChange}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submitButton}
                disabled={loading}
              >
                Submit
                {loading && (
                  <CircularProgress
                    size={30}
                    className={classes.progressSpinner}
                  />
                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </>
  )};

