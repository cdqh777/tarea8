import React from 'react';
import ActorCard from './ActorCard';

const PaginaPrincipal = () => {
  const actoresFamosos = [
    {
      nombre: "David Santalla",
      imagen: "https://eldeber.com.bo/sites/default/efsfiles/2024-09/aa_1576704739_1140x520.jpg",
      descripcion: "Reconocido actor boliviano"
    },
    {
      nombre: "Reynaldo Yujra",
      imagen: "https://www.retinalatina.org/wp-content/uploads/2023/02/DIR-qatiqati.png",
      descripcion: "Actor y director de teatro"
    },
    {
      nombre: "Erika Andia",
      imagen: "https://www.eldiario.net/noticias/2014/2014_05/nt140525/f_2014-05-25_27.jpg",
      descripcion: "Actriz de cine y teatro"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Actores Famosos del Cine Boliviano
        </h2>
        <div className="card-row">
          {actoresFamosos.map((actor, index) => (
            <ActorCard 
              key={index} 
              nombre={actor.nombre}
              imagen={actor.imagen}
              descripcion={actor.descripcion}
            />
          ))}
        </div>
      </div>

      <div className="text-center py-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Bienvenidos a la Cinemateca Boliviana
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubre la riqueza del cine boliviano a través de nuestra colección de películas clásicas y contemporáneas. 
          Explora historias que reflejan nuestra cultura, tradiciones y la diversidad de nuestro país.
        </p>
      </div>
    </div>
  );
};

export default PaginaPrincipal;
