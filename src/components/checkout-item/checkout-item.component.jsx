import "./checkout-item.styles.scss";

const CheckoutItem = ({ product }) => {
    const { name, imageUrl, price, quantity } = product;

    return (
        <div className="checkout-container">
            <div className="image">
                <img src={imageUrl} alt={name} width="100" />
            </div>
            <div className="name">{name}</div>
            <div className="quantity">{quantity}</div>
            <div>{price}</div>
            <div>X</div>
        </div>
    );
};

export default CheckoutItem;
