import React from 'react'
import StripeCheackout from 'react-stripe-checkout'


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IPoocE190nIxX4Qp4NAmXOBcsRZXxnUOCE1BsyXN6ls5clEmCxQ7NzlFYAkntps3cNLQpp1fdGCclugPiiUmypu00zc9S01Mb';
    const onToken = token => {
        console.log(token)
    }
    return (
        <div>
        <StripeCheackout 
            label='Pay Now'
            name='Fashion Hour Ltd.'
            billingAddress
            shippingAddress 
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey} 
              />
            
        </div>
    )
}

export default StripeCheckoutButton
