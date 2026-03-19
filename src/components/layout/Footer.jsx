import { FaYoutube, FaDiscord, FaLinkedinIn, FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useTheme } from '../../context/ThemeContext';

const socialLinks = [
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/codeharmonydev/', label: 'LinkedIn', hoverColor: 'hover:text-[#0077B5]' },
  { icon: FaXTwitter, href: 'https://x.com/codeharmonyHQ', label: 'X', hoverColor: 'hover:text-white' },
  { icon: FaYoutube, href: 'https://youtube.com/@CodeHarmonydev', label: 'YouTube', hoverColor: 'hover:text-[#FF0000]' },
  { icon: FaDiscord, href: 'https://discord.gg/p3vtnzFbn5', label: 'Discord', hoverColor: 'hover:text-[#7289DA]' },
  { icon: FaInstagram, href: 'https://instagram.com/codeharmony.dev', label: 'Instagram', hoverColor: 'hover:text-[#E4405F]' },
  { icon: FaTelegramPlane, href: 'https://t.me/codeharmonydev', label: 'Telegram', hoverColor: 'hover:text-[#0088cc]' },
];

const whatsappLink = 'https://wa.me/919876543210';

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`py-6 text-center ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      {/* Social Icons Row */}
      <div className="flex justify-center items-center gap-4 mb-4">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl transition-transform duration-300 hover:scale-125 no-underline ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            } ${social.hoverColor}`}
            aria-label={social.label}
          >
            <social.icon />
          </a>
        ))}
      </div>

      {/* Contact Us Button */}
      <div className="mb-4">
        <a
          href="mailto:codeharmonyofficial@gmail.com"
          className={`inline-block px-6 py-2 rounded-lg text-sm font-medium no-underline transition-colors ${
            isDark
              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
          }`}
        >
          Contact Us
        </a>
      </div>

      {/* Copyright */}
      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
        © 2025 Code Harmony. All rights reserved.
      </p>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25d366] text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform duration-300 no-underline z-50"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
}
