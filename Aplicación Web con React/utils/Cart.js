// src/utils/Cart.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (book) => {
        const existingItem = cartItems.find(item => item.id === book.id);
        if (existingItem) {
            setCartItems(cartItems.map(item => 
                item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { ...book, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const updateCartQuantity = (id, quantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: parseInt(quantity) } : item
        ));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
