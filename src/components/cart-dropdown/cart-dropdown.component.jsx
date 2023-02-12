import { Fragment, useContext } from "react";

import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
    const { showDropdown } = useContext(CartContext);
    return (
        <Fragment>
            {showDropdown ? (
                <div className="cart-dropdown-container">
                    <div className="cart-items">
                    
                    </div>
                    <Button>GO TO CHECKOUT</Button>
                </div>
            ) : null}
        </Fragment>
    );
};

export default CartDropdown;
