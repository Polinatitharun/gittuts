import React, { useContext } from 'react';
import './FoodDisplay.css';
import { storeContext } from '../../Context/StoreContext'; 
import Food from '../Food-item/Food-item';
const FoodDisplay = () => {
    const{food_list}=useContext(storeContext);
  return (
    <div className='food-display' id="food-display">
      <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {
                food_list.map((item,index)=>{
                  return <Food key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                })
            }
        </div>
    </div>
  )
}

export default FoodDisplay
