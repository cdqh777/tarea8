import React from 'react';
import { Film, Star } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-700 to-yellow-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold text-center flex items-center justify-center gap-3">
          Cinemateca Boliviana
        </h1>
      </div>
    </header>
  );
};

export default Header;