import { Navbar } from "../../components/Navbar/Navbar";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { useCart } from "../../context/cart-context";

export const Home = (props) => {
  const { cart } = useCart();

  console.log(cart);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    //IIFE
    (async () => {
      try {
        const {
          data: { books },
        } = await axios.get("data.json");
        setProducts(books);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Fragment>
      <main className="container-md center my-5 d-flex gap wrap">
        {products.map((product) => (
          <ProductCard mode={props.mode} key={product.id} product={product} />
        ))}
      </main>
    </Fragment>
  );
};
