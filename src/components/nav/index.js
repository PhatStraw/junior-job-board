import React from 'react'
import Logo from '../../img/jrjobs.png'

//Components
import Home from '../home/'

export default function Nav(){
    return(
        <nav className='topNav'>
            <div className='NavLogo'>
                <a>
                    <img src={Logo} height='50vh'/>
                </a>
            </div>  
        </nav>
    )
}