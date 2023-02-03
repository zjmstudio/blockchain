import React from 'react'
import './Coins.css'

const CoinItem = (props) => {
  return (
    <div className='coin-row'>
      <p>{props.coins.market_cap_rank}</p>
      <div className='img-symbol'>
        <img className='coin-img' src={props.coins.image} alt=''/>
        <p className='coin-symbol-name'>{props.coins.symbol.toUpperCase()}</p>
      </div>
        <p>${props.coins.current_price.toLocaleString()}</p>
        {props.coins.price_change_percentage_24h < 0 ? (
            <p className='coin-percent red'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        ) : (<p className='coin-percent green'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        )}
        <p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'>${props.coins.market_cap.toLocaleString()}</p>     
    </div>
  )
}

export default CoinItem
