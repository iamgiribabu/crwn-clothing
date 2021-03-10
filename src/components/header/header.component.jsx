import React from 'react';
// import {Link} from 'react-router-dom';
// import {ReactComponent as Logo } from '../../assets/logo.svg';
// import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux'; // higher component ; used to givr access to component related to state;
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';

import {HeaderContainer, LogoContainer, LogoImage, OptionsContainer, OptionLink, OptionDiv, OptionP} from  './header.styles'

const Header = ({currentUser, hidden})=>(
    <HeaderContainer>
        <LogoContainer to='/'>
            <LogoImage className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to=''>CONTACT US</OptionLink>
            {   
                currentUser ? 
                (   <OptionDiv>
                        <OptionP>{currentUser.displayName}</OptionP>
                        <OptionDiv onClick={()=> auth.signOut()}> SIGN OUT</OptionDiv>
                    </OptionDiv>
                )
                :
                (<OptionLink to='/signin'>SIGN IN</OptionLink>)
            }
            <CartIcon />
        

        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
        
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({ 
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})

export default  connect(mapStateToProps)(Header);