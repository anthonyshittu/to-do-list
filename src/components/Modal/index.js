import React from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import PropTypes from 'prop-types';
import ModalContainer from './Container';
import './styles.scss';

const Modal = ({ content, onClose, openedModal }) => {
    const handleClose = () => {
        onClose();
    };
    const blurClicked = (e) => {
        if (e.type !== 'click') return;
        handleClose();
    };

    return (
        <RemoveScroll enabled={openedModal}>
            {openedModal && (
                <div
                    className="modal"
                    onClick={blurClicked}
                    onKeyDown={blurClicked}
                    role="button"
                    tabIndex="0"
                >
                    <ModalContainer onClose={handleClose}>{content}</ModalContainer>
                </div>
            )}
        </RemoveScroll>
    );
};

export default Modal;

Modal.propTypes = {
    openedModal: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    content: PropTypes.element.isRequired
};
