import { useContext } from "react";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../contexts/cart.context";

import "./cart-dropdown.styles.scss";
import { Link, useNavigate } from "react-router-dom";

const CartDropdown = () => {
    const { cartItems, setShowDropdown } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate("/checkout");
    };

    const toogleDropdown = () => {
        setShowDropdown((showDropdown) => !showDropdown);
    };

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                        ></CartItem>
                    ))
                ) : (
                    <h2>No items </h2>
                )}
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;
