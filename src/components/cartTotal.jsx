import React, { useContext } from "react";
import { dataContext } from "../context/DataContext";

export default function CartTotal() {
  const { cart } = useContext(dataContext);
  const total = cart.reduce(
    (acumulador, elemento) => acumulador + elemento.price,
    0
  );
  return (
    <div className="cartTotal">
      <h3>Total a pagar: ${total}</h3>
    </div>
  );
}
