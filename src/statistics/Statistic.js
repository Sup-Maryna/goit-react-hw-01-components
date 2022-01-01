import PropTypes from 'prop-types';
import css from './Statistic.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={css.statListItem}
            key={id}
            style={{ backgroundColor: generateColor() }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
