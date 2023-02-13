import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
    const { showDropdown, setShowDropdown, cartCount } =
        useContext(CartContext);

    const toogleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="cart-icon-container" onClick={toogleDropdown}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartCount}</span>
        </div>
    );
};

export default CartIcon;
