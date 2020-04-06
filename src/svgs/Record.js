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
        <title>Record</title>
        <path
            xmlns="http://www.w3.org/2000/svg"
            id="XMLID_155_"
            d="M19.994,0C8.952,0,0,8.952,
            0,19.995c0,11.043,
            8.952,19.994,19.994,
            19.994s19.995-8.952,
            19.995-19.994  C39.989,
            8.952,31.037,0,19.994,0z M19.994,
            27.745c-4.28,
            0-7.75-3.47-7.75-7.75s3.47-7.75,
            7.75-7.75s7.75,3.47,
            7.75,7.75  S24.275,
            27.745,19.994,27.745z"
        />
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
