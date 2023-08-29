import React from 'react';
import { getStoredCart } from '../utility/fakeDB';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const {cartArray} = useLoaderData();
    console.log(cartArray)
};

export default Cart;