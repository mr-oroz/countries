import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    // npm i react-redux redux react-router-dom --save
    return (
        <header className='header'>
            <Link to='/'>Add Test</Link>
            <Link to='/pass-test'>Pass the Test</Link>
        </header>
    );
};

export default Header;