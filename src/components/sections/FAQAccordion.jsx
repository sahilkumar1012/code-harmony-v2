import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { faqs } from '../../data/faq';

export default function FAQAccordion() {
  const { isDark } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border overflow-hidden ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className={`w-full flex items-center justify-between p-5 text-left cursor-pointer border-none bg-transparent ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                <span className="font-medium pr-4">{faq.question}</span>
                {openIndex === i ? (
                  <Minus size={18} className="shrink-0 text-red-500" />
                ) : (
                  <Plus size={18} className={`shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className={`px-5 pb-5 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
