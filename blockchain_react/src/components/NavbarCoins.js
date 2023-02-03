import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

const NavbarCoins = () => {
    return (
        <div className='w-full p-4 flex items-center justify-between h-20 font-bold rounded-div'>
            <Link to='/'>
            <h1 className='text-2xl pl-4'>Coin Tracker</h1>
            </Link>
            <div>
                <ThemeToggle />
            </div>
        </div>
    )
}

export default NavbarCoins;
