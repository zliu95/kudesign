import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getHref = (hash: string) => {
    return location.pathname === '/' ? hash : `/${hash}`;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all border-b h-20 ${scrolled ? 'bg-surface/80 backdrop-blur-xl border-white/10' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-container mx-auto px-6 md:px-margin-desktop flex justify-between items-center h-full">
        <Link to="/" className="text-headline-md tracking-tighter text-primary no-underline">KuDesign</Link>
        
        <div className="hidden md:flex items-center gap-gutter">
          <a className="text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300 no-underline" href={getHref('#services')}>Design</a>
          <a className="text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300 no-underline" href={getHref('#portfolio')}>Concepts</a>
          <a className="text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300 no-underline" href={getHref('#tools')}>Tools</a>
          <Link to="https://wp.kudesign.net" className={`text-body-md transition-colors duration-300 no-underline ${location.pathname === '/image-io' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>WordPress Plugins</Link>
          <a className="text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300 no-underline" href={getHref('#contact')}>Contact</a>
        </div>
        
        <a href={getHref('#portfolio')} className="bg-primary-container text-on-primary font-bold px-6 py-3 rounded-lg hover:brightness-110 transition-all electric-glow cursor-pointer hidden sm:block no-underline">
          Explore Concepts
        </a>
      </div>
    </nav>
  );
}
