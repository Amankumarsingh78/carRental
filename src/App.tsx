import React, { useState, useMemo } from 'react';
import { Car } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SearchFilters } from './components/SearchFilters';
import { CarCard } from './components/CarCard';
import { CarModal } from './components/CarModal';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { cars } from './data/cars';
import type { Car as CarType, SearchFilters as SearchFiltersType } from './types';

function App() {
  const [showCars, setShowCars] = useState(false);
  const [selectedCar, setSelectedCar] = useState<CarType | null>(null);
  const [showBooking, setShowBooking] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<SearchFiltersType>({
    location: '',
    pickupDate: '',
    returnDate: '',
    carType: '',
    priceRange: [30, 200],
    transmission: '',
    fuelType: '',
    seats: ''
  });

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      if (filters.carType && car.type !== filters.carType) return false;
      if (filters.transmission && car.transmission !== filters.transmission) return false;
      if (filters.fuelType && car.fuelType !== filters.fuelType) return false;
      if (filters.seats && car.seats < parseInt(filters.seats)) return false;
      if (car.dailyRate < filters.priceRange[0] || car.dailyRate > filters.priceRange[1]) return false;
      return true;
    });
  }, [filters]);

  const handleSearchClick = () => {
    setShowCars(true);
    document.getElementById('cars-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCarSelect = (car: CarType) => {
    setSelectedCar(car);
  };

  const handleBookCar = (car: CarType) => {
    setSelectedCar(null);
    setShowBooking(true);
  };

  const handleBookingConfirm = () => {
    setShowBooking(false);
    setSelectedCar(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
      
      <Hero onSearchClick={handleSearchClick} />
      
      {showCars && (
        <section id="cars-section" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Perfect Car
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From economy to luxury, find the perfect vehicle for your journey
              </p>
            </div>

            <SearchFilters
              filters={filters}
              onFiltersChange={setFilters}
              isOpen={filtersOpen}
              onToggle={() => setFiltersOpen(!filtersOpen)}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  onSelect={handleCarSelect}
                />
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No cars match your current filters.</p>
                <button
                  onClick={() => setFilters({
                    location: '',
                    pickupDate: '',
                    returnDate: '',
                    carType: '',
                    priceRange: [30, 200],
                    transmission: '',
                    fuelType: '',
                    seats: ''
                  })}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose DriveNow?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the best in car rental with our premium services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Fleet</h3>
              <p className="text-gray-600">Choose from our extensive collection of well-maintained, premium vehicles</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive rates with no hidden fees. Get the best value for your money</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast & Easy</h3>
              <p className="text-gray-600">Book in minutes with our streamlined process. Pick up and go!</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modals */}
      {selectedCar && (
        <CarModal
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
          onBook={handleBookCar}
        />
      )}

      {showBooking && (
        <BookingModal
          car={selectedCar}
          onClose={() => setShowBooking(false)}
          onConfirm={handleBookingConfirm}
        />
      )}
    </div>
  );
}

export default App;