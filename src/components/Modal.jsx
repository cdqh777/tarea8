import React from 'react';
import { Film, X } from 'lucide-react';

const Modal = ({ pelicula, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-gray-800">{pelicula.titulo}</h3>
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-gray-400 to-gray-600 h-48 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <Film size={48} className="mx-auto mb-2" />
                <span className="text-sm">Imagen de {pelicula.titulo}</span>
              </div>
            </div>
            <div>
              <p className="text-gray-600 mb-2">
                <strong>Director:</strong> {pelicula.director}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Año:</strong> {pelicula.año}
              </p>
              <p className="text-gray-800 leading-relaxed">{pelicula.resumen}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;