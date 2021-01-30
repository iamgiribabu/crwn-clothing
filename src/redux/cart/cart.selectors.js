import { createSelector } from 'reselect' ;

const selectCart = state => state.cart ;

export const selectCartItems = createSelector( //takes 2 parameter
    [selectCart], // the collection
    cart => cart.cartItems // the function return the value that we want out of collection
);

export const selectCartitemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((accumalatedQuantity, cartItem)=>
        accumalatedQuantity + cartItem.quantity
        ,0)
);