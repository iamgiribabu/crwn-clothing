import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-Item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import {toggleCartHidden} from '../../redux/cart/cart.actions.js'

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {   cartItems.length ? (
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
                ))
         ) : ( <span className='empty-message'>Your cart is empty</span>)
        
        }
        </div>
        <CustomButton onClick={()=>{ 
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>Place Order</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems : selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));
