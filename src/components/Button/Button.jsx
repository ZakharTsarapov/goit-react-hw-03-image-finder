import PropTypes from 'prop-types';
import css from './Button.module.css'

export const Button = ({ onClick }) => (
  <button type="button" className={css.buttonBtn} onClick={onClick}>Load More
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

