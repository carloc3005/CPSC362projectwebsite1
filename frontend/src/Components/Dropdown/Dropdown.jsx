import React, {useState}from 'react'
import './Dropdown.css'
import {MenuItems} from '../Assets/MenuItems'
import { Link} from 'react-router-dom'

export const Dropdown = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
  return (
    <div>
        <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItems.map((item, index) => {
                return(
                    <li key={index}>
                        <Link style={{textDecoration: 'None', color:'white'}} className={item.cName} to={item.path} onClick={() => setClick(false)}>
                        <img src={item.image} width='30'/>
                        {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul> 
    </div>
  )
}

export default Dropdown
