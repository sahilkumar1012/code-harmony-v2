import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { reviews } from '../../data/reviews';

export default function TestimonialSlider() {
  const { isDark } = useTheme();
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            What People Say About Us
          </h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className={`p-8 md:p-12 rounded-2xl text-center ${
                isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              <Quote className={`mx-auto mb-4 ${isDark ? 'text-red-500' : 'text-red-500'}`} size={32} />
              <p className={`text-lg md:text-xl leading-relaxed mb-6 italic ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                &ldquo;{reviews[current].review}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  isDark ? 'bg-red-600 text-white' : 'bg-red-100 text-red-600'
                }`}>
                  {reviews[current].name.charAt(0)}
                </div>
                <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {reviews[current].name}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className={`p-2 rounded-full transition-colors cursor-pointer border-none ${
                isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer border-none p-0 ${
                    i === current ? 'bg-red-500 w-6' : isDark ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className={`p-2 rounded-full transition-colors cursor-pointer border-none ${
                isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
