import React,{useState} from 'react';
import logo from '../images/logo.png';
import search from '../images/search.png';
import startup from '../images/startup.png';

import { Link, useMatch, useResolvedPath } from "react-router-dom"
function Navbar() {
 
    const [nav,setNav]=useState(false);

    const changeBackground = () => {
      if(window.scrollY >=50)setNav(true);
      else setNav(false);
    }
    window.addEventListener('scroll',changeBackground);
  return (
  <nav className={nav? "nav active":"nav"}>
    <Link className='cur' to="/"  >
      <img src={logo}/>
    </Link>
    
    <ul className='menu'>
      <CustomLink to="./about">About Us</CustomLink>
      <CustomLink to="./services">Services</CustomLink>
      <CustomLink to="/industries">Industries</CustomLink>
      <CustomLink to="/contact">Contact</CustomLink>
      <a href="#"><img className='search' src={search}/></a>
      <a href="#"><img className='startup' src={startup}/></a>
    </ul>
  </nav>
  )
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar;
