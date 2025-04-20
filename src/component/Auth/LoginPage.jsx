import React, { useState } from 'react';
import './AuthForms.css'; // Importa estilos comunes para formularios

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', { // Asegúrate de tener esta ruta en tu backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login exitoso:', data);
        // Aquí podrías guardar el token de autenticación y redirigir al usuario
      } else {
        const errorData = await response.json();
        console.error('Error al iniciar sesión:', errorData);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    } catch (error) {
      console.error('Error de red:', error);
      // Aquí podrías manejar errores de conexión
    }
  };

  return (
    <div className="auth-card">
      <h3>Iniciar Sesión</h3>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="login-email">Email:</label>
          <input
            type="email"
            id="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Contraseña:</label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-button">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default LoginPage;