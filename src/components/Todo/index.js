import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo, updatedTodo, extraChildren }) => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const day = new Date(Number(todo.createdAt));
    return (
        <div key={`todo_${todo.id}`} className="todo__container">
            <span className="todo__container--name">{updatedTodo ? updatedTodo.name : todo.name}</span>
            <span className="todo__container--text">{updatedTodo ? updatedTodo.desc : todo.desc}</span>
            <span className="todo__container--created_date">
                {day.toLocaleDateString('en-US', options)}
            </span>
            {extraChildren}
        </div>
    );
};

export default Todo;

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    updatedTodo: PropTypes.object,
    extraChildren: PropTypes.element
};
