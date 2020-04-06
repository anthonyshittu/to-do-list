import React, { useState } from 'react';
import uniqid from 'uniqid';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../../components/Form';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Todo from '../../components/Todo';
import Notification from '../../components/Notification';
import Icon from '../../svgs';
import {
    addTodo,
    updateTodo,
    emptyTodo
} from '../../store/actions/todoActions';
import { addRecording } from '../../store/actions/recordingActions';
import './styles.scss';

const Todos = () => {
    const [displayModal, setDisplayModal] = useState(false);
    const [editObj, setEditObj] = useState({});
    const [recordID, setRecordID] = useState('');
    const [recordData, setRecordData] = useState([]);
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos);
    const disabledParent = [];
    Object.keys(todoList).forEach(
        (v) => {
            if (todoList[v].disabled) {
                disabledParent.push(todoList[v].parent);
            }
        }
    );
    const todoListFiltered = Object.keys(todoList).filter(
        (v) => !todoList[v].disabled && !todoList[v].type
    ).filter(id => disabledParent.indexOf(id) === -1);
    const closeFormModal = () => {
        setDisplayModal(!displayModal);
        setEditObj({});
    };
    const todoFunc = (values) => {
        let id, action;
        if (typeof values !== 'object') {
            action = 'remove';
            id = values;
            const newValues = {};
            newValues['parent'] = id;
            newValues['disabled'] = true;
            newValues['id'] = uniqid();
            newValues['createdAt'] = Date.now();
            dispatch(updateTodo(newValues));
        } else {
            if (!values.id) {
                id = uniqid();
                action = 'add';
                values['id'] = id;
                values['createdAt'] = Date.now();
                dispatch(addTodo(values));
            } else {
                id = values.id;
                action = 'update';
                values['type'] = 1;
                values['parent'] = id;
                values['id'] = uniqid();
                values['createdAt'] = Date.now();
                dispatch(updateTodo(values));
            }
            closeFormModal();
        }
        if (recordID) {
            if (action === 'update') {
                recordData.recordedIDs.push({
                    id,
                    recorded_at: Date.now(),
                    action,
                    param: values
                });
            } else {
                recordData.recordedIDs.push({
                    id,
                    recorded_at: Date.now(),
                    action
                });
            }
        }
    };

    const editTodo = (id, updatedData) => {
        if (updatedData) {
            const values = todoList[id];
            values['name'] = updatedData.name;
            values['desc'] = updatedData.desc;
            setEditObj(values);
        } else {
            setEditObj(todoList[id]);
        }
        setDisplayModal(!displayModal);
    };
    const controlRecord = () => {
        if (recordID) {
            if (recordData.recordedIDs) {
                dispatch(addRecording(recordData));
            }
            setRecordData({});
            setRecordID('');
        } else {
            const id = uniqid();
            setRecordID(id);
            setRecordData({
                id,
                currentItems: todoListFiltered,
                recordedIDs: [],
                createdAt: Date.now()
            });
        }
    };

    return (
        <div className="todo">
            <div className="todo__action">
                <Icon
                    name="plus"
                    classes={`icon`}
                    width="40"
                    height="40"
                    viewBox="0 0 130 120"
                    onClick={closeFormModal}
                />
                <div className={`recording ${recordID ? '' : 'recording__start'}`}>
                    <span>{`${recordID ? '' : 'Start'} Recording`}</span>
                    <Icon
                        name="record"
                        classes={`icon`}
                        width="40"
                        height="40"
                        viewBox="-2 -1 44 43"
                        onClick={controlRecord}
                    />
                </div>
                {!recordID &&
                    <Button
                        classes="button button--primary"
                        text="Delete All"
                        onClick={() => dispatch(emptyTodo())}
                    />
                }
            </div>
            {displayModal && (
                <Modal
                    content={
                        <div className="todo__form">
                            <Form onSubmit={todoFunc} {...editObj} />
                        </div>
                    }
                    onClose={closeFormModal}
                    openedModal={displayModal}
                />
            )}
            {todoListFiltered.length === 0 && (
                <Notification type="warning" content="No recording is available" />
            )}
            {todoListFiltered.length > 0 && (
                <div className="todo__list">
                    {todoListFiltered.map((id) => {
                        const updatedID = Object.keys(todoList).filter(
                            v => todoList[v].type && todoList[v].parent === id
                        ).sort((a, b) => (todoList[a].createdAt > todoList[b].createdAt ? -1 : 1))[0];
                        return (
                            <Todo
                                key={`todo_${id}`}
                                todo={todoList[id]}
                                updatedTodo={todoList[updatedID]}
                                extraChildren={
                                    <div className="todo__container--buttons">
                                        <Button
                                            classes="button button--primary"
                                            text="Edit"
                                            onClick={() => editTodo(id, todoList[updatedID])}
                                        />
                                        <Button
                                            classes="button button--primary"
                                            text="Delete"
                                            onClick={() => todoFunc(id)}
                                        />
                                    </div>
                                }
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Todos;
