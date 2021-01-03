import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
// MUI stuff
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
// Icons
import NotificationsIcon from '@material-ui/icons/Notifications';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { markNotificationsRead } from '../redux/actions/userActions';

export const Notifications = () => {
    const [state, setState] = useState(null);

    const handleOpen = e => {
      setState(e.target);
    };

    const handleClose = () => {
        setState(null);
    };

    const notifications = useSelector(state => state.user.notifications)
    const dispatch = useDispatch();
    const onMenuOpened = () => {
      let unreadNotificationsIds = notifications
        .filter((not) => !not.read)
        .map((not) => not.notificationId);
        dispatch(markNotificationsRead(unreadNotificationsIds))
    };

    dayjs.extend(relativeTime);

    let notificationsIcon;
    if (notifications && notifications.length > 0) {
      notifications.filter((not) => not.read === false).length > 0
        ? (notificationsIcon = (
            <Badge
              badgeContent={
                notifications.filter((not) => not.read === false).length
              }
              color="secondary"
            >
              <NotificationsIcon />
            </Badge>
          ))
        : (notificationsIcon = <NotificationsIcon />);
    } else {
      notificationsIcon = <NotificationsIcon />;
    }

    let notificationsMarkup =
      notifications && notifications.length > 0 ? (
        notifications.map((not) => {
          const verb = not.type === 'like' ? 'liked' : 'commented on';
          const time = dayjs(not.createdAt).fromNow();
          const iconColor = not.read ? 'primary' : 'secondary';
          const icon =
            not.type === 'like' ? (
              <FavoriteIcon color={iconColor} style={{ marginRight: 10 }} />
            ) : (
              <ChatIcon color={iconColor} style={{ marginRight: 10 }} />
            );

          return (
            <MenuItem key={not.createdAt} onClick={this.handleClose}>
              {icon}
              <Typography
                component={Link}
                color="default"
                variant="body1"
                to={`/users/${not.recipient}/scream/${not.screamId}`}
              >
                {not.sender} {verb} your scream {time}
              </Typography>
            </MenuItem>
          );
        })
      ) : (
        <MenuItem onClick={handleClose}>
          You have no notifications yet
        </MenuItem>
      );


    return (
        <>
          <Tooltip placement="top" title="Notifications">
          <IconButton
            aria-owns={state ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={handleOpen}
          >
            {notificationsIcon}
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={state}
          open={Boolean(state)}
          onClose={handleClose}
          onEntered={onMenuOpened}
        >
          {notificationsMarkup}
        </Menu>
        </>
    )
}