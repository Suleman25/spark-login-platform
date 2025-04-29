
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary flex items-center">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8 mr-2"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          Spark
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
          <Link to="/#features" className="text-gray-700 hover:text-primary transition-colors">Features</Link>
          <Link to="/#pricing" className="text-gray-700 hover:text-primary transition-colors">Pricing</Link>
          <div className="flex space-x-4">
            <Link to="/auth">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link to="/auth?signup=true">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-md z-50 animate-fade-in">
          <div className="flex flex-col p-4 space-y-3">
            <Link to="/" className="text-gray-700 hover:text-primary p-2" onClick={toggleMenu}>Home</Link>
            <Link to="/#features" className="text-gray-700 hover:text-primary p-2" onClick={toggleMenu}>Features</Link>
            <Link to="/#pricing" className="text-gray-700 hover:text-primary p-2" onClick={toggleMenu}>Pricing</Link>
            <div className="pt-2 flex flex-col space-y-3">
              <Link to="/auth" onClick={toggleMenu}>
                <Button variant="outline" className="w-full">Log In</Button>
              </Link>
              <Link to="/auth?signup=true" onClick={toggleMenu}>
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
