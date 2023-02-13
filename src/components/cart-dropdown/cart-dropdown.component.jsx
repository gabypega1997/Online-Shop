import { useContext } from "react";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../contexts/cart.context";

import "./cart-dropdown.styles.scss";
import { Link } from "react-router-dom";

const CartDropdown = () => {
    const { cartItems, setShowDropdown } = useContext(CartContext);

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
            <Link to="/checkout" onClick={toogleDropdown}>
                <Button>GO TO CHECKOUT</Button>
            </Link>
        </div>
    );
};

export default CartDropdown;
