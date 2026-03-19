import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, LogOut } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Mentors', path: '/mentors' },
  { name: 'DSA Sheet', path: '/dsa' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { user, signOut } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isDark ? 'glass' : 'glass-light'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Code Harmony
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium no-underline transition-colors ${
                  location.pathname === link.path
                    ? 'text-red-500'
                    : isDark
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors cursor-pointer border-none ${
                isDark ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-gray-900 hover:bg-black/5'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="w-8 h-8 rounded-full overflow-hidden border-2 border-red-500 cursor-pointer bg-transparent p-0"
                >
                  <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
                </button>
                {profileOpen && (
                  <div className={`absolute right-0 mt-2 w-48 rounded-xl shadow-lg py-2 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                    <p className={`px-4 py-2 text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {user.displayName}
                    </p>
                    <hr className={isDark ? 'border-gray-700' : 'border-gray-200'} />
                    <button
                      onClick={() => { signOut(); setProfileOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 cursor-pointer border-none ${
                        isDark ? 'text-gray-300 hover:bg-gray-700 bg-transparent' : 'text-gray-600 hover:bg-gray-100 bg-transparent'
                      }`}
                    >
                      <LogOut size={14} /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : null}

            <Link
              to="/mentors"
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors no-underline"
            >
              Find My Mentor →
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg cursor-pointer border-none bg-transparent ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-lg`}
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-sm font-medium no-underline ${
                    location.pathname === link.path
                      ? 'text-red-500'
                      : isDark
                      ? 'text-gray-300'
                      : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg cursor-pointer border-none ${isDark ? 'text-gray-300 bg-transparent' : 'text-gray-600 bg-transparent'}`}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <Link
                  to="/mentors"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg no-underline"
                >
                  Find My Mentor →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
