import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { selectCartitemsCount } from '../../redux/cart/cart.selectors';

const  CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>

    </div>
)

const mapDispatchToprops = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    itemCount : selectCartitemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToprops)(CartIcon);