/* eslint-disable prefer-reflect */

const recordingReducers = (state = {}, { type, payload }) => {
    switch (type) {
        case 'ADD_RECORDING':
            return { ...state, [payload.id]: payload };
        case 'REMOVE_RECORDING':
            delete state[payload];
            return { ...state };
        case 'EMPTY_RECORDING':
            return {};
        default:
            return state;
    }
};

export default recordingReducers;
