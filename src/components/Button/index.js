import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ text, onClick, classes, type }) => {
    return (
        <button className={classes} onClick={onClick} type={type}>
            <span className="button__content">{text}</span>
        </button>
    );
};

export default Button;

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    classes: PropTypes.string.isRequired,
    type: PropTypes.string
};

Button.defaultProps = {
    type: 'button',
    onClick: () => {}
};
