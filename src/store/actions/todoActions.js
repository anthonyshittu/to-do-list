export const addTodo = (payload) => ({
    type: 'ADD_TODO',
    payload
});

export const updateTodo = (payload) => ({
    type: 'UPDATE_TODO',
    payload
});

export const removeTodo = (payload) => ({
    type: 'REMOVE_TODO',
    payload
});

export const emptyTodo = () => ({
    type: 'EMPTY_TODO'
});
