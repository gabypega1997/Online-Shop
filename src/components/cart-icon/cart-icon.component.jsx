import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => {
    const {setShowDropdown} = useContext(CartContext);

    const handleDropdown = () => {
        setShowDropdown((prevVal) => !prevVal);
    };

    return (
        <div className="cart-icon-container">
            <ShoppingIcon className="shopping-icon" onClick={handleDropdown} />
            <span className="item-count">0</span>
        </div>
    );
};

export default CartIcon;
