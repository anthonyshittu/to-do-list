import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({
    width,
    height,
    name,
    onCloseButtonClicked,
    onClick,
    viewBox
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
        <title>Play</title>
        <g xmlns="http://www.w3.org/2000/svg">
            <g>
                <path d="M405.284,201.188L130.804,
                13.28C118.128,4.596,105.356,0,94.74,
                0C74.216,0,61.52,16.472,61.52,44.044v406.124
                c0,27.54,12.68,43.98,33.156,
                43.98c10.632,0,23.2-4.6,
                35.904-13.308l274.608-187.904c17.66-12.104,
                27.44-28.392,27.44-45.884
                C432.632,229.572,422.964,213.288,405.284,201.188z"
                />
            </g>
        </g>
    </svg>
);

export default SVG;

SVG.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onCloseButtonClicked: PropTypes.func
};

SVG.defaultProps = {
    onClick: () => {},
    onCloseButtonClicked: () => {},
    width: '45',
    height: '45',
    viewBox:
    '13.874929428100586 14.14509391784668 17.00270652770996 17.002702713012695'
};
