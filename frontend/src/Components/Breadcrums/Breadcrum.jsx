import React from 'react'
import './Breadcrum.css'

export const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME SHOP {product}
    </div>
  )
}

