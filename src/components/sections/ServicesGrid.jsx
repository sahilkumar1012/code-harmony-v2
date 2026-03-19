import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const services = [
  {
    icon: '👨‍🏫',
    title: 'Mentorship',
    description: 'Personalized guidance from FAANG engineers to accelerate your career.',
    link: '/mentors',
    external: false,
  },
  {
    icon: '🧩',
    title: 'DSA Preparation',
    description: 'Structured roadmap, curated problems, and concept mastery.',
    link: '/dsa',
    external: false,
  },
  {
    icon: '🎤',
    title: 'Mock Interviews',
    description: 'Real interview simulations with detailed feedback.',
    link: 'https://topmate.io/hisahil/1280127',
    external: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

export default function ServicesGrid() {
  const { isDark } = useTheme();

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            What We Offer
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Everything you need to crack your dream tech job
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const CardContent = (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
                whileHover={{ scale: 1.03, borderColor: '#e63946' }}
                className={`p-8 rounded-xl border transition-all cursor-pointer ${
                  isDark
                    ? 'bg-gray-800/50 border-gray-700 hover:shadow-[0_0_30px_rgba(230,57,70,0.15)]'
                    : 'bg-white border-gray-200 hover:shadow-xl'
                }`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {service.description}
                </p>
              </motion.div>
            );

            return service.external ? (
              <a key={service.title} href={service.link} target="_blank" rel="noopener noreferrer" className="no-underline">
                {CardContent}
              </a>
            ) : (
              <Link key={service.title} to={service.link} className="no-underline">
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
