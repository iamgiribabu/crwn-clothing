import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';

import {connect} from 'react-redux'; // higher component ; used to givr access to component related to state;
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../custom-button/custom-button.component';


const Header = ({currentUser, hidden})=>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to=''>CONTACT US</Link>
            
            {
                currentUser ? 
                (
                    <Link to='/' className='option' onClick={()=> auth.signOut()}>SIGN OUT</Link>
                )
                :
                (
                    <Link className='option' to='/signin'>SIGN IN</Link>

                )
            }
            <CartIcon />
            
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
)

const mapStateToProps = ({user : {currentUser}, cart : {hidden}}) => ({ //advance level of destructure
    currentUser ,
    hidden
})

export default  connect(mapStateToProps)(Header);