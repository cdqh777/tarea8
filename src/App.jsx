import React, { useState } from 'react';
import Header from './components/Cabecera';
import Navbar from './components/BarraNavegacion';
import MainContent from './components/ContenidoPrincipal';
import Sidebar from './components/BarraLateral';
import Footer from './components/Pie';
import Modal from './components/Modal';
import './App.css';


const App = () => {
  const [currentPage, setCurrentPage] = useState('principal');
  const [selectedPelicula, setSelectedPelicula] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (pelicula) => {
    setSelectedPelicula(pelicula);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPelicula(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Header />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <MainContent currentPage={currentPage} openModal={openModal} />
      <Sidebar />
      <Footer />
      {modalOpen && (
        <Modal 
          pelicula={selectedPelicula} 
          closeModal={closeModal} 
        />
      )}
    </div>
  );
};

export default App;