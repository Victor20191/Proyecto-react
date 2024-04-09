import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PaginaInicio from "./pages/pagina-inicio";
import PaginaProductos from "./pages/pagina-productos";
import Contacto from "./pages/contacto";
import NavBar from "./components/nav-var";
import { useState } from "react";

function App() {
  const [allProducts, setAllProducts] = useState(
    []
  ); /*pruductos que se van añadiendo al carrito*/
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <PaginaInicio
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          }
        />
        <Route
          path="/productos"
          element={
            <PaginaProductos
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          }
        />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}
export default App;
