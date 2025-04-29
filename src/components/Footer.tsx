
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-xl font-bold text-primary flex items-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 mr-2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              Spark
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Empowering your digital journey with seamless solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#features" className="text-gray-600 hover:text-primary">Features</Link></li>
              <li><Link to="/#pricing" className="text-gray-600 hover:text-primary">Pricing</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary">Roadmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Documentation</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary">Help Center</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary">Careers</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Spark. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="text-gray-600 hover:text-primary text-sm">Privacy Policy</Link>
            <Link to="/" className="text-gray-600 hover:text-primary text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
