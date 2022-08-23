import React, { useContext, useState } from 'react'
import data from './data.json'
import SingleProduct from './SingleProduct';
import "./style.css";

const Home = () => {

  const productsArray = data.map((d) => ({
    id: d.id,
    name: d.name,
    price: d.price,
    image: d.image_url
  }))

  const [products] = useState(productsArray);

  return (
    <div className='productContainer'>
      {products.map(prod => (
        <SingleProduct 
          prod={prod} 
          key = {prod.id}
        />
      ))}
    </div>
  )
}

export default Home
