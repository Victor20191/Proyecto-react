import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import "./App.css";
import PaginaInicio from "./pages/pagina-inicio";
import PaginaProductos from "./pages/pagina-productos";
import Contacto from "./pages/contacto";
import NavBar from "./components/nav-var";

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          {/* <Route path="/productos" element={<PaginaProductos />} /> */}
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
    </Router>
  );
}
export default App;
