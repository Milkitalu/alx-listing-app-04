import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { PROPERTYLISTINGSAMPLE } from '../constants';
import { PropertyProps } from '../interfaces';
import Pill from '@/components/common/pill';

const filters = ["Top Villa", "Self Checkin", "Luxury", "Mountain View"];

const Home: React.FC = () => {
  return ( 
      <>
          <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
              <p className="text-xl mt-4">The best prices for over 2 million properties worldwide.</p>
            </div>
          </div>
            <div className="flex space-x-4 p-4">
              {filters.map((filter, index) => (
                <Pill key={index} label={filter} />
              ))}
            </div>
            <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index) => (
                <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                  <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h2 className="text-xl font-bold">{property.name}</h2>
                    <p className="text-gray-600">{property.address.city}, {property.address.country}</p>
                    <p className="text-lg font-semibold">${property.price} / night</p>
                    <p className="text-yellow-500">Rating: {property.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </>
  );
};

export default Home;
