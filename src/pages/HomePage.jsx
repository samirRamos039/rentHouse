import React, { useState } from 'react';
import LoginPage from '../component/Auth/LoginPage';
import RegisterPage from '../component/Auth/RegisterPage';
import './HomePage.css'; // Asegúrate de tener los estilos

// Importa la imagen de la casa moderna (asegúrate de tenerla en tu carpeta src/assets o public)
import modernHouseImage from '../assets/casa1.jpg'; // Ajusta la ruta según tu estructura de carpetas

function HomePage() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleAuth = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="home-page-layout">
      <div className="image-container">
        <img src={modernHouseImage} alt="Casa Moderna" className="hero-image" />
      </div>
      <div className="auth-section">
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
    </div>
  );
}

export default HomePage;