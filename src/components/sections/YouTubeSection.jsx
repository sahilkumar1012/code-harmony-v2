import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { videos } from '../../data/videos';

export default function YouTubeSection() {
  const { isDark } = useTheme();

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Educational Resources
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Learn DSA, system design, and more through our video content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`rounded-xl overflow-hidden border ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div className="p-4">
                <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.youtube.com/@CodeHarmonydev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors no-underline"
          >
            Visit Our YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
}
