import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCart from './Cards/ProductCart';
import { addToDb } from '../utility/fakeDB';

const Shop = () => {
    const productData = useLoaderData();
    // cart handler button
    const handleAddToCart = (id) =>{
        console.log(id)
        addToDb(id)
    }
    return (
        <div className='product-container'>
            {
                productData.map(product => <ProductCart
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></ProductCart>)
            }
        </div>
    );
};

export default Shop;