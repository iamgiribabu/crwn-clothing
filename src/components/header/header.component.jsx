import React from 'react';

import {connect} from 'react-redux'; // higher component ; used to givr access to component related to state;
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {signOutStart} from '../../redux/user/user.actions'
import {HeaderContainer, LogoContainer, LogoImage, OptionsContainer, OptionLink, OptionDiv, OptionP} from  './header.styles'

const Header = ({currentUser, hidden, signOutStart})=>(
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
                        <OptionDiv onClick={signOutStart}> SIGN OUT</OptionDiv>
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

const mapDispatchToProps = dispatch => ({
    signOutStart : () => dispatch(signOutStart())
})
export default  connect(mapStateToProps, mapDispatchToProps)(Header);