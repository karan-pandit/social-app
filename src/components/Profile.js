import React from 'react'
import {Link} from 'react-router-dom'
import dayjs from 'dayjs';

//MUI Stuff
import {useStyles} from '../styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

// Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

// Redux stuff
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, uploadImage } from '../redux/actions/userActions';
import { EditProfile } from './EditProfile';


export const Profile = () => {
    const classes = useStyles();
    const loading = useSelector(state => state.user.loading);
    const authenticated = useSelector(state => state.user.authenticated);
    const {handle, createdAt, imageUrl, bio, website, location} = useSelector(state => state.user.credentials);
    const dispatch = useDispatch();

    const handleImageChange = (event) => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append('image', image, image.name);
        dispatch(uploadImage(formData));
      };
    const handleEditPicture = () => {
        const fileInput = document.getElementById('imageInput');
        fileInput.click();
      };
    const handleLogout = () => {
        dispatch(logoutUser());
      };

    return (
        !loading ? (
        authenticated ? (
          <Paper className={classes.paper}>
            <div className={classes.profile}>
              <div className="image-wrapper">
                <img src={imageUrl} alt="profile" className="profile-image" />
                <input
                  type="file"
                  id="imageInput"
                  hidden="hidden"
                  onChange={handleImageChange}
                />
                <Tooltip title="Edit profile picture"  placement="top">
                    <IconButton onClick={handleEditPicture} className="button">
                    <EditIcon color="primary" />
                    </IconButton>
                </Tooltip>
                {/* <MyButton
                  tip="Edit profile picture"
                  onClick={handleEditPicture}
                  btnClassName="button"
                >
                  <EditIcon color="primary" />
                </MyButton> */}
              </div>
              <hr />
              <div className="profile-details">
                <MuiLink
                  component={Link}
                  to={`/users/${handle}`}
                  color="primary"
                  variant="h5"
                >
                  @{handle}
                </MuiLink>
                <hr />
                {bio && <Typography variant="body2">{bio}</Typography>}
                <hr />
                {location && (
                  <>
                    <LocationOn color="primary" /> <span>{location}</span>
                    <hr />
                  </>
                )}
                {website && (
                  <>
                    <LinkIcon color="primary" />
                    <a href={website} target="_blank" rel="noopener noreferrer">
                      {' '}
                      {website}
                    </a>
                    <hr />
                  </>
                )}
                <CalendarToday color="primary" />{' '}
                <span>Joined {dayjs(createdAt).format('MMM YYYY')}</span>
              </div>
              <Tooltip title="Logout"  placement="top">
                    <IconButton onClick={handleLogout} className="button">
                    <KeyboardReturn color="primary" />
                    <small>Logout</small>
                    </IconButton>
                </Tooltip>
                <EditProfile/>
              {/* <MyButton tip="Logout" onClick={handleLogout}>
                <KeyboardReturn color="primary" />
              </MyButton> */}
            </div>
          </Paper>
        ) : (
          <Paper className={classes.paper}>
            <Typography variant="body2" align="center">
              No profile found, please login again
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/login"
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/signup"
              >
                Signup
              </Button>
            </div>
          </Paper>
        )
      ) : (
        <p>Profile...</p>
      )
    );
} 