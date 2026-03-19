import { useTheme } from '../context/ThemeContext';
import { FaYoutube, FaDiscord, FaLinkedinIn, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Mail } from 'lucide-react';

const socialLinks = [
  { icon: FaYoutube, href: 'https://youtube.com/@CodeHarmonydev', label: 'YouTube', bg: 'bg-red-600 hover:bg-red-700' },
  { icon: FaDiscord, href: 'https://discord.gg/p3vtnzFbn5', label: 'Discord', bg: 'bg-indigo-600 hover:bg-indigo-700' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/codeharmonydev/', label: 'LinkedIn', bg: 'bg-blue-600 hover:bg-blue-700' },
  { icon: FaXTwitter, href: 'https://x.com/codeharmonyHQ', label: 'X / Twitter', bg: 'bg-gray-700 hover:bg-gray-600' },
  { icon: FaInstagram, href: 'https://instagram.com/codeharmony.dev', label: 'Instagram', bg: 'bg-pink-600 hover:bg-pink-700' },
  { icon: FaTelegramPlane, href: 'https://t.me/codeharmonydev', label: 'Telegram', bg: 'bg-sky-500 hover:bg-sky-600' },
];

export default function Contact() {
  const { isDark } = useTheme();

  return (
    <div className={`pt-20 min-h-screen ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className={`p-8 md:p-12 rounded-2xl ${isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200 shadow-lg'}`}>
            <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Get in Touch
            </h1>
            <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Have a question or want to collaborate? Reach out to us!
            </p>

            <div className={`flex items-center gap-3 p-4 rounded-xl mb-8 ${isDark ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}>
              <Mail className="text-red-500" size={24} />
              <div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Email us at</p>
                <a
                  href="mailto:codeharmonyofficial@gmail.com"
                  className={`font-medium no-underline ${isDark ? 'text-white hover:text-red-400' : 'text-gray-900 hover:text-red-600'}`}
                >
                  codeharmonyofficial@gmail.com
                </a>
              </div>
            </div>

            <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Follow Us
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-xl text-white font-medium transition-colors no-underline ${social.bg}`}
                >
                  <social.icon size={20} />
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
