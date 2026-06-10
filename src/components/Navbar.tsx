import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all border-b h-20 ${scrolled ? 'bg-surface/80 backdrop-blur-xl border-white/10' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-container mx-auto px-6 md:px-margin-desktop flex justify-between items-center h-full">
        <a className="text-headline-md tracking-tighter text-primary" href="#">KuDesign</a>
        
        <div className="hidden md:flex items-center gap-gutter">
          <a className="text-body-md text-primary font-bold border-b-2 border-primary pb-1" href="#services">Design</a>
          <a className="text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#services">Development</a>
          <a className="text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#services">E-commerce</a>
          <a className="text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#contact">Contact</a>
        </div>
        
        <a href="#portfolio" className="bg-primary-container text-on-primary font-bold px-6 py-3 rounded-lg hover:brightness-110 transition-all electric-glow cursor-pointer hidden sm:block no-underline">
          Explore Concepts
        </a>
      </div>
    </nav>
  );
}
