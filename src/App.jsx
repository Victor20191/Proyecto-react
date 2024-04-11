import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PaginaInicio from "./pages/pagina-inicio";
// import PaginaProductos from "./pages/pagina-productos";
import Contacto from "./pages/contacto";
import NavBar from "./components/nav-var";
import { useState } from "react";
import Cart from "./components/cart";
import DataProvider from "./context/DataContext";
import { Productos } from "./components/productos";

function App() {
  return (
    <DataProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/"element={<PaginaInicio/>}/>
          <Route path="/productos" element={<Productos/>}/>
          <Route path="/contacto" element={<Contacto />}/>
          <Route path="/carrito" element={<Cart />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}
export default App;
