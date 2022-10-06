import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import { MyButton } from '../button/MyButton';

export const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <div className='navbar'>
            <MyButton onClick={logout}>logout</MyButton>

            <div className="navbar__links">
                {/* use Link instead of <a> so that 
            links wont reaload after click */}
                <Link to="/about">about us</Link>
                <Link to="/posts">posts</Link>
            </div>
        </div>
    )
}
