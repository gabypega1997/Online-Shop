import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.style.scss";

const Checkout = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div>
            {cartItems.map((product) => (
                <CheckoutItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Checkout;
