import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    if (cartItems.length) {
        cartItems.forEach((item, index) => {
            if (item.id === productToAdd.id) {
                item.quantity++;
                return;
            }
            if (index === cartItems.length - 1) {
                productToAdd.quantity = 1;
                cartItems.push(productToAdd);
            }
        });
    } else {
        productToAdd.quantity = 1;
        cartItems.push(productToAdd);
    }

    return cartItems;
};

export const CartContext = createContext({
    showDropdown: false,
    setShowDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const value = { showDropdown, setShowDropdown, addItemToCart, cartItems };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
