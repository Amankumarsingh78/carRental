import React from 'react';
import { Search, MapPin, Calendar, Clock } from 'lucide-react';

interface HeroProps {
  onSearchClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearchClick }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Find Your Perfect
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            {' '}Ride
          </span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Discover premium cars at unbeatable prices. Book in seconds, drive in minutes.
        </p>

        {/* Search Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                Pickup Location
              </label>
              <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                <option>New York, NY</option>
                <option>Los Angeles, CA</option>
                <option>Chicago, IL</option>
                <option>San Francisco, CA</option>
                <option>Miami, FL</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                Pickup Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                defaultValue={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <Clock className="h-4 w-4 mr-2 text-blue-600" />
                Return Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                defaultValue={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
              />
            </div>

            <div className="flex items-end">
              <button
                onClick={onSearchClick}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg font-semibold flex items-center justify-center space-x-2"
              >
                <Search className="h-5 w-5" />
                <span>Search Cars</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 sm:gap-8 mt-12 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-400">500+</div>
            <div className="text-sm sm:text-base text-gray-300">Premium Cars</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400">50+</div>
            <div className="text-sm sm:text-base text-gray-300">Locations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-green-400">24/7</div>
            <div className="text-sm sm:text-base text-gray-300">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};