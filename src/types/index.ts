export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  type: 'economy' | 'compact' | 'midsize' | 'full-size' | 'luxury' | 'suv' | 'convertible';
  transmission: 'automatic' | 'manual';
  fuelType: 'gasoline' | 'diesel' | 'hybrid' | 'electric';
  seats: number;
  doors: number;
  luggage: number;
  dailyRate: number;
  image: string;
  features: string[];
  rating: number;
  reviews: number;
  available: boolean;
  location: string;
}

export interface BookingData {
  carId: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  returnLocation: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    license: string;
  };
  totalCost: number;
  days: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  license: string;
  bookings: BookingData[];
}

export interface SearchFilters {
  location: string;
  pickupDate: string;
  returnDate: string;
  carType: string;
  priceRange: [number, number];
  transmission: string;
  fuelType: string;
  seats: string;
}