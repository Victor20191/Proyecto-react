import { useEffect, useState } from "react";
import "./pagina-productos.css";
import Carrito from "../components/carrito";

/*Context */

/**/

export default function PaginaProductos({ allProducts, setAllProducts }) {


const[active,setActive]=useState(false);//Carrito

  const [productos, setProductos] = useState([]); // Para evitar que se siga haciendo la petición de manera infinita
  const onAddProduct = () => {
    console.log("Prueba");
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);
  return (
    <>
      <Carrito onClick={()=>setActive(!active)}></Carrito>
      <div className="contenedor-principal">
        {productos.map((producto, index) => (
          <div className="contenedor-img" key={index}>
            <img src={producto.image} alt={producto.title} />
            <h3>{producto.title}</h3>
            <p>Precio:${producto.price}</p>
            <p>Unidades:1934</p>
            <div className="carrito">
              <button className="boton-carrito" onClick={() => onAddProduct()}>Añadir al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
