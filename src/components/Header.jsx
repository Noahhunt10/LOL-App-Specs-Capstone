import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <div className='header-div'>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/champions'>Champions</NavLink>
                        <NavLink to='/items'>Items</NavLink>
                        <NavLink to='/profile'>Profile</NavLink>
                        <NavLink to='/login'>Login/Register</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header