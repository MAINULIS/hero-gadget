// add data to local storage 

const addToDb = id =>{
    let shoppingCart = {};

    // get the previous data from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    // change quantity
    const quantity = shoppingCart[id]; //here id is a dynamic value that's why we accessing id with bracket notation except dot notation
    if(quantity){
       const newQuantity = quantity + 1;
       shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart) );
};

// get stored data from local storage
const getStoredCart = () =>{
    let shoppingCart = {};

     // get the previous data from local storage
     const storedCart = localStorage.getItem('shopping-cart');
     if(storedCart){
         shoppingCart = JSON.parse(storedCart);
     }
     
     return shoppingCart;
};

// remove a specific element from local storage
const removeFromDb = id =>{
    // get the previous data from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart)
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart) );
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart')
}

export {addToDb, getStoredCart, removeFromDb, deleteShoppingCart};