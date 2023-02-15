import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.style.scss";

const Checkout = () => {
    const { cartItems, cartSum } = useContext(CartContext);

    return (
        <div>
            {cartItems.map((product) => (
                <CheckoutItem key={product.id} product={product} />
            ))}
            <div className="summe-conatiner">{`TOTAL: $${cartSum}`}</div>
        </div>
    );
};

export default Checkout;
