import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminDashboard from './component/Admin/AdminDashboard';
import MenuBar from './component/Layout/MenuBar'; // Importa el MenuBar
<<<<<<< HEAD
=======
import ViviendasPage from './pages/ViviendasPage'; 
>>>>>>> 6e0455a0adbe59a8dd25b88b6b986fa841c94e52

function App() {
  return (
    <Router>
      <div className="app-container">
        <MenuBar /> {/* La barra de navegación estará siempre visible */}
        <div className="content-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminDashboard />} />
<<<<<<< HEAD
=======
            <Route path="/viviendas" element={<ViviendasPage />} /> {/* Nueva ruta */}
>>>>>>> 6e0455a0adbe59a8dd25b88b6b986fa841c94e52
            {/* Otras rutas de tu aplicación */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;