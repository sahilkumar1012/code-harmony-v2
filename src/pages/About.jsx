import { useTheme } from '../context/ThemeContext';
import { FaYoutube, FaDiscord } from 'react-icons/fa';

export default function About() {
  const { isDark } = useTheme();

  return (
    <div className={`pt-20 min-h-screen ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className={`p-8 md:p-12 rounded-2xl ${isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200 shadow-lg'}`}>
            <h1 className={`text-3xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              About Code Harmony
            </h1>

            <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                <strong className={isDark ? 'text-white' : 'text-gray-900'}>Code Harmony</strong> is a platform built by engineers, for engineers. Our mission is to democratize access to high-quality mentorship and structured preparation for coding interviews.
              </p>
              <p>
                We believe that cracking a coding interview shouldn&apos;t depend on privilege — it should depend on preparation. That&apos;s why we bring together mentors from Google, Amazon, Microsoft, Goldman Sachs, LinkedIn, and other top companies to guide aspiring developers.
              </p>
              <p>
                Whether you&apos;re a fresher starting your DSA journey or an experienced developer preparing for senior roles, Code Harmony provides the roadmap, the problems, and the mentorship to get you there.
              </p>
              <p>
                Our platform offers curated DSA problem sets, structured learning paths, 1-on-1 mentorship sessions, mock interviews, and a vibrant community of learners and mentors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="https://www.youtube.com/@CodeHarmonydev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors no-underline"
              >
                <FaYoutube size={20} /> Explore YouTube Channel
              </a>
              <a
                href="https://discord.gg/p3vtnzFbn5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors no-underline"
              >
                <FaDiscord size={20} /> Join Our Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
