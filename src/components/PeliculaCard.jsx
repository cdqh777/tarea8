import React from 'react';
import { Film, Play } from 'lucide-react';


const PeliculaCard = ({ pelicula, openModal, className = "" }) => (
  <div className={className}>
    <img src={pelicula.imagen} alt={pelicula.titulo} />
    <h3>{pelicula.titulo}</h3>
    <p>{pelicula.resumen}</p>
    <button onClick={() => openModal(pelicula)}>Ver más</button>
  </div>
);

export default PeliculaCard;