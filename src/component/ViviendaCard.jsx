import React from 'react';
import './ViviendaCard.css'; // Importa los estilos para la tarjeta

function ViviendaCard({ imagenSrc, descripcion, precio }) {
  return (
    <div className="vivienda-card">
      <img src={imagenSrc} alt="Vivienda" className="vivienda-imagen" />
      <div className="vivienda-info">
        <p className="vivienda-descripcion">{descripcion}</p>
        <p className="vivienda-precio">Precio: {precio} / mes</p>
        <button className="vivienda-alquilar-btn">Alquilar</button>
      </div>
    </div>
  );
}

export default ViviendaCard;