
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Settings, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';

const DashboardNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
  };

  // Get user display name or first letter for the avatar
  const getUserInitial = () => {
    if (user?.user_metadata?.name) {
      return user.user_metadata.name[0].toUpperCase();
    }
    if (user?.email) {
      return user.email[0].toUpperCase();
    }
    return 'U';
  };

  return (
    <nav className="bg-white border-b border-gray-200 py-3 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="text-2xl font-bold text-primary flex items-center">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7 mr-2"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          Spark
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/dashboard" className="text-gray-700 hover:text-primary transition-colors">Dashboard</Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-primary transition-colors">Analytics</Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-primary transition-colors">Settings</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-white">
                  {getUserInitial()}
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-9 w-9 p-0 mr-2 rounded-full">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                  {getUserInitial()}
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-md z-50 animate-fade-in">
          <div className="flex flex-col p-4 space-y-3">
            <Link to="/dashboard" className="text-gray-700 hover:text-primary p-2" onClick={toggleMenu}>Dashboard</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-primary p-2" onClick={toggleMenu}>Analytics</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-primary p-2" onClick={toggleMenu}>Settings</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DashboardNavbar;
