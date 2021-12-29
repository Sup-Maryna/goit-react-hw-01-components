import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={css.friendListItem}>
      <span className={isOnline ? css.online : css.offline}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};

export default FriendListItem;
