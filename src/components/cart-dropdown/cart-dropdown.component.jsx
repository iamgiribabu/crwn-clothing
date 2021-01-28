import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-Item.component';
import { connect } from 'react-redux';


const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItems => (
                    <CartItem key={cartItems.id} item={cartItems} />
                ))
            }
        </div>
        <CustomButton>Place Order</CustomButton>
    </div>
);

const mapStateToProps = ({ cart : {cartItems }}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);
