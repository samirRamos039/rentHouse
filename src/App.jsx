import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminDashboard from './component/Admin/AdminDashboard';
import MenuBar from './component/Layout/MenuBar'; // Importa el MenuBar
import ViviendasPage from './pages/ViviendasPage'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <MenuBar /> {/* La barra de navegación estará siempre visible */}
        <div className="content-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/viviendas" element={<ViviendasPage />} /> {/* Nueva ruta */}
            {/* Otras rutas de tu aplicación */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;