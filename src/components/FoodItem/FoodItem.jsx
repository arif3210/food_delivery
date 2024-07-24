import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({item}) => {
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
  return (
      <div className='food-item'>
          <div className="food-item-img-container">
            <img src={`./assets/${item.image}`} alt="" className='food-item-image'/>
            {
                !cartItems[item._id]? <img onClick={()=>{addToCart(item._id)}}src="./assets/add_icon_white.png" alt="" className="add" />:
                <div className='food-item-counter'>
                    <img onClick={()=>{removeFromCart(item._id)}}src="./assets/remove_icon_red.png" alt="" />
                    {cartItems[item._id]}
                    <img onClick={()=>{addToCart(item._id)}}src="./assets/add_icon_green.png" alt="" />
                </div>
            }
          </div>
          <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{item.name}</p>
                <img src={'./assets/rating_starts.png'} alt="" />
            </div>
                <p className="food-item-desc">{item.description}</p>
                <p className='food-item-price'>${item.price}</p>
          </div>
      </div>
  )
}

export default FoodItem