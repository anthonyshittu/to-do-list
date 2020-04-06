import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Header from '../../components/Header';
import Todos from '../todo';
import Recordings from '../Recordings';
import './styles.scss';

const App = () => {
    return (
        <Router>
            <div>
                <Header />

                <Switch>
                    <Route exact path="/">
                        <Todos />
                    </Route>
                    <Route path="/recordings">
                        <Recordings />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
