export const addRecording = (payload) => ({
    type: 'ADD_RECORDING',
    payload
});

export const removeRecording = (payload) => ({
    type: 'REMOVE_RECORDING',
    payload
});

export const emptyRecording = () => ({
    type: 'EMPTY_RECORDING'
});
