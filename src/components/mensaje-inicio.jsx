import { Link } from "react-router-dom";
import "./mensaje-inicio.css";
export default function MensajeInicio() {
  return (
    <div className="mensaje-bienvenida">
      <div className="mensaje">
        <p>
          ¡Bienvenido a nuestra tienda de tecnología! Descubre las últimas
          innovaciones y gadgets que harán tu vida más fácil y emocionante.
          Explora nuestro catálogo y sumérgete en el mundo de la tecnología de
          vanguardia. ¡Estamos emocionados de tenerte aquí!
        </p>
      </div>
      <Link to="/productos">
     <button type="button">
      Ver productos
     </button>
 </Link>
    </div>
  );
}
