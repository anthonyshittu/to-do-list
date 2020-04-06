import React from 'react';
import PropTypes from 'prop-types';
import Close from './Close';
import Plus from './Plus';
import Play from './Play';
import Record from './Record';
import './styles.scss';

const onCloseButtonClicked = (e, onClose) => {
    let clickType;

    if (window.event['which']) {
    // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        clickType = window.event.which === 3;
    } else if (window.event['button']) {
    // IE, Opera
        clickType = window.event.button === 2;
    }
    if (!clickType) {
        onClose();
    }
};

const Icon = (props) => {
    const getIcon = () => {
        switch (props.name) {
            case 'close':
                return <Close onCloseButtonClicked={onCloseButtonClicked} {...props} />;
            case 'plus':
                return <Plus onCloseButtonClicked={onCloseButtonClicked} {...props} />;
            case 'play':
                return <Play onCloseButtonClicked={onCloseButtonClicked} {...props} />;
            case 'record':
                return <Record onCloseButtonClicked={onCloseButtonClicked} {...props} />;
            default:
        }
    };

    return getIcon();
};

export default Icon;

Icon.propTypes = {
    classes: PropTypes.string,
    name: PropTypes.string.isRequired
};
Icon.defaultProps = {
    classes: ''
};
