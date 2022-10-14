import { Fragment } from "react";
import { Navbar, ProductCardHorizontal } from "../../components";
import { useCart } from "../../context/cart-context";
import "./Cart.css";

export const Cart = (props) => {
  const { cart } = useCart();

  return (
    <Fragment>
      <main className="container-fluid text-center my-4">
        {cart && cart.length > 0 ? (
          <h2 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
            Your Cart: ({cart.length}) items
          </h2>
        ) : (
          <h2 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
            Your Cart is Empty
          </h2>
        )}
        <div className="container-md center d-flex direction-column gap my-2">
          {cart && cart.length > 0
            ? cart.map((product) => (
                <ProductCardHorizontal
                  mode={props.mode}
                  key={product.id}
                  product={product}
                />
              ))
            : ""}
        </div>
      </main>
    </Fragment>
  );
};
