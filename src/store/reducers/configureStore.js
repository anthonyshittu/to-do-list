import { createStore } from 'redux';
import reducers from './index';

export const configureStore = () => {
    const initialState = {};
    return createStore(reducers, initialState);
};
