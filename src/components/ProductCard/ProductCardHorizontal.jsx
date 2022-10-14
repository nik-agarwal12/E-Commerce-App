import { useCart } from "../../context/cart-context";

export const ProductCardHorizontal = (props) => {
  const { id, name, image, oldPrice, newPrice, discount, quantity } = props.product;

  const { cartDispatch } = useCart();

  const handleDecrement = (id) => {
    cartDispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  const handleIncrement = (id) => {
    cartDispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const handleRemoveFromCartClick = (itemId) => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: itemId,
    });
  };

  return (
    <div className={`card-horizontal d-flex shadow my-2 bg-${props.mode==='light' ? "light" : "dark"}`} id="myCard">
      <div className="card-hori-image-container">
        <img className="card-image" src={image} alt="Book" />
      </div>
      <div className="card-details d-flex direction-column">
        <div className={`card-title text-${props.mode==='light' ? "dark" : "light"}`}>{name}</div>
        <div className="card-description">
          <p className={`card-price text-${props.mode==='light' ? "dark" : "light"}`}>
            Rs. {newPrice}
            <span className={`price-strike-through padding-all-8 text-${props.mode==='light' ? "dark" : "light"}`}>
              Rs. {oldPrice}
            </span>
            <span className="discount padding-all-8">({discount}% OFF)</span>
          </p>
        </div>
        <div className="quantity-container d-flex gap">
          <p className={`q-title text-${props.mode==='light' ? "dark" : "light"}`}>Quantity: </p>
          <div className="count-container d-flex align-center gap">
            <button
              className={`count text-${props.mode==='light' ? "dark" : "light"}`}
              onClick={() => handleDecrement(id)}
              disabled={quantity === 1}
            >
              -
            </button>
            <span className={`count-value text-${props.mode==='light' ? "dark" : "light"}`}>{quantity}</span>
            <button className={`count text-${props.mode==='light' ? "dark" : "light"}`} onClick={() => handleIncrement(id)}>
              +
            </button>
          </div>
        </div>

        <div className="cta-btn d-flex gap">
          <div className="cta-btn">
            <button type="button" onClick={() => handleRemoveFromCartClick(id)} className={`button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin`}>
              {" "}
              Remove From Cart
            </button>
          </div>
          <div className="cta-btn">
            <button className={`button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin text-${props.mode==='light' ? "dark" : "light"}`}>
              Move to ❤️
            </button>
          </div>
        </div>

        {/* <div className="cta-btn d-flex gap">
          <div className="cta-btn">
            <button type="button" onClick={() => handleRemoveFromCartClick(id)} className={` button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin ${props.mode==='light' ? "" : "btn-outline-light"}`}>
              {" "}
              Remove From Cart
            </button>
          </div>
          <div className="cta-btn">
            <button className={`btn button hori-btn btn-outline-${props.mode==='light' ? "primary" : "light"} btn-icon d-flex align-center justify-center gap cursor btn-margin text-${props.mode==='light' ? "dark" : "light"}`}>
              Move to ❤️
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};
