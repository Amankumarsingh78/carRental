import React from 'react';
import type { Car } from '../types';
import { Users, Fuel, Settings, Luggage, Star, MapPin } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onSelect: (car: Car) => void;
}

export const CarCard: React.FC<CarCardProps> = ({ car, onSelect }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{car.rating}</span>
            <span className="text-xs text-gray-500">({car.reviews})</span>
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
          {car.type}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            {car.location}
          </div>
        </div>

        <p className="text-gray-600 mb-4">{car.year} • {car.brand}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users className="h-4 w-4" />
            <span>{car.seats} Seats</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Settings className="h-4 w-4" />
            <span className="capitalize">{car.transmission}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Fuel className="h-4 w-4" />
            <span className="capitalize">{car.fuelType}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Luggage className="h-4 w-4" />
            <span>{car.luggage} Bags</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900">${car.dailyRate}</div>
            <div className="text-sm text-gray-500">per day</div>
          </div>
          <button
            onClick={() => onSelect(car)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Select Car
          </button>
        </div>
      </div>
    </div>
  );
};