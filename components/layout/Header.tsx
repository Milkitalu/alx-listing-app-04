import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
      <div className="text-2xl font-bold">Logo</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-700">Rooms</a></li>
            <li><a href="#" className="text-gray-700">Mansion</a></li>
            <li><a href="#" className="text-gray-700">Countryside</a></li>
            {/* Add more types as needed */}
          </ul>
        </nav>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <input type="text" placeholder="Search" className="border rounded-full py-2 px-4" />
          <FaSearch className="absolute top-2 right-3 text-gray-500" />
        </div>
        <button className="ml-4 bg-blue-500 text-white py-2 px-4 rounded">Sign In</button>
        <button className="ml-2 bg-gray-200 text-gray-700 py-2 px-4 rounded">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
