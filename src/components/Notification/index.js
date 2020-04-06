import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Notification = ({ type, content }) => {
    return (
        <div className={`notification notification--${type}`}>
            <p>{content}</p>
        </div>
    );
};

export default Notification;

Notification.propTypes = {
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};
