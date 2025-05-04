import React, { useState, useEffect } from 'react';
import './AdminDashboard.css'; // Importa los estilos
import { useNavigate } from 'react-router-dom'; // Si necesitas redirigir

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook para la navegación

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/usuario/get'); // Tu ruta para obtener usuarios
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = () => {
    // Aquí podrías navegar a un formulario de creación de usuario
    console.log('Crear nuevo usuario');
    // Ejemplo de navegación: navigate('/admin/crear-usuario');
  };

  const handleUpdateUser = (id) => {
    // Aquí podrías navegar a un formulario de edición para el usuario con el ID dado
    console.log(`Actualizar usuario con ID: ${id}`);
    // Ejemplo de navegación: navigate(`/admin/editar-usuario/${id}`);
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm(`¿Estás seguro de eliminar el usuario con ID: ${id}?`)) {
      try {
        const response = await fetch(`/api/usuario/delete/${id}`, { // Asume que tienes una ruta para eliminar
          method: 'DELETE',
        });
        if (response.ok) {
          console.log(`Usuario con ID ${id} eliminado correctamente`);
          fetchUsers(); // Recargar la lista de usuarios
        } else {
          console.error(`Error al eliminar usuario con ID ${id}`);
        }
      } catch (error) {
        console.error('Error de red al eliminar usuario:', error);
      }
    }
  };

  if (loading) {
    return <div>Cargando usuarios...</div>;
  }

  if (error) {
    return <div>Error al cargar los usuarios: {error}</div>;
  }

  return (
    <div className="admin-dashboard">
      <h2>Administración de Usuarios</h2>
      <div className="admin-actions">
        <button onClick={handleCreateUser}>Crear Usuario</button>
        <button onClick={fetchUsers}>Listar Usuarios</button>
      </div>

      {users.length > 0 ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Tipo</th>
              <th>Acciones</th>
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
                <td className="actions-column">
                  <button onClick={() => handleUpdateUser(user.id)}>Actualizar</button>
                  <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay usuarios registrados.</p>
      )}
    </div>
  );
}

export default AdminDashboard;