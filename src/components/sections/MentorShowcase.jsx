import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { mentors } from '../../data/mentors';

const expertiseColors = {
  DSA: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Backend: 'bg-green-500/20 text-green-400 border-green-500/30',
  Frontend: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'System Design': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  Leadership: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'Product Management': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
};

const expertiseColorsLight = {
  DSA: 'bg-blue-100 text-blue-700 border-blue-200',
  Backend: 'bg-green-100 text-green-700 border-green-200',
  Frontend: 'bg-purple-100 text-purple-700 border-purple-200',
  'System Design': 'bg-orange-100 text-orange-700 border-orange-200',
  Leadership: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  'Product Management': 'bg-pink-100 text-pink-700 border-pink-200',
};

export default function MentorShowcase() {
  const { isDark } = useTheme();
  const featured = mentors.slice(0, 4);

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Learn from the Best
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Get mentored by engineers from the world&apos;s top tech companies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((mentor, i) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 rounded-xl border text-center ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-red-500"
              />
              <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {mentor.name}
              </h3>
              <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {mentor.companies.join(' • ')}
              </p>
              <div className="flex flex-wrap gap-1 justify-center">
                {mentor.expertise.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-2 py-0.5 rounded-full border ${
                      isDark ? expertiseColors[skill] || 'bg-gray-700 text-gray-300' : expertiseColorsLight[skill] || 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/mentors"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors no-underline"
          >
            View All Mentors →
          </Link>
        </div>
      </div>
    </section>
  );
}
