import { Link } from 'react-router-dom';
import { FaYoutube, FaDiscord, FaLinkedinIn, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useTheme } from '../../context/ThemeContext';

const socialLinks = [
  { icon: FaYoutube, href: 'https://youtube.com/@CodeHarmonydev', label: 'YouTube', color: 'hover:text-red-500' },
  { icon: FaDiscord, href: 'https://discord.gg/p3vtnzFbn5', label: 'Discord', color: 'hover:text-indigo-400' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/codeharmonydev/', label: 'LinkedIn', color: 'hover:text-blue-500' },
  { icon: FaXTwitter, href: 'https://x.com/codeharmonyHQ', label: 'X', color: 'hover:text-gray-100' },
  { icon: FaInstagram, href: 'https://instagram.com/codeharmony.dev', label: 'Instagram', color: 'hover:text-pink-500' },
  { icon: FaTelegramPlane, href: 'https://t.me/codeharmonydev', label: 'Telegram', color: 'hover:text-sky-400' },
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Mentors', path: '/mentors' },
  { name: 'DSA Sheet', path: '/dsa' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`border-t ${isDark ? 'bg-gray-950 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-3">
              Code Harmony
            </h3>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Empowering developers to crack coding interviews with expert mentorship and structured preparation.
            </p>
            <p className={`text-sm mt-3 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              ✉️ <a href="mailto:codeharmonyofficial@gmail.com" className={`no-underline ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                codeharmonyofficial@gmail.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-sm no-underline transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-colors no-underline ${
                    isDark
                      ? 'text-gray-400 bg-gray-800 hover:bg-gray-700'
                      : 'text-gray-500 bg-gray-200 hover:bg-gray-300'
                  } ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-8 pt-6 border-t text-center text-sm ${isDark ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-400'}`}>
          © 2025 Code Harmony. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
