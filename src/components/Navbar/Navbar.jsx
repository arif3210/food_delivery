import { useContext, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({setShowLogin}) =>{
    const [menu,setMenu] = useState('menu')
    const navigate = useNavigate()
    function handleClick(item){
        setMenu(item)
        navigate(item)
    }

    const {getTotalCartAmount} = useContext(StoreContext)
    return(
        <div className='navbar'>
            <img src="./assets/logo.png" alt="logo" className="logo" />
            <ul className="navbar-menu">
                <Link to='/' onClick={()=>handleClick("")} className={menu === ''?'active':''}>Home</Link>
                <a href='#explore-menu' className={menu === 'menu'?'active':''}>Menu</a>
                <a href='#app-download' className={menu === 'mobileapp'?'active':''}>Mobile-App</a>
                <a href='#footer' className={menu === 'contact'?'active':''}>Contact</a>
            </ul>
            <div className="navbar-right">
                <img src="./assets/search_icon.png" alt=""  />
                <div className='navbar-search-icon'>
                    <img onClick={()=>{navigate('cart')}}src="./assets/basket_icon.png" alt="" className=''/>
                    <div className={getTotalCartAmount() > 0 ? "dot":""}></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>Sign in</button>
            </div>

        </div>
    )
}
export default Navbar