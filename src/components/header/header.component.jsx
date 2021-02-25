import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/logo.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux'; // higher component ; used to givr access to component related to state;
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';


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
                (   <div className='option'>
                        <p className='option'>{currentUser.displayName}</p>
                        <div  className='option' onClick={()=> auth.signOut()}> SIGN OUT</div>
                    </div>
                )
                :
                (<Link className='option' to='/signin'>SIGN IN</Link>)
            }
            <CartIcon />
        

        </div>
        {hidden ? null : <CartDropdown />}
        
    </div>
);

const mapStateToProps = createStructuredSelector ({ 
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})

export default  connect(mapStateToProps)(Header);