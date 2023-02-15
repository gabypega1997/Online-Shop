import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ product }) => {
    const { name, imageUrl, price, quantity } = product;
    const { deleteItemFromCart, decrementItemFromCart, addItemToCart } =
        useContext(CartContext);

    const deleteCartItem = () => {
        deleteItemFromCart(product);
    };

    const decrementCartItem = () => {
        decrementItemFromCart(product);
    };

    const addCartItem = () => {
        addItemToCart(product);
    };
    return (
        <div className="checkout-container">
            <div className="image">
                <img src={imageUrl} alt={name} width="100" />
            </div>
            <div className="name">{name}</div>
            <div className="quantity">
                <Button buttonType="oneChar" onClick={decrementCartItem}>
                    {" "}
                    &lt;
                </Button>
                {quantity}
                <Button buttonType="oneChar" onClick={addCartItem}>
                    {" "}
                    &gt;
                </Button>
            </div>
            <div>{price}</div>
            <div>
                <Button buttonType="oneChar" onClick={deleteCartItem}>
                    x
                </Button>
            </div>
        </div>
    );
};

export default CheckoutItem;
