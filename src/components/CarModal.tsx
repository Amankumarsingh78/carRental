import React, { useState } from 'react';
import type { Car } from '../types';
import { X, Star, Users, Fuel, Settings, Luggage, MapPin, Calendar, Clock, CreditCard } from 'lucide-react';

interface CarModalProps {
  car: Car | null;
  onClose: () => void;
  onBook: (car: Car) => void;
}

export const CarModal: React.FC<CarModalProps> = ({ car, onClose, onBook }) => {
  const [pickupDate, setPickupDate] = useState(new Date().toISOString().split('T')[0]);
  const [returnDate, setReturnDate] = useState(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);

  if (!car) return null;

  const calculateDays = () => {
    const pickup = new Date(pickupDate);
    const returnD = new Date(returnDate);
    const diffTime = Math.abs(returnD.getTime() - pickup.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays || 1;
  };

  const days = calculateDays();
  const totalCost = days * car.dailyRate;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Book {car.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Car Details */}
            <div>
              <div className="relative mb-6">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{car.rating}</span>
                    <span className="text-sm text-gray-500">({car.reviews})</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{car.name}</h3>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {car.location}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="h-5 w-5" />
                    <span>{car.seats} Seats</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Settings className="h-5 w-5" />
                    <span className="capitalize">{car.transmission}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Fuel className="h-5 w-5" />
                    <span className="capitalize">{car.fuelType}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Luggage className="h-5 w-5" />
                    <span>{car.luggage} Bags</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Book This Car</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="inline h-4 w-4 mr-1" />
                      Return Date
                    </label>
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Pickup Location
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>{car.location}</option>
                  </select>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold mb-3">Rental Summary</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Daily Rate</span>
                      <span>${car.dailyRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Number of Days</span>
                      <span>{days} days</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Taxes & Fees</span>
                      <span>$0</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>${totalCost}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onBook(car)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all font-semibold flex items-center justify-center space-x-2"
                >
                  <CreditCard className="h-5 w-5" />
                  <span>Book Now - ${totalCost}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};