import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css'; // Importa el archivo de estilos

function MenuBar() {
  return (
    <nav className="menu-bar">
      <div className="logo">
        <Link to="/">AlquilaTuCasa</Link> {/* Reemplaza con el logo de tu página */}
      </div>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/viviendas">Viviendas</Link> {/* Ejemplo de otro enlace */}
        </li>
        <li>
          <Link to="/contacto">Contacto</Link> {/* Otro ejemplo */}
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuBar;