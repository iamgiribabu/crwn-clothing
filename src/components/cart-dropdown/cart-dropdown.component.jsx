import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-Item.component';
import { connect } from 'react-redux';
import { selectCartitemsCount } from '../../redux/cart/cart.selectors';



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

const mapStateToProps = state => ({
    cartItems : selectCartitemsCount(state)
})

export default connect(mapStateToProps)(CartDropdown);
