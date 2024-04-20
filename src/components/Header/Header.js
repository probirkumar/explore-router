import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink to='/home' className={({isActive}) => isActive ? 'active' : undefined}>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/friends'>Friends</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
            <h4>Common Components</h4>
        </div>
    );
};

export default Header;