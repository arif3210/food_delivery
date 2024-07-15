import { useState } from 'react'
import './Navbar.css'
const Navbar = () =>{
    const [menu,setMenu] = useState('menu')
    return(
        <div className='navbar'>
            <img src="./assets/logo.png" alt="logo" className="logo" />
            <ul className="navbar-menu">
                <li onClick={()=>{setMenu('home')}} className={menu === 'home'?'active':''}>Home</li>
                <li onClick={()=>{setMenu('menu')}} className={menu === 'menu'?'active':''}>Menu</li>
                <li onClick={()=>{setMenu('mobileapp')}} className={menu === 'mobileapp'?'active':''}>Mobile-App</li>
                <li onClick={()=>{setMenu('contact')}} className={menu === 'contact'?'active':''}>Contact</li>
            </ul>
            <div className="navbar-right">
                <img src="./assets/search_icon.png" alt=""  />
                <div className='navbar-search-icon'>
                    <img src="./assets/basket_icon.png" alt="" className=''/>
                    <div className="dot"></div>
                </div>
                <button >Sign in</button>
            </div>

        </div>
    )
}
export default Navbar