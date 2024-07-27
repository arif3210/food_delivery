import React, { useState } from 'react'
import './LoginPopup.css'
const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState('Sign Up')
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img src="./assets/cross_icon.png" onClick={()=>setShowLogin(false)} alt="" />
            </div>
            <div className="login-popup-inputs">
              {currState==='Login'?<></>:<input type="text" placeholder='your name' required />}
              <input type="email" placeholder='your email' required />
              <input type="password" placeholder='your password' required />
            </div>
              <button>{currState==='Sign Up'?'Create Account':'Login'}</button>
              <div className="login-popup-condition">
                <input type="checkbox" name="" id="" required/>
                <p>By Continuing i agree to terms and conditions</p>
              </div>
              {currState === 'Login'?
              <p>Create a new account? <span onClick={()=>{setCurrState('Sign Up')}}>Click here</span></p>:
              <p>Already have an account? <span onClick={()=>{setCurrState('Login')}}>Click Here</span></p>
            }
        </form>
    </div>
  )
}
              

export default LoginPopup