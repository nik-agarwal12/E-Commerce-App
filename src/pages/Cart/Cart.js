import { Fragment } from "react";
import { Navbar, ProductCardHorizontal } from "../../components";
import { useCart } from "../../context/cart-context";
import "./Cart.css";

export const Cart = () => {
  const { cart } = useCart();
  console.log(cart);

  return (
    <Fragment>
      <main className="container-fluid text-center my-4">
        {cart && cart.length > 0 ? (
          <h2>Your Cart: ({cart.length}) items</h2>
        ) : (
          <h2>Your Cart is Empty</h2>
        )}
        <div className="container-md center d-flex direction-column gap my-2">
          {cart && cart.length > 0
            ? cart.map((product) => (
                <ProductCardHorizontal key={product.id} product={product} />
              ))
            : ""}
        </div>
      </main>
    </Fragment>
  );
};
