import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const deleteCartItem = (cartItems, productToDelete) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
};

const decrementCartItem = (cartItems, productToDecrement) => {
    if (productToDecrement.quantity > 1) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToDecrement.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
    }
    return [...cartItems];
};

export const CartContext = createContext({
    showDropdown: false,
    setShowDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {},
    deleteItemFromCart: () => {},
    decrementItemFromCart: () => {},
    cartCount: 0,
    cartSum: 0,
    setCartSum: () => {},
});

export const CartProvider = ({ children }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSum, setCartSum] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        const newCartSum = cartItems.reduce(
            (sum, cartItem) => sum + cartItem.quantity * cartItem.price,
            0
        );
        setCartSum(newCartSum);
        setCartCount(newCartCount);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };
    const deleteItemFromCart = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems, productToDelete));
    };

    const decrementItemFromCart = (productToDecrement) => {
        setCartItems(decrementCartItem(cartItems, productToDecrement));
    };

    const value = {
        showDropdown,
        setShowDropdown,
        addItemToCart,
        cartItems,
        cartCount,
        deleteItemFromCart,
        decrementItemFromCart,
        cartSum,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
