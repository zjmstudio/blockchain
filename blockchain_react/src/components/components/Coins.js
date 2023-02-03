import React from 'react'
import CoinItem from './CoinItem'
import './Coins.css'
import Coin from '../routes/Coin'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'





const Coins = (props) => {

  const [Coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

const handleChange = e => {
  setSearch(e.target.value)
}

const filteredCoins = Coins.filter(coins =>
  coins.name.toLowerCase().includes(search.toLowerCase())
  )
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res => {
      setCoins(res.data)
      console.log(res.data);
    }).catch(error => console.log(error))
  }, []);

  {filteredCoins.map(coin => {
    return (
      <Coin key={coin.id} 
      name={coin.name} 
      image={coin.image}
      symbol={coin.symbol}
      marketcap={coin.market_cap}
      price={coin.current_price}
      priceChange={coin.price_change_percentage_24h}
      volume={coin.total_volume}
      />
    );
  
  })}

  return (
    <div className='container1'>

      <div className='coin-search-container'>
      <input type='text' placeholder="Search" className='coin-input' label='Search' variant ='outlined' 
      onChange={(e)=>setSearch(e.target.value)}
      
      />
      </div> 
       
        <div>
            <div className='heading'>
                <p>Rank #</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>24h Volume</p>
                <p className='hide-mobile'>Mkt Cap</p>
            </div>

            {props.coins.map(coins => {
                    return (
                      <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                      <CoinItem coins={coins} />
                      </Link>
                        
                    )
                    })}
        </div>
    </div>
  )
}




export default Coins
