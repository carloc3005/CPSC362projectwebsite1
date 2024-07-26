import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Knife/Knife'

const ShopCategory = (props) => {
    const {all_knifes} = useContext(ShopContext);
    return (
        <div className="shop-category">
            <img  className='shopcategory-banner' src={props.banner} width='48%'alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span> Showing 1-12 </span> out of 100 products
                </p>
                <div className="shopcategory-product">
                    {all_knifes.map((item, i)=>{
                        if(props.category === item.category) {
                            return <Item key={i} id={item.id} name={item.name} image={item.image} knife_price={item.knife_price}/>
                        }
                        else{
                            return null;
                        }
                    })}
                </div>
            </div>
        </div>
    )
}
export default ShopCategory