import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../svgs';
import './styles.scss';

const ModalContainer = ({ onClose, children }) => {
    const stopPropagation = (e) => e.stopPropagation();
    const iconClicked = (e) => onClose();
    return (
        <div
            className="modal__container"
            onClick={stopPropagation}
            onKeyDown={stopPropagation}
            role="button"
            tabIndex="0"
        >
            <Icon
                name="close"
                classes={`icon`}
                width="18"
                height="18"
                onClick={iconClicked}
            />
            {children}
        </div>
    );
};

export default ModalContainer;

ModalContainer.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
};
