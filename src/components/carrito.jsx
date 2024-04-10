import React, { useState } from 'react';

export default function Carrito() {
  const [modalVisible, setModalVisible] = useState(false);

  const abrirModal = () => {
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="carrito">
      <button onClick={abrirModal}>Carrito</button>
      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="cerrar-modal" onClick={cerrarModal}>
              &times;
            </span>
            <h2>Contenido del Carrito</h2>

          </div>
        </div>
      )}
    </div>
  );
}
