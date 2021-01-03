import React, { useState } from 'react';

// MUI Stuff
import {useStyles} from '../styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import { useDispatch } from 'react-redux';
import { deleteScream } from '../redux/actions/dataActions';

export const ScreamDelete = ({screamId}) => {
    const classes = useStyles();
    const [open,setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const screamDelete = () => {
    dispatch(deleteScream(screamId))
    setOpen(false);
  };

  return (
      <>
        <Tooltip title="Delete Scream">
            <IconButton onClick={handleOpen} className={classes.deleteButton}>
                <DeleteOutline color="secondary" />
            </IconButton>
        </Tooltip>
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            Are you sure you want to delete this scream ?
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={screamDelete} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
}
