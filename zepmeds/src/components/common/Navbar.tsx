import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Sun, Moon, Pill } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Navbar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleSearch = async (value: string) => {
    setQuery(value);
    if (value.trim().length < 2) {
      setResults([]);
      return;
    }
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/search?q=${value}`);
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error("Search failed", err);
    }
  };

  return (
    <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gray-100 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3">

          {/* Logo */}
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 dark:from-cyan-400 dark:to-green-400 p-2 rounded-xl">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 dark:from-cyan-400 dark:to-green-400 bg-clip-text text-transparent">
                Medollo
              </span>
            </Link>
          </div>

          {/* Search */}
          <div className="relative p-4 w-72">
            <input
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search medicine..."
              className="border p-2 w-full rounded"
            />

            {/* Suggestions dropdown */}
            {results.length > 0 && (
              <div className="absolute top-full mt-1 left-0 w-full bg-white dark:bg-gray-800 border rounded shadow-lg max-h-60 overflow-y-auto z-50">
                {results.map((med, i) => (
                  <div
                    key={i}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    onClick={() => {
                      setQuery(med.name);
                      setResults([]);
                      navigate(`/fmedicines?search=${encodeURIComponent(med.name)}`);
                    }}

                  >
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {med.name}
                    </span>
                    {med.price && (
                      <span className="text-sm text-gray-500 ml-2">
                        ₹{med.price}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/investorspage" className="nav-link">Investors</Link>
            <Link to="/doctors" className="nav-link">Healthcare Experts</Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === "light" ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
