import { useTheme } from '../context/ThemeContext';
import { Download } from 'lucide-react';

export default function DSA() {
  const { isDark } = useTheme();

  return (
    <div className={`pt-20 min-h-screen ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              📌 Data Structures & Algorithms Roadmap
            </h1>
            <p className={`text-lg max-w-2xl mx-auto mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Master DSA with this structured syllabus. Follow the roadmap, practice daily, and crack any coding interview.
            </p>
            <a
              href="/resources/DSA.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors no-underline"
            >
              <Download size={18} /> Download Syllabus PDF
            </a>
          </div>

          {/* PDF Viewer — hidden on mobile */}
          <div className={`hidden md:block rounded-xl overflow-hidden border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <iframe
              src="/resources/DSA.pdf"
              title="DSA Roadmap PDF"
              className="w-full border-0"
              style={{ height: '80vh' }}
            />
          </div>

          {/* Mobile fallback */}
          <div className="md:hidden text-center mt-8">
            <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              PDF preview is not available on mobile. Please download the file to view it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
