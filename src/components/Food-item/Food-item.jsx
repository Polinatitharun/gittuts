import React, {  useContext } from 'react';
import { storeContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';
import './Fooditem.css';

const Food = ({ id, name, price, description, image }) => {

    const { cartitem, addToCart, removeCartItem } = useContext(storeContext);

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className="food-item-image" src={image} alt={name} />
                {!cartitem[id] ? (
                    <img className="add" onClick={() =>addToCart(id)} src={assets.add_icon_white} alt="Add" />
                ) : (
                    <div className="food-item-counter">
                        <div onClick={() => removeCartItem(id)}>
                            <img src={assets.remove_icon_red} alt="Remove" />
                        </div>
                        <p>{cartitem[id]}</p>
                        <div onClick={() =>addToCart(id)}>
                            <img src={assets.add_icon_green} alt="Add" />
                        </div>
                    </div>
                )}
                <div className="food-item-info">
                    <div className="food-item-name-rating">
                        <p>{name}</p>
                        {/* Replace assets.rating_starts with actual rating image */}
                        <img src={assets.rating_starts} alt="Rating" />
                    </div>
                    <p className='food-item-desc'>{description}</p>
                    <p className='food-item-price'>$ {price}</p>
                </div>
            </div>
        </div>
    );
}

export default Food;
