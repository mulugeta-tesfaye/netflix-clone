import React, { useEffect, useRef } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import {logout} from '../../firebase'


const Header = () => {
    const navRef = useRef()

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>=80){
                navRef.current.classList.add('nav-dark')
            }else{
                navRef.current.classList.remove('nav-dark')
            }
        })
    })
  return (
    <>
    
        <div ref={navRef} className="header-container">
                    <img src={logo} alt="Netflix logo" className='net-logo'/>
            <div className="header-left">
                <ul>
                   
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>

                </ul>
            </div>
            <div className="header-right">
                <img src={search_icon} alt="search icon" className='icons'/>
                <p>Children</p>
                <img src={bell_icon} alt="bell icon" className='icons'/>

                <div className="header-profile">

                <img src={profile_img} alt="profile img" className='profile'/>
                <img src={caret_icon} alt="caret icon" className='caret'/>
                <div className="dropdown">
                    <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
                </div>
                </div>

            </div>
        </div>
    
    </>
  )
}

export default Header