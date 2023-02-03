import React , {useState} from 'react'
import Logo from '../images/blockchain_logo.svg';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css'
import { Link } from "react-router-dom";


const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

  return (
    <div className='header'>
        <div className='container'>
        <Link to='/'><img width="189px" height="auto" src={Logo}  alt="logo" /></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <a href='/more-coins'>All Coins</a>
            </li>
            <li>
                <a href='/'>Products</a>
            </li>
            <li>
                <a href='/'>News</a>
            </li>
            <li>
                <a href='/'>Contact</a>
            </li>
            <li><button className='btn_mobile'>Login</button></li>
            <li><button className='btn2_mobile'>Get Started</button></li>
        </ul>   
        <div className="btn-group">
            <button className='btn'>Login</button>
            <button className='btn2'>Get Started</button>
        </div>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}}/>)}
            
        </div>
     </div>
</div>
  )
}

export default Navbar
