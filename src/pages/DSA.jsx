import { useState, useMemo, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Download, Search, X, ExternalLink, ArrowUpDown } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';
import { problems } from '../data/problems';

const DIFFICULTY_CONFIG = {
  Easy: { color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20', order: 1 },
  Medium: { color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/20', order: 2 },
  Hard: { color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/20', order: 3 },
};

const STORAGE_KEY = 'codeharmony_completed_problems';

function loadCompleted() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
  } catch { return new Set(); }
}

function saveCompleted(set) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
}

export default function DSA() {
  const { isDark } = useTheme();
  const [completed, setCompleted] = useState(loadCompleted);
  const [search, setSearch] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All Topics');
  const [sortKey, setSortKey] = useState(null);
  const [sortDir, setSortDir] = useState('asc');

  const uniqueTopics = useMemo(() => {
    const topics = new Set();
    problems.forEach(p => p.topics.forEach(t => topics.add(t)));
    return ['All Topics', ...Array.from(topics).sort()];
  }, []);

  const toggleComplete = useCallback((id) => {
    setCompleted(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      saveCompleted(next);
      return next;
    });
  }, []);

  const handleSort = useCallback((key) => {
    setSortDir(prev => sortKey === key && prev === 'asc' ? 'desc' : 'asc');
    setSortKey(key);
  }, [sortKey]);

  const filtered = useMemo(() => {
    let list = problems.filter(p =>
      (selectedTopic === 'All Topics' || p.topics.includes(selectedTopic)) &&
      (!search || p.title.toLowerCase().includes(search.toLowerCase()) || p.leetcodeId.includes(search))
    );

    if (sortKey === 'difficulty') {
      list = [...list].sort((a, b) => {
        const diff = DIFFICULTY_CONFIG[a.difficulty].order - DIFFICULTY_CONFIG[b.difficulty].order;
        return sortDir === 'asc' ? diff : -diff;
      });
    } else if (sortKey === 'completed') {
      list = [...list].sort((a, b) => {
        const diff = Number(completed.has(a.leetcodeId)) - Number(completed.has(b.leetcodeId));
        return sortDir === 'asc' ? diff : -diff;
      });
    }

    return list;
  }, [search, selectedTopic, sortKey, sortDir, completed]);

  const completedCount = filtered.filter(p => completed.has(p.leetcodeId)).length;
  const totalCompleted = problems.filter(p => completed.has(p.leetcodeId)).length;
  const progressPct = Math.round((totalCompleted / problems.length) * 100);

  const cardBg = isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200';
  const inputBg = isDark ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400';
  const headerBg = isDark ? 'bg-gray-800/50' : 'bg-gray-50';
  const rowHover = isDark ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50';
  const borderColor = isDark ? 'border-gray-800' : 'border-gray-200';

  return (
    <div className={`pt-20 min-h-screen ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className={`text-3xl md:text-5xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              DSA Essentials Sheet
            </h1>
            <p className={`text-base md:text-lg max-w-3xl mx-auto mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Curated problems frequently asked at <strong>Google, Amazon, Microsoft, and Meta</strong>.
              Strengthen your <a href="/resources/DSA.pdf" className="text-red-500 hover:underline">core DSA concepts</a> and
              crack any coding interview.
            </p>
            <a
              href="/resources/DSA.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-xl transition-colors no-underline"
            >
              <Download size={16} /> Download Syllabus PDF
            </a>
          </div>

          {/* Progress Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="flex justify-between text-sm mb-1.5">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Progress</span>
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{totalCompleted}/{problems.length} ({progressPct}%)</span>
            </div>
            <div className={`w-full h-3 rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <select
              value={selectedTopic}
              onChange={e => setSelectedTopic(e.target.value)}
              className={`px-4 py-2.5 rounded-xl border text-sm outline-none min-w-[200px] ${inputBg}`}
            >
              {uniqueTopics.map(t => <option key={t} value={t}>{t}</option>)}
            </select>

            <div className="relative">
              <Search size={16} className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
              <input
                type="text"
                placeholder="Search problems..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className={`pl-9 pr-8 py-2.5 rounded-xl border text-sm outline-none w-[280px] ${inputBg}`}
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 cursor-pointer bg-transparent border-none p-0">
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Table */}
          <div className={`rounded-xl border overflow-hidden ${cardBg}`}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className={headerBg}>
                    <th className={`text-left py-3 px-4 font-semibold border-b ${borderColor} ${isDark ? 'text-gray-300' : 'text-gray-700'} w-16`}>#</th>
                    <th className={`text-left py-3 px-4 font-semibold border-b ${borderColor} ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Problem</th>
                    <th
                      className={`text-left py-3 px-4 font-semibold border-b ${borderColor} ${isDark ? 'text-gray-300' : 'text-gray-700'} cursor-pointer select-none w-28`}
                      onClick={() => handleSort('difficulty')}
                    >
                      <span className="inline-flex items-center gap-1">Difficulty <ArrowUpDown size={13} /></span>
                    </th>
                    <th className={`text-center py-3 px-4 font-semibold border-b ${borderColor} ${isDark ? 'text-gray-300' : 'text-gray-700'} w-16`}>Video</th>
                    <th className={`text-left py-3 px-4 font-semibold border-b ${borderColor} ${isDark ? 'text-gray-300' : 'text-gray-700'} hidden md:table-cell`}>Tags</th>
                    <th
                      className={`text-center py-3 px-4 font-semibold border-b ${borderColor} ${isDark ? 'text-gray-300' : 'text-gray-700'} cursor-pointer select-none w-32`}
                      onClick={() => handleSort('completed')}
                    >
                      <span className="inline-flex items-center gap-1">Done ({completedCount}/{filtered.length}) <ArrowUpDown size={13} /></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((problem) => {
                    const done = completed.has(problem.leetcodeId);
                    const diffCfg = DIFFICULTY_CONFIG[problem.difficulty];
                    const tags = problem.tags || problem.topics;

                    return (
                      <tr key={problem.leetcodeId} className={`border-b ${borderColor} ${rowHover} transition-colors ${done ? (isDark ? 'bg-emerald-900/10' : 'bg-emerald-50/50') : ''}`}>
                        {/* LeetCode ID */}
                        <td className="py-3 px-4">
                          <a href={problem.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 no-underline font-mono text-xs">
                            {problem.leetcodeId}
                          </a>
                        </td>

                        {/* Title */}
                        <td className="py-3 px-4">
                          <a
                            href={problem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`no-underline hover:underline inline-flex items-center gap-1.5 ${done ? 'line-through opacity-60' : ''} ${isDark ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-gray-900'}`}
                          >
                            {problem.title}
                            <ExternalLink size={12} className="opacity-40" />
                          </a>
                        </td>

                        {/* Difficulty */}
                        <td className="py-3 px-4">
                          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${diffCfg.bg} ${diffCfg.color}`}>
                            {problem.difficulty}
                          </span>
                        </td>

                        {/* YouTube */}
                        <td className="py-3 px-4 text-center">
                          {problem.youtubeLink ? (
                            <a href={problem.youtubeLink} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 text-lg">
                              <FaYoutube />
                            </a>
                          ) : (
                            <span className="text-gray-600">—</span>
                          )}
                        </td>

                        {/* Tags */}
                        <td className="py-3 px-4 hidden md:table-cell">
                          <div className="flex flex-wrap gap-1">
                            {tags.slice(0, 3).map(tag => (
                              <span key={tag} className={`text-xs px-2 py-0.5 rounded-md ${isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                                {tag}
                              </span>
                            ))}
                            {tags.length > 3 && (
                              <span className={`text-xs px-1.5 py-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                +{tags.length - 3}
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Checkbox */}
                        <td className="py-3 px-4 text-center">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={done}
                              onChange={() => toggleComplete(problem.leetcodeId)}
                              className="sr-only peer"
                            />
                            <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all
                              ${done
                                ? 'bg-emerald-500 border-emerald-500'
                                : isDark
                                  ? 'border-gray-600 hover:border-gray-400'
                                  : 'border-gray-300 hover:border-gray-500'
                              }`}
                            >
                              {done && (
                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                          </label>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {filtered.length === 0 && (
              <div className={`text-center py-12 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                No problems found matching your filters.
              </div>
            )}
          </div>

          <p className={`text-center text-xs mt-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            {problems.length} problems · Progress saved in your browser
          </p>
        </div>
      </section>
    </div>
  );
}
