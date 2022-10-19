import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { AuthContext } from '../../UserContext/UserContext';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt=''></img>
            <div>
                <Link to='/'>Shop</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/about'>About</Link>
                {
                    user?.uid ?
                        <Link onClick={logOut}>Log Out</Link>
                        // <button onClick={logOut}>Log Out</button>
                        :
                        <>
                            <Link to='/login'>Login</Link>
                            <Link to='/signup'>Sign Up</Link>
                        </>
                }
            </div>

        </nav>
    );
};

export default Header;