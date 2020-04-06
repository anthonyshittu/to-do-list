import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({
    width,
    height,
    name,
    onCloseButtonClicked,
    onClick,
    viewBox,
    title
}) => (
    <svg
        className={`svg svg--${name}`}
        width={width}
        height={height}
        onClick={(e) => {
            if (typeof onClick === 'function') {
                onCloseButtonClicked(e, onClick);
            }
        }}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>{title}</title>
        <g
            transform="translate(5.000000, 6.000000)"
            fillRule="nonzero"
            id="dismiss_icon"
        >
            <rect
                transform="translate(17.376281, 16.646447) rotate(-315.000000) translate(-17.376281, -16.646447) "
                x="16.8535534"
                y="5.14644661"
                width="1.04545455"
                height="23"
            />
            <rect
                transform="translate(17.376281, 16.646447) rotate(-585.000000) translate(-17.376281, -16.646447) "
                x="16.8535534"
                y="5.14644661"
                width="1.04545455"
                height="23"
            />
        </g>
    </svg>
);

export default SVG;

SVG.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onCloseButtonClicked: PropTypes.func
};

SVG.defaultProps = {
    onClick: () => {},
    onCloseButtonClicked: () => {},
    width: '45',
    height: '45',
    title: 'Close',
    viewBox:
    '13.874929428100586 14.14509391784668 17.00270652770996 17.002702713012695'
};
