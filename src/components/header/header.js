import React from "react"
import "./header.css"
import { ReactComponent as Logo} from '../../assets/crown.svg'
import  {Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase-utility'

const Header=({currentuser})=>(
    
        <div className="Header">
                <Link className='logo-container' to='/'>
                 <Logo className='logo'/>
                </Link>
      
                <div className="options">
                <Link className='option' to='/shop'>
                    Shop
                </Link>
                <Link className='option' to='/shop'>
                    Contact
                </Link>
                
                {
                    currentuser ?
                    <div className='option' onClick={()=>auth.signout}>
                        Sign Out
                    </div>
                    :
                    <Link className='option' to='/sign'>
                        Sign IN
                    </Link>
                }
                </div>
            </div>
        
    )
    
export default Header;