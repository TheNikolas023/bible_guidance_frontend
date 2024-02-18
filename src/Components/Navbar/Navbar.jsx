import React from 'react'
import {useState} from 'react';
import './Navbar.css'
import logo from '../Assets/logo8-small.png'
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const [menu, setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        {/* <img src={logo} alt="" /> */}
        <p className='logo'>Bible Guidance</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}} ><Link style={{ textDecoration: 'none'}} to='/'>Search</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about")}} ><Link style={{ textDecoration: 'none'}} to='/about'>About</Link>{menu==="about"?<hr/>:<></>}</li>
        {/* <li onClick={()=>{setMenu("faq")}} ><Link style={{ textDecoration: 'none'}} to='/faq'>Donate</Link>{menu==="faq"?<hr/>:<></>}</li> */}
        {/* <li onClick={()=>{setMenu("contact")}} ><Link style={{ textDecoration: 'none'}} to='/contact'>Contact</Link>{menu==="contact"?<hr/>:<></>}</li> */}
        {/* <li onClick={()=>{setMenu("subscribe")}} ><Link style={{ textDecoration: 'none'}} to='/subscribe'>Subscribe</Link>{menu==="subscribe"?<hr/>:<></>}</li> */}
      </ul>
      {/* <div className="nav-login"> */}
        {/* <Link style={{ textDecoration: 'none'}} to='/login'><button>Login</button></Link> */}
      {/* </div> */}
    </div>
  )
}

export default Navbar