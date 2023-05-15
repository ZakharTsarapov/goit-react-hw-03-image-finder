import PropTypes from 'prop-types';
import css from './Button.module.css'

export const Button = ({ children, onClick }) => (
  <button type="button" className={css.button} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  Children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

