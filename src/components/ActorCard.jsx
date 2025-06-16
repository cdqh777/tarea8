import React from 'react';

const ActorCard = ({ nombre, imagen, descripcion }) => (
  <div className="relative w-[50px] h-[50px] rounded-lg shadow-lg bg-white overflow-hidden flex flex-col">
    <img
      src={imagen}
      alt={nombre}
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 text-center">
      <h3 className="text-xl font-bold">{nombre}</h3>
      <p className="text-sm">{descripcion}</p>
    </div>
  </div>
);


export default ActorCard;
