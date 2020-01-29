import React from 'react'
import Logo from '../../img/jrjobs.png'

//Components
import Home from '../home/'
import SignUp from '../signup/'
import Login from '../login/'

export default function Nav(){
    return(
        <nav>
            <div className='NavLogo'>
                <a>
                    <img src={Logo} height='50vh'/>
                </a>
            </div>
            {/* <ul>
                <li><a className='NavItem' href={Home}>Home</a></li>
                <li><a className='NavItem' href={Login}>Login</a></li>
                <li><a className='NavItem' href={SignUp}>Sign Up</a></li>
            </ul> */}
            
        </nav>
    )
}