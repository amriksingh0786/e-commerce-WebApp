import React from "react"
import "./header.css"
import { ReactComponent as Logo} from '../../assets/crown.svg'
import  {Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase-utility'
import { connect } from 'react-redux'
import CardIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'


const Header=({currentuser,hidden})=>(
    
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
                    <div className='option' onClick={()=>auth.signOut()}>
                        Sign Out
                    </div>
                    :
                    <Link className='option' to='/sign'>
                        Sign In
                    </Link>
                }
                <CardIcon />

                </div>
                {hidden?null:
                <CartDropdown />}
            </div>

    )
    
const mapStateToProps=state=>({
    currentuser:state.user.currentuser,
    hidden:state.cart.hidden
})

export default connect(mapStateToProps)(Header);