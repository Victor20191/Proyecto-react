import React, { useContext } from "react";
import { dataContext } from "../context/DataContext";
import "../components/cart.css";
import CartTotal from "./cartTotal";

export default function Cart() {
  const { cart } = useContext(dataContext);

  return (
    <>
      {cart.map((product) => (
        <div className="contenedor-principal" key={product.id}>
          <div className="contenedor-img">
          <img src={product.image} alt={product.title} />
          </div>
          <h3>{product.title}</h3>
          <p>Precio: ${product.price}</p>

          <CartTotal></CartTotal>
        </div>
      ))}
    </>
  );
}
