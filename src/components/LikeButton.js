import React from 'react';
import { Link } from 'react-router-dom';
// Icons
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
// REdux
import { useSelector, useDispatch } from 'react-redux';
import { likeScream, unlikeScream } from '../redux/actions/dataActions';

export const LikeButton = ({screamId}) => {
    const likes = useSelector(state => state.user.likes);
    const authenticated = useSelector(state => state.user.authenticated);

  const likedScream = () => {
    if (
      likes && likes.find(
        (like) => like.screamId === screamId
      )
    )
      return true;
    else return false;
  };

  const dispatch = useDispatch();
  const like = () => {
    dispatch(likeScream(screamId));
  };
  const unlike = () => {
    dispatch(unlikeScream(screamId));
  };

    const likeButton = !authenticated ? (
      <Link to="/login">
          <Tooltip title="Like"  placement="top">
                    <IconButton>
                    <FavoriteBorder color="primary" />
                    </IconButton>
                </Tooltip>
      </Link>
    ) : likedScream() ? (
        <Tooltip title="Undo Like"  placement="top">
                    <IconButton onClick={unlike}>
                    <FavoriteIcon color="primary" />
                    </IconButton>
        </Tooltip>
    ) : (
        <Tooltip title="Like"  placement="top">
                    <IconButton onClick={like}>
                    <FavoriteBorder color="primary" />
                    </IconButton>
        </Tooltip>
    );
    return likeButton;
}
