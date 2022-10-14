import { useCart } from "../../context/cart-context";

export const ProductCardHorizontal = ({ product }) => {
  const { id, name, image, oldPrice, newPrice, discount, quantity } = product;

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

  return (
    <div className="card-horizontal d-flex shadow my-2">
      <div className="card-hori-image-container relative">
        <img className="card-image" src={image} alt="Book" />
      </div>
      <div className="card-details d-flex direction-column">
        <div className="card-title">{name}</div>
        <div className="card-description">
          <p className="card-price">
            Rs. {newPrice}
            <span className="price-strike-through padding-all-8">
              Rs. {oldPrice}
            </span>
            <span className="discount padding-all-8">({discount}% OFF)</span>
          </p>
        </div>
        <div className="quantity-container d-flex gap">
          <p className="q-title">Quantity: </p>
          <div className="count-container d-flex align-center gap">
            <button
              className="count"
              onClick={() => handleDecrement(id)}
              disabled={quantity === 1}
            >
              -
            </button>
            <span className="count-value">{quantity}</span>
            <button className="count" onClick={() => handleIncrement(id)}>
              +
            </button>
          </div>
        </div>
        <div className="cta-btn d-flex gap">
          <div className="cta-btn">
            <button className="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
              {" "}
              Remove From Cart
            </button>
          </div>
          <div className="cta-btn">
            <button className="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
              Move to ❤️
            </button>
          </div>
        </div>
      </div>
    </div>

    // <div className="card mb-3" style={{ maxWidth: "540px" }}>
    //   <div className="row no-gutters">
    //     <div className="col-md-4 card-hori-image-container">
    //       <img src={image} className="card-img" alt="Book" />
    //     </div>
    //     <div className="col-md-8">
    //       <div className="card-body">
    //         {/* <h5 className="card-title">Card title</h5>
    //         <p className="card-text">
    //           This is a wider card with supporting text below as a natural
    //           lead-in to additional content. This content is a little bit
    //           longer.
    //         </p>
    //         <p className="card-text">
    //           <small className="text-muted">Last updated 3 mins ago</small>
    //         </p> */}

    //         <div className="card-details d-flex direction-column">
    //           <div className="card-title">{name}</div>
    //           <div className="card-description">
    //             <p className="card-price">
    //               Rs. {newPrice}
    //               <span className="price-strike-through padding-all-8">
    //                 Rs. {oldPrice}
    //               </span>
    //               <span className="discount padding-all-8">
    //                 ({discount}% OFF)
    //               </span>
    //             </p>
    //           </div>
    //           <div className="quantity-container d-flex gap">
    //             <p className="q-title">Quantity: </p>
    //             <div className="count-container d-flex align-center gap">
    //               <button
    //                 className="count"
    //                 onClick={() => handleDecrement(id)}
    //                 disabled={quantity === 1}
    //               >
    //                 -
    //               </button>
    //               <span className="count-value">{quantity}</span>
    //               <button className="count" onClick={() => handleIncrement(id)}>
    //                 +
    //               </button>
    //             </div>
    //           </div>
    //           <div className="cta-btn d-flex gap">
    //             <div className="cta-btn">
    //               <button className="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
    //                 {" "}
    //                 Add To Cart
    //               </button>
    //             </div>
    //             <div className="cta-btn">
    //               <button className="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
    //                 Move to ❤️
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
