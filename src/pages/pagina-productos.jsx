import { useEffect, useState } from "react";
import "./pagina-productos.css";
export default function PaginaProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);

  return (
    <div className="contenedor-principal">
      {productos.map((producto, index) => (
        <div className="contenedor-img" key={index}>
          <img src={producto.image} alt={producto.title} />
          <h3>{producto.title}</h3>
          <p>Precio:{producto.price}</p>
          <p>Unidades:{producto.quantity}</p>
          <div className="carrito">
            <button>Añadir al carrito</button>
          </div>
        </div>
      ))}
    </div>
  );
}
