import React from 'react'
import Logo from '../images/blockchain_logo.svg';
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='col col-1'>
                <img width="189px" height="auto" src={Logo}  alt="logo" />
            </div>
            <div className='col'>
                <h5>Support</h5>
                <span className='bar'></span>
                    <a className='footer-text'href='/'>Contact Us</a>
                    <a className='footer-text'href='/'>Chat</a>
                    <a className='footer-text'href='/'>Help Center</a>
                    <a className='footer-text'href='/'>FAQ</a>
                
            </div>

            <div className='col'>
                <h5>Developers</h5>
                <span className='bar'></span>
                    <a className='footer-text'href='/'>Cloud</a>
                    <a className='footer-text'href='/'>Commerce</a>
                    <a className='footer-text'href='/'>Pro</a>
                    <a className='footer-text'href='/'>API</a>
                
            </div>

            <div className='col'>
                <h5>Company</h5>
                <span className='bar'></span>
                    <a className='footer-text' href='/'>About</a>
                    <a className='footer-text'href='/'>Blog</a>
                    <a className='footer-text'href='/'>Legal</a>
                    <a className='footer-text'href='/'>Privacy</a>
                
            </div>

            <div className='col'>
                <h5>Social</h5>
                <span className='bar'></span>
                    <a className='footer-text'href='/'><FaFacebook className='icon'/></a>
                    <a className='footer-text'href='/'><FaTwitter className='icon'/></a>
                    <a className='footer-text'href='/'><FaLinkedin className='icon'/></a>
                    <a className='footer-text'href='/'><FaGithub className='icon'/></a>
                
            </div>

        </div>
      
    </div>
  )
}

export default Footer
