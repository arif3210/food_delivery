import React from 'react'
import './ExploreMenu.css'
import { menu_list } from './menu_list'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinery expertise. Our mission is to satisfy your cravings and elevate your dining experience.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                <div onClick={()=>{setCategory(prev=>prev === item.menu_name?"All":item.menu_name)}}key={index} className="explore-menu-list-item">
                    <img src={`./assets/${item.menu_image}.png`} alt={`${item.menu_image}`} className={category===item.menu_name?'active':''}/>
                    <p>{item.menu_name}</p>
                </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu