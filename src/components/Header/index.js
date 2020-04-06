import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './styles.scss';

const history = createBrowserHistory();

const Header = () => {
    const [path, setPath] = useState(history.location.pathname);
    const handleChange = (newPath) => {
        setPath(newPath);
    };

    return (
        <>
            <div className="header">
                <Link
                    className={`header__todo ${
                        path === '/' ? 'header__todo--selected' : ''
                    }`}
                    to="/"
                    onClick={() => handleChange('/')}
                >
          TODO
                </Link>
                <Link
                    className={`header__recording ${
                        path === '/recordings' ? 'header__recording--selected' : ''
                    }`}
                    to="/recordings"
                    onClick={() => handleChange('/recordings')}
                >
          RECORDINGS
                </Link>
            </div>
        </>
    );
};

export default Header;
