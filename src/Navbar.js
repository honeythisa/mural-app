import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-white text-lg font-bold">
          Sinergia
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
