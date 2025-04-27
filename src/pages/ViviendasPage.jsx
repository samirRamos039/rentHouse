import React from 'react';
import ViviendaCard from '../component/ViviendaCard';
import './ViviendasPage.css'; // Importa los estilos para la página

// Importa imágenes de ejemplo (asegúrate de tener estas imágenes en tu carpeta src/assets o public)
import casa1 from '../assets/casa1.jpg';
import casa2 from '../assets/casa2.jpg';
import casa3 from '../assets/casa3.jpg';
import apartamento1 from '../assets/apartamento1.jpg';
import apartamento2 from '../assets/apartamento2.jpg';
import loft1 from '../assets/loft1.jpg';

function ViviendasPage() {
  const viviendas = [
    {
      id: 1,
      imagenSrc: casa1,
      descripcion: 'Encantadora casa de campo con jardín y piscina. Ideal para familias.',
      precio: '1200',
    },
    {
      id: 2,
      imagenSrc: apartamento1,
      descripcion: 'Moderno apartamento en el centro de la ciudad con excelentes vistas.',
      precio: '950',
    },
    {
      id: 3,
      imagenSrc: loft1,
      descripcion: 'Elegante loft de diseño industrial, perfecto para solteros o parejas.',
      precio: '1100',
    },
    {
      id: 4,
      imagenSrc: casa2,
      descripcion: 'Amplia casa con 4 habitaciones en zona residencial tranquila.',
      precio: '1500',
    },
    {
      id: 5,
      imagenSrc: apartamento2,
      descripcion: 'Acogedor apartamento de dos habitaciones cerca de la playa.',
      precio: '800',
    },
    {
      id: 6,
      imagenSrc: casa3,
      descripcion: 'Casa adosada con balcón y terraza. Luminosa y bien comunicada.',
      precio: '1350',
    },
  ];

  return (
    <div className="viviendas-page">
      <h2>Explora nuestras viviendas disponibles</h2>
      <div className="viviendas-grid">
        {viviendas.map((vivienda) => (
          <ViviendaCard
            key={vivienda.id}
            imagenSrc={vivienda.imagenSrc}
            descripcion={vivienda.descripcion}
            precio={vivienda.precio}
          />
        ))}
      </div>
    </div>
  );
}

export default ViviendasPage;