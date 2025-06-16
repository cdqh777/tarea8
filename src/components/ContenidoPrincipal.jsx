import React from 'react';
import PaginaPrincipal from './PaginaPrincipal';
import PaginaPeliculas from './PaginaPeliculas';

const MainContent = ({ currentPage, openModal }) => {
  return (
    <main className="container mx-auto px-4 py-8">
      {currentPage === 'principal' && <PaginaPrincipal />}
      {currentPage === 'peliculas' && <PaginaPeliculas openModal={openModal} />}
    </main>
  );
};

export default MainContent;