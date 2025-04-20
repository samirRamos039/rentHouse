import React, { useState, useEffect } from 'react';

function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/usuario/get');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error('Error al obtener usuarios');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div>
      <h2>Panel de Administración</h2>
      <h3>Lista de Usuarios</h3>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay usuarios registrados.</p>
      )}
      {/* Aquí podrías agregar más funcionalidades de administración */}
    </div>
  );
}

export default AdminDashboard;