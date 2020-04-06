import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/Button';
import Todo from '../../components/Todo';
import Notification from '../../components/Notification';
import {
    removeRecording,
    emptyRecording
} from '../../store/actions/recordingActions';
import Icon from '../../svgs';
import './styles.scss';

const Recordings = () => {
    const recordings = useSelector((state) => state.recordings);
    const todos = useSelector((state) => state.todos);

    const [currentItems, setCurrentItems] = useState([]);
    const [recordingItems, setRecordingItems] = useState([]);
    const [play, setPlay] = useState(false);
    const dispatch = useDispatch();
    const setRecordObj = (record) => {
        let obj = {};
        if (record.action === 'update') {
            obj = record.param;
            obj['action'] = 'update';
        } else {
            obj = { ...todos[record.id] };
            obj['action'] = record.action;
        }
        return obj;
    };
    const handleTransition = (id) => {
        if (id) {
            const current = [];
            const recordedList = [];
            const ids = [];
            if (recordings[id].currentItems.length === 0) {
                recordings[id].recordedIDs.forEach((record) => {
                    recordedList.push(setRecordObj(record));
                });
                setRecordingItems(recordedList);
            } else {
                recordings[id].currentItems.forEach((v) => {
                    const list = Object.keys(todos).filter(i => todos[i].parent === v && recordings[id]);
                    const listSorted = list.sort((a, b) => (todos[a].createdAt > todos[b].createdAt ? -1 : 1));
                    let selectedID;
                    recordings[id].recordedIDs.forEach((record) => {
                        if (record.action === 'update') {
                            if (listSorted.indexOf(record.param.id) > -1) {
                                const index = listSorted.findIndex(i => i === record.param.id);
                                listSorted.splice(index, 1);
                                selectedID = listSorted[0];
                            }
                        }

                        const obj = setRecordObj(record);
                        if (ids.indexOf(obj.id) === -1) {
                            ids.push(obj.id);
                            recordedList.push(obj);
                        }
                        return;
                    });
                    const selectedTodo = todos[v];
                    if (selectedID) {
                        selectedTodo.name = todos[selectedID].name;
                        selectedTodo.desc = todos[selectedID].desc;
                    }
                    current.push(selectedTodo);
                });
                setCurrentItems(current);
                setRecordingItems(recordedList);
            }
        }
        setPlay(!play);
    };
    const addCurrentitems = (counter = 0, items = currentItems) => {
        if (counter < recordingItems.length) {
            setTimeout(function () {
                if (recordingItems[counter].action === 'add') {
                    items = items.concat(recordingItems[counter]);
                    setCurrentItems(items);
                } else if (recordingItems[counter].action === 'remove') {
                    const index = items.findIndex((item) => item.id === recordingItems[counter].id);
                    const temp = [...items];
                    temp.splice(index, 1);
                    items = temp;
                    setCurrentItems(items);
                } else if (recordingItems[counter].action === 'update') {
                    const index = items.findIndex((item) => item.id === recordingItems[counter].parent);
                    const temp = [...items];
                    temp[index].name = recordingItems[counter].name;
                    temp[index].desc = recordingItems[counter].desc;
                    items = temp;
                    setCurrentItems(items);
                }
                counter++;
                addCurrentitems(counter, items);
            }, 1000);
        }
    };
    const sortRecordings = (item) => {
        return item.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
    };
    useEffect(() => {
        if (play) {
            setTimeout(function () {
                addCurrentitems();
            }, 5000);
        }
    }, [play]);

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    return (
        <div className="recordings">
            {(!play && Object.keys(recordings).length > 0) && (
                <div className="recordings--delete">
                    <Button
                        classes="button button--primary"
                        text="delete all"
                        onClick={() => dispatch(emptyRecording())}
                    />
                </div>
            )}
            {play && (
                <Button
                    classes="button button--primary"
                    text="Stop"
                    onClick={() => handleTransition()}
                />
            )}
            {Object.keys(recordings).length === 0 && (
                <Notification type="warning" content="No recording is available" />
            )}
            {Object.keys(recordings).length > 0 && (
                <div
                    className={` recordings__list recordings__list--${
                        play ? 'hide' : 'show'
                    }`}
                >
                    {Object.keys(recordings).map((r) => {
                        const day = new Date(Number(recordings[r].createdAt));

                        return (
                            <div key={`record_${r}`} className="recordings__container">
                                <span className="recordings__container--date">
                                    {day.toLocaleDateString('en-US', options)}
                                </span>
                                <div>
                                    <Icon
                                        name="play"
                                        classes={`icon`}
                                        width="20"
                                        height="20"
                                        viewBox="0 0 600 550"
                                        onClick={() => handleTransition(r)}
                                    />
                                    <Icon
                                        name="close"
                                        classes={`icon`}
                                        title="Remove"
                                        width="20"
                                        height="18"
                                        onClick={() => dispatch(removeRecording(r))}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
            {Object.keys(recordings).length > 0 && (
                <div
                    className={`recordings__player recordings__player--${
                        play ? 'show' : 'hide'
                    }`}
                >
                    {sortRecordings(currentItems).map((v) => {
                        return <Todo key={`todo_${v.id}`} todo={v} />;
                    })}
                </div>
            )}
        </div>
    );
};

export default Recordings;
