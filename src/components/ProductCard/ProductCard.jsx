import "./ProductCard.css";
import { useCart } from "../../context/cart-context";
import { getProductById } from "../../utils/findProductInCart";
import { useNavigate } from "react-router-dom";

export const ProductCard = (props) => {
  const { id, name, image, oldPrice, newPrice, rating, discount } = props.product;

  const { cart, cartDispatch } = useCart();

  const isProductInCart = getProductById(cart, id);

  const navigate = useNavigate();

  const handleAddToCartClick = () => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: props.product,
    });
  };

  const handleGoToCartClick = () => {
    navigate("/cart");
  };

  return (
    <div className={`card card-vertical d-flex direction-column relative shadow bg-${props.mode}`}>
      <div className="card-image-container">
        <img className="card-image" src={image} alt="shoes" />
      </div>
      <div className="card-details">
        <div className={`card-title text-${props.mode==="light" ? "dark" : "light"}`}>{name}</div>
        <div className="card-description">
          <p className="card-price d-flex align-end">
            <span className={`new-price text-${props.mode==="light" ? "dark" : "light"}`}>Rs. {newPrice}</span>
            <span className={`price-strike-through text-${props.mode==="light" ? "dark" : "light"}`}>Rs. {oldPrice}</span>
            <span className="discount">({discount}% OFF)</span>
          </p>
          <p className={`d-flex align-center text-${props.mode==="light" ? "dark" : "light"}`}>
            <span className="star material-icons-outlined">star</span>
            {rating}
          </p>
        </div>
        <div className="cta-btn">
          <button
            className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
            onClick={
              isProductInCart ? handleGoToCartClick : handleAddToCartClick
            }
          >
            {isProductInCart ? "Go To Cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
