import "./nav-bar-inferior.css";

export default function NavBarInferior() {
  return (
<div className="mensaje-final">
  <ul>
    <li>
      <div className="item">
        <img src="/src/pages/img/cars.png" alt="Envío gratis" />
        <span>Envío gratis</span>

      </div>
    </li>
    <li>
      <div className="item">
        <img src="/src/pages/img/payment.png" alt="Pagos" />
        <span>Pagos</span>

      </div>
    </li>
    <li>
      <div className="item">
        <img src="/src/pages/img/money.png" alt="Reembolso" />
        <span>Reembolso</span>

      </div>
    </li>
    <li>
      <div className="item">
        <img src="/src/pages/img/support.png" alt="Soporte" />
        <span>Soporte</span>

      </div>
    </li>
  </ul>
</div>

  );
}
