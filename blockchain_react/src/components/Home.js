import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Signup from './components/Signup';
import Footer from './components/Footer';
import MoreCoins from './MoreCoins';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Signup />
      <Footer />
    </>
  )
}

export default Home
