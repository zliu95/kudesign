import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed-dim/10 to-transparent"></div>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
      </div>
      
      <div className="max-w-container mx-auto px-6 md:px-margin-desktop relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="mb-stack-md inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
            <span className="text-label-md text-primary tracking-widest uppercase">Digital Architecture Lab</span>
          </div>
          
          <h1 className="text-display-lg mb-stack-md leading-tight md:leading-none">
            Shaping the Future of <span className="text-primary-container">Digital Excellence</span>
          </h1>
          
          <p className="text-body-lg text-on-surface-variant mb-stack-lg max-w-2xl">
            KuDesign Limited: Where Product Design, Software Development, and E-commerce Converge to create high-performance digital ecosystems for the global market.
          </p>
          
          <div className="flex flex-wrap gap-stack-md">
            <a href="#portfolio" className="bg-primary-container text-on-primary font-bold px-8 py-4 rounded-lg flex items-center gap-2 group transition-all cursor-pointer hover:brightness-110 no-underline">
              Explore Our Concepts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#portfolio" className="border border-outline-variant text-on-surface hover:border-primary transition-all px-8 py-4 rounded-lg cursor-pointer no-underline flex items-center justify-center">
              <span className="font-bold">View Portfolio</span>
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 hidden lg:block"
      >
        <div className="relative w-full h-full glass-card rounded-l-3xl p-margin-desktop border-r-0 overflow-hidden">
          <img 
            alt="Conceptual Visual" 
            className="w-full h-full object-cover rounded-xl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjimNcn_OalrRcCD6v4SVqoZ0woec2RBFVGfS9n-yjdye5BS5u6WN976XQ4upuE6cxtMRs6GWwda5CAdjfURuljkmkY-l1DvTMbw1zZknokQJ1yES7Lfdwly8b5xP_7Rkj4RE0awqEYyDCKwvy9JKixBgRAKLEFypcilyq_TCB7lQuUuGeMrWSfUTxRWuK00JI8ZQWPVJkIpe_o0GvnXDShnpZ5riK9NmGbtEUZBYmwbKguC6wSY9wRuJhj75cwhrqaojxCOBAgj7E" 
          />
        </div>
      </motion.div>
    </header>
  );
}
