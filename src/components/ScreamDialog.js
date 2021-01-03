import React, {useState, useEffect} from 'react'
import {useStyles} from '../styles';
import {LikeButton} from './LikeButton';
import {ScreamComments} from './ScreamComments';
import {ScreamCommentForm} from './ScreamCommentForm';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
// MUI Stuff
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// Icons
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import UnfoldMore from '@material-ui/icons/UnfoldMore';
import ChatIcon from '@material-ui/icons/Chat';
// Redux stuff
import { useSelector, useDispatch } from 'react-redux';
import { getScream, clearErrors } from '../redux/actions/dataActions';

export const ScreamDialog = ({userHandle, screamId, openDialog}) => {
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const [path,setPath] = useState({
        old:'',
        new:''
    })
    const loading = useSelector(state => state.UI.loading);
    const {
        body,
        createdAt,
        likeCount,
        commentCount,
        userImage,
        comments
      } = useSelector(state => state.data.scream);

    useEffect(() => {
        if(openDialog) {
            handleOpen()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [openDialog])

    const dispatch = useDispatch();
    const handleOpen = () => {
        let oldPath = window.location.pathname;
        const newPath = `/users/${userHandle}/scream/${screamId}`;
    
        if (oldPath === newPath) oldPath = `/users/${userHandle}`;
    
        window.history.pushState(null, newPath);
    
        setOpen(true);
        setPath({
            old: oldPath,
            new: newPath});
        dispatch(getScream(screamId));
      };
    const handleClose = () => {
        window.history.pushState(null, path.oldPath);
        setOpen(false)
        this.setState({ open: false });
        dispatch(clearErrors());
      };

      const dialogMarkup = loading ? (
        <div className={classes.spinnerDiv}>
          <CircularProgress size={200} thickness={2} />
        </div>
      ) : (
        <Grid container spacing={16}>
          <Grid item sm={5}>
            <img src={userImage} alt="Profile" className={classes.profileImage} />
          </Grid>
          <Grid item sm={7}>
            <Typography
              component={Link}
              color="primary"
              variant="h5"
              to={`/users/${userHandle}`}
            >
              @{userHandle}
            </Typography>
            <hr className={classes.invisibleSeparator} />
            <Typography variant="body2" color="textSecondary">
              {dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
            </Typography>
            <hr className={classes.invisibleSeparator} />
            <Typography variant="body1">{body}</Typography>
            <LikeButton screamId={screamId} />
            <span>{likeCount} likes</span>
            <Tooltip title="comments"  placement="top">
                    <IconButton>
                    <ChatIcon color="primary" />
                    </IconButton>
                </Tooltip>
            <span>{commentCount} comments</span>
          </Grid>
          <hr className={classes.visibleSeparator} />
          <ScreamCommentForm screamId={screamId} />
          <ScreamComments comments={comments} />
        </Grid>
      );

    return (
        <>
        <Tooltip title="Expand scream"  placement="top" className={classes.expandButton}>
                <IconButton onClick={handleOpen}>
                <UnfoldMore color="primary" />
                </IconButton>
        </Tooltip>
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          maxWidth="sm"
        >
            <Tooltip title="Close"  placement="top" className={classes.commentButton}>
                <IconButton onClick={handleClose}>
                <CloseIcon />
                </IconButton>
            </Tooltip>
          <DialogContent className={classes.dialogContent}>
            {dialogMarkup}
          </DialogContent>
        </Dialog>
        </>
    )
} 

