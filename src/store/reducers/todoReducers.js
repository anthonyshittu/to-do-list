const todoReducers = (state = {}, { type, payload }) => {
    switch (type) {
        case 'ADD_TODO':
            return { ...state, [payload.id]: payload };
        case 'UPDATE_TODO':
            return { ...state, [payload.id]: payload };
        case 'REMOVE_TODO':
            state[payload]['disabled'] = true;
            return { ...state };
        case 'EMPTY_TODO':
            Object.keys(state).map((v) => {
                state[v]['disabled'] = true;
            });
            return { ...state };
        default:
            return state;
    }
};

export default todoReducers;
