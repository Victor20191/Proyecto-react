import { Link } from "react-router-dom";
import './nav-bar-inferior.css'

export default function NavBarInferior() {
  return (
    <nav className="contenedor">
      <div className="logo">
      <h1>Colombia-Store</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
