import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ImageIOPlugin } from './pages/ImageIOPlugin';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-io" element={<ImageIOPlugin />} />
      </Routes>
      <Footer />
    </div>
  );
}
