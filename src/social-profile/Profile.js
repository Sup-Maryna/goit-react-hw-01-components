import PropTypes from 'prop-types';
import css from './Profile.module.css';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.avatar} src={avatar} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stars: PropTypes.object,
};
export default Profile;
