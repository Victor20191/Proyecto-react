import { createContext, useState, useEffect } from "react";
export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState([]); //Carrito
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=104")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);

  return (
    <dataContext.Provider value={{ productos, cart, setCart }}>
      {children}
    </dataContext.Provider>
  );
};
export default DataProvider;
