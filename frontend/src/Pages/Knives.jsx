import React from 'react'
import './CSS/Knives.css'
import all_knives from '../Components/Assets/all_knifes'
import Item from '../Components/Knife/Knife'

export const Knives = () => {
  return (
    <div className='knives'>
    <h1>All Knives</h1>
    <div className='knife-grid'>
    <div className='all-knives'>
      {all_knives.map((item, i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image} knife_price={item.knife_price}/>
      })}
    </div>
    </div>

  </div>
  )
}
