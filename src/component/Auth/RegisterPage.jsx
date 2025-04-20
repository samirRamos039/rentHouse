import React, { useState } from 'react';
import './AuthForms.css'; // Importa estilos comunes para formularios

function RegisterPage() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/usuario/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, apellido, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registro exitoso:', data);
        // Aquí podrías mostrar un mensaje de éxito y quizás redirigir al login
      } else {
        const errorData = await response.json();
        console.error('Error al registrar:', errorData);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    } catch (error) {
      console.error('Error de red:', error);
      // Aquí podrías manejar errores de conexión
    }
  };

  return (
    <div className="auth-card">
      <h3>Registrarse</h3>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="register-nombre">Nombre:</label>
          <input
            type="text"
            id="register-nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="register-apellido">Apellido:</label>
          <input
            type="text"
            id="register-apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="register-email">Email:</label>
          <input
            type="email"
            id="register-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="register-password">Contraseña:</label>
          <input
            type="password"
            id="register-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-button">Registrarse</button>
      </form>
    </div>
  );
}

export default RegisterPage;