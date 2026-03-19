import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn } from 'react-icons/fa';
import { Users, Building2, Trophy } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { mentors } from '../data/mentors';

const allExpertise = ['All', 'Frontend', 'Backend', 'DSA', 'System Design', 'Product Management'];

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

export default function Mentors() {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? mentors
    : mentors.filter((m) => m.expertise.includes(filter));

  return (
    <div className={`pt-20 min-h-screen ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      {/* Header */}
      <section className={`py-16 ${isDark ? 'bg-gradient-to-b from-gray-900 to-gray-950' : 'bg-gradient-to-b from-white to-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">👨‍🏫</div>
          <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Expert Mentorship Program
          </h1>
          <p className={`text-lg max-w-2xl mx-auto mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Get guided by engineers from the world&apos;s top tech companies. Our mentors have cracked it — now they&apos;ll help you do the same.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Users, value: '8+', label: 'Expert Mentors' },
              { icon: Building2, value: '50+', label: 'Companies' },
              { icon: Trophy, value: '500+', label: 'Success Stories' },
            ].map((stat) => (
              <div key={stat.label} className={`flex items-center gap-3 px-5 py-3 rounded-xl ${isDark ? 'bg-gray-800/60' : 'bg-white shadow-sm'}`}>
                <stat.icon className="text-red-500" size={20} />
                <div className="text-left">
                  <div className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{stat.value}</div>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {allExpertise.map((skill) => (
            <button
              key={skill}
              onClick={() => setFilter(skill)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer border-none ${
                filter === skill
                  ? 'bg-red-600 text-white'
                  : isDark
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((mentor, i) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`p-6 rounded-xl border text-center ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200 shadow-sm'
              }`}
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-red-500"
              />
              <h3 className={`font-semibold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {mentor.name}
              </h3>
              <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {mentor.companies.join(' • ')}
              </p>
              <div className="flex flex-wrap gap-1 justify-center mb-4">
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
              <div className="flex gap-2 justify-center">
                {mentor.linkedIn && (
                  <a
                    href={mentor.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors no-underline"
                  >
                    <FaLinkedinIn size={12} /> LinkedIn
                  </a>
                )}
                {mentor.topmate && (
                  <a
                    href={mentor.topmate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-medium rounded-lg transition-colors no-underline"
                  >
                    Guidance
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Become a Mentor CTA */}
      <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className={`p-10 rounded-2xl ${isDark ? 'bg-gradient-to-r from-gray-800 to-gray-800/50 border border-gray-700' : 'bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-lg'}`}>
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Want to Give Back?
            </h2>
            <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Share your experience and help the next generation of developers succeed.
            </p>
            <a
              href="mailto:codeharmonyofficial@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors no-underline"
            >
              Join as a Mentor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
