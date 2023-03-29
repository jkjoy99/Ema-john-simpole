import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const { img, name, seller, ratings, price } = props.product
    const hanndleAddToCart = props.hanndleAddToCart;


    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <h2 className='product-name'>{name}</h2>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button onClick={() => hanndleAddToCart(props.product)} className='btn-cart'>Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />

            </button>
        </div>
    );
};

export default Product;