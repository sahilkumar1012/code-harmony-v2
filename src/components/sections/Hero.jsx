import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useEffect, useState, useRef } from 'react';

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const floatingSnippets = [
  { text: 'const dp = [];', x: '10%', y: '20%', delay: 0 },
  { text: 'O(n log n)', x: '80%', y: '15%', delay: 1 },
  { text: 'BFS(graph)', x: '75%', y: '70%', delay: 2 },
  { text: 'merge(left, right)', x: '15%', y: '75%', delay: 0.5 },
];

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      isDark
        ? 'bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950'
        : 'bg-gradient-to-br from-gray-50 via-red-50/30 to-white'
    }`}>
      {/* Floating code snippets */}
      {floatingSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className={`absolute hidden md:block font-mono text-sm px-3 py-1 rounded-lg pointer-events-none select-none ${
            isDark ? 'text-gray-600 bg-gray-800/30' : 'text-gray-400 bg-gray-200/50'
          }`}
          style={{ left: snippet.x, top: snippet.y }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: snippet.delay, ease: 'easeInOut' }}
        >
          {snippet.text}
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Master DSA.
          </span>
          <br />
          <span className={isDark ? 'text-white' : 'text-gray-900'}>Land Your Dream Job.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
        >
          Expert mentorship from engineers at Google, Amazon, Microsoft & more. Crack coding interviews with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/mentors"
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors text-lg no-underline"
          >
            Find My Mentor →
          </Link>
          <Link
            to="/dsa"
            className={`px-8 py-3 font-semibold rounded-xl border-2 transition-colors text-lg no-underline ${
              isDark
                ? 'border-gray-600 text-gray-300 hover:border-white hover:text-white'
                : 'border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900'
            }`}
          >
            Explore DSA Sheet
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className={`mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto py-8 px-6 rounded-2xl ${
            isDark ? 'bg-gray-800/30 border border-gray-700/50' : 'bg-white/60 border border-gray-200'
          }`}
        >
          {[
            { value: 8, suffix: '+', label: 'Expert Mentors' },
            { value: 50, suffix: '+', label: 'Companies' },
            { value: 500, suffix: '+', label: 'Success Stories' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
