import { combineReducers } from 'redux';
import todoReducers from './todoReducers';
import recordingReducers from './recordingReducers';

const rootReducer = combineReducers({
    todos: todoReducers,
    recordings: recordingReducers
});

export default rootReducer;
