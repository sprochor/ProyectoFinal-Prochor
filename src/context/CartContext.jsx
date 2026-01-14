// src/context/CartContext.jsx
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            // Lógica para sumar cantidad si ya existe
            setCart(cart.map(prod => {
                if(prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity }
                } else {
                    return prod;
                }
            }));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    }

    const removeItem = (itemId) => {
        setCart(cart.filter(prod => prod.id !== itemId));
    }

    const clearCart = () => setCart([]);

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    }

    const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);

    const totalPrice = cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}