import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            {/* <Link to='/'>Home</Link> */}
            <Link to='/home'>Home</Link>
            <Link to='/meals'>Meals</Link>
        </div>
    );
};

export default Header;