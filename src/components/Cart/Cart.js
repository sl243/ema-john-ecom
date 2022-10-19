import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = ({cart, ClearItem, children}) => {

    // console.log(cart)

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + (product.price * product.quantity);
        shipping = shipping + product.shipping;
    }

    // console.log(total);

    const tax = parseFloat((total * 0.1).toFixed(2));

    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Iteam: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
            {/* <button onClick={ClearItem}>Clear All Item</button> */}
            {children}
        </div>
    );
};

export default Cart;