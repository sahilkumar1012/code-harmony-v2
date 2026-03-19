import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Mentors from './pages/Mentors';
import DSA from './pages/DSA';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen dark-mode-transition ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/mentorship" element={<Mentors />} />
          <Route path="/dsa" element={<DSA />} />
          <Route path="/dsasheet" element={<DSA />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
