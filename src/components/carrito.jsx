import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./cart";
import './carrito.css'

export default function Carrito() {
  return (
    <div className="carrito">
      <Link to='/carrito' element={Cart}><button className="carrito-compra">Carrito</button></Link>
    </div>
  );
}