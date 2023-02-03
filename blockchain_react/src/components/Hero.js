import React from 'react'
import './Hero.css'
import heroImage from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>

            {/*Left Side */}
            <div className='left'>
                <p className='hero-text-1'>Buy & sell crypto 24/7 using your retirement account</p>
                <h1 className='hero-title-h1'>Own Your Future. Secure Your Wealth.</h1>
                <p className='hero-text-2'>Buy, sell, & store hundreds of cryptocurrencies</p>
                <div className='input-container'>
                    <input className='input1' type='email' placeholder='Enter your email' />
                    <button className='btn2_hero'>Learn More</button>
                </div>

            </div>

            {/*Right Side */}
            <div className='right'>
                <div className='img-container'>
                    <img src={heroImage} alt=''/>
                </div>

            </div>


      </div>
    </div>
  )
}

export default Hero
