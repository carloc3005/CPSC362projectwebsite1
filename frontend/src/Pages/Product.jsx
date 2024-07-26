import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../Components/Breadcrums/Breadcrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';

export const Product = () => {
  const {all_knifes} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_knifes.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrum />
      <ProductDisplay product={product}/>
    </div>
  )
}
export default Product
