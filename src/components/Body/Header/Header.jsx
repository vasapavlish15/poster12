import React from 'react';
import './Header.css';
import logo from '../../../icon/icon.svg';
import { handleLogOut } from '../../registration/Registration.jsx';

function Header() {
    return (
        <div className='header'>
            <div className="container">
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <button onClick={handleLogOut} className='exit'>Log Out</button>
            </div>
        </div>
    );
}

export default Header;