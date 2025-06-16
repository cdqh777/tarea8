import React from 'react';
import PeliculaCard from './PeliculaCard';

const PaginaPeliculas = ({ openModal }) => {
  const peliculas = [
    {
      id: 1,
      titulo: "El Coraje del Pueblo",
      imagen: "https://imgs.search.brave.com/miQQWUie0q8dx4cwv2mImBkS1HB_6gf60kFXVbomyw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5qZGlNV1Ew/TlRZdE5tTTFNeTAw/TjJOa0xUaGlZekV0/TURVMFl6RXlaakUx/TW1VeFhrRXlYa0Zx/Y0djQC5qcGc",
      resumen: "Drama histórico que narra los eventos de la masacre de San Juan en 1967. Una obra maestra del cine boliviano que retrata la lucha social y política del país.",
      año: 1971,
      director: "Jorge Sanjinés"
    },
    {
      id: 2,
      titulo: "La Nación Clandestina",
      imagen: "https://imgs.search.brave.com/2tB7elpKJA4WCLI0JwfvGyLN4mfyuTfT6WXrVlqT0No/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk16QTVOR1Jq/WXpJdE1ERTBaQzAw/TURFMExXSmpaRFF0/WXpGbU1XSXpOV0ky/WkRnNVhrRXlYa0Zx/Y0djQC5qcGc",
      resumen: "La historia de Sebastián Maisman, quien regresa a su comunidad indígena después de años de exilio urbano. Una reflexión profunda sobre la identidad cultural boliviana.",
      año: 1989,
      director: "Jorge Sanjinés"
    },
    {
      id: 3,
      titulo: "Chuquiago",
      imagen: "https://imgs.search.brave.com/Xhu9UH7JpdQdlxaNezJQyvwqkRBd0Di2VO2uHRuv5DY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5qVTBNRE00/T0RNNU1sNUJNbDVC/YW5CblhrRnRaVGd3/TURRM05qa3hNVEVA/LmpwZw",
      resumen: "Retrato de La Paz a través de cuatro historias que muestran diferentes aspectos de la vida urbana boliviana. Una mirada crítica y poética de la sociedad.",
      año: 1977,
      director: "Antonio Eguino"
    },
    {
      id: 4,
      titulo: "Mi Socio",
      imagen: "https://imgs.search.brave.com/nVOC4Zsu2Dq_sMQWi7l0GWSuXPW7rJRWSd4PzJBZZEI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5tRTROamsx/T0RZdE9UZzBOUzAw/WVRobExXSXlORFl0/T0RVeFl6STFaREZo/TW1JMFhrRXlYa0Zx/Y0djQC5qcGc",
      resumen: "Comedia que explora las diferencias culturales entre el mundo indígena y mestizo en Bolivia. Una obra que combina humor y crítica social.",
      año: 1982,
      director: "Paolo Agazzi"
    },
    {
      id: 5,
      titulo: "Yawar Mallku",
      imagen: "https://www.retinalatina.org/wp-content/uploads/2021/03/po-yawarmallku.jpg",
      resumen: "Drama que aborda el tema de la esterilización forzada en comunidades indígenas. Una denuncia social poderosa del cine boliviano comprometido.",
      año: 1969,
      director: "Jorge Sanjinés"
    }
  ];

  return (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Catalogo de Películas Bolivianas
        </h2>
        <div className="card-row">
          {peliculas.map((pelicula) => (
            <PeliculaCard
              key={pelicula.id}
              pelicula={pelicula}
              openModal={openModal}
              className="pelicula-card"
            />
          ))}
        </div>
    </div>
  );
};

export default PaginaPeliculas;