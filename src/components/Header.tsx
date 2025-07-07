import React from 'react';
import { Car, User, Menu, X } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle, isMenuOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">DriveNow</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Cars</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Locations</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </div>

          <button
            onClick={onMenuToggle}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Cars</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Locations</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">About</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Contact</a>
            <div className="pt-2 border-t">
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                Sign In
              </button>
              <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-1">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};