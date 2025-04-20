import React, { useState } from 'react';
import LoginPage from '../component/Auth/LoginPage';
import RegisterPage from '../component/Auth/RegisterPage';
import MenuBar from '../component/Layout/MenuBar';
import './HomePage.css'; // Importa el archivo de estilos

function HomePage() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleAuth = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="home-page">
      <MenuBar />
      <div className="hero-section">
        <h1>Alquiler de Viviendas</h1>
        <p className="tagline">Encuentra tu hogar ideal.</p>
      </div>
      <div className="auth-container">
        <div className="auth-toggle">
          <button
            className={showLogin ? 'active' : ''}
            onClick={() => setShowLogin(true)}
          >
            Iniciar Sesión
          </button>
          <button
            className={!showLogin ? 'active' : ''}
            onClick={() => setShowLogin(false)}
          >
            Registrarse
          </button>
        </div>
        <div className="auth-form">
          {showLogin ? <LoginPage /> : <RegisterPage />}
        </div>
      </div>
      {/* Aquí podrías agregar más contenido de la página principal, como listado de viviendas destacadas, etc. */}
    </div>
  );
}

export default HomePage;