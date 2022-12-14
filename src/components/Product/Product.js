import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, seller, ratings, price} = props.product;
    const {handleAddToCart} = props;

    // console.log(props);

    return (
        <div className='product'>
            <img src={img} alt='' ></img>
            <div className='product-info'>
             
                    <p className='product-name'>{name}</p>
                    <p>Price: ${price}</p>
                
                <div className='seller'>
                    <p><small>Seller: {seller}</small></p>
                    <p><small>Ratings: {ratings} stars</small></p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;