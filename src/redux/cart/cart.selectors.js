import { createSelector } from 'reselect' ;

const selectCart = state => state.cart ;

export const selectCartItems = createSelector( //takes 2 parameter
    [selectCart], // the collection
    cart => cart.cartItems //get the returns from input selector; the function return the value that we want out of collection
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartitemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((accumalatedQuantity, cartItem)=>
        accumalatedQuantity + cartItem.quantity
        ,0)
);
export const selectCartTotal  = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((accumalatedQuantity, cartItem)=>
        accumalatedQuantity + cartItem.quantity * cartItem.price
        ,0)
)