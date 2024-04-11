import React, { useContext } from "react";
import { dataContext } from "../context/DataContext";
// import "../pages/pagina-productos.css";
import '../components/productos.css'
import Carrito from "./carrito";

export const Productos = () => {
  const { productos,cart,setCart } = useContext(dataContext);

const aproducto=(producto)=>{//Función captura de producto carrito
  setCart([...cart,producto]);

}

  return (
    <>
    <Carrito></Carrito>
    <div className="contenedor-principal">
      {productos.map((producto, index) => (
        <div className="contenedor-img" key={index}>
          <img src={producto.image} alt={producto.title} />
          <h3>{producto.title}</h3>
          <p>Precio: ${producto.price}</p>
          <div className="carrito">
            <button className="boton-carrito" onClick={()=>aproducto(producto)}>Añadir al carrito</button>
          </div>
        </div>
        
      ))}
    </div>
    </>
  );
};