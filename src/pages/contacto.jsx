import NavBarInferior from "../components/nav-var-inferior";
import "./contacto.css";

export default function TiendaInfo() {
  return (
    <>
      <div className="container-contacto">
        <h1>Store Colombia</h1>
        <p>
          <b>Dirección:</b> Carrera 47 Nº 50-24. Oficina 1303 Edificio Furatena
        </p>
        <p>
          <b>Teléfono:</b> 44446904
        </p>
        <p>
          <b>Correo electrónico:</b> info@mcolombiastore.com
        </p>
        <p>
          <b>Horario de apertura:</b> Lunes - Viernes: 9am - 6pm, Sábado: 10am -
          4pm
        </p>
        <div className="column-2 image">
          <img src="./img/Contacto.svg" alt="" className="img-element" />
        </div>
      </div>
      <NavBarInferior></NavBarInferior>
    </>
  );
}
