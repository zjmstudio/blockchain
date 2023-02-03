import React from 'react'
import './Signup.css'

import SignUpImage from '../assets/blockchainApp_graph.png'

const Signup = () => {
  return (
    <div className='signup'>
        <div className='container'>
        {/* left  */}
            <div className='left'>
                <img src={SignUpImage} alt='' />

            </div>

        {/* right  */}
        <div className='right'>

            <h2 className='signup-h2'>Earn passive income with crypto.</h2>
            <p className='signup-text'>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
            <div className='input-container'>
                <input className='input1' type='email' placeholder='Enter your email' />
                <button className="btn2_hero">Learn More</button>

            </div>
        </div>

        </div>
    </div>



       
  )
}

export default Signup
