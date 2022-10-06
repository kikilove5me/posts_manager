import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__links">
                {/* use Link instead of <a> so that 
            links wont reaload after click */}
                <Link to="/about">about us</Link>
                <Link to="/posts">posts</Link>
            </div>
        </div>
    )
}
