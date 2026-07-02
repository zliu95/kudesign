import { Image, Database, FileText, Settings, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

const plugins = [
  {
    icon: Image,
    name: "imageIO",
    desc: "Advanced image format conversion and optimization for next-gen formats (WebP, AVIF) with lossless compression.",
    tag: "Media"
  },
  {
    icon: Database,
    name: "queryIO",
    desc: "High-performance data query snapshots and caching to drastically reduce database load times.",
    tag: "Performance"
  },
  {
    icon: FileText,
    name: "pageIO",
    desc: "Intelligent page compression, minification, and static asset delivery for lightning-fast frontend rendering.",
    tag: "Optimization"
  },
  {
    icon: Settings,
    name: "adminIO",
    desc: "Admin interface simplification and customization suite for a cleaner, more focused backend experience.",
    tag: "Management"
  }
];

export function WPPlugins() {
  return (
    <section className="py-stack-lg bg-surface-container-low" id="tools">
      <div className="max-w-container mx-auto px-6 md:px-margin-desktop">
        <div className="mb-24 flex flex-col items-center text-center">
          <div className="mb-stack-md inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
            <span className="text-label-md text-primary tracking-widest uppercase">Ecosystem</span>
          </div>
          <h2 className="text-headline-lg mb-4">WordPress Tooling</h2>
          <div className="w-24 h-1 bg-primary-container mb-6"></div>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            A suite of premium and free WordPress plugins engineered for extreme performance, efficient asset management, and streamlined administration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-16">
          {plugins.map((plugin, i) => {
            const Icon = plugin.icon;
            return (
              <motion.div
                key={plugin.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-6 rounded-xl hover:border-primary-container transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary transition-colors text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-mono-sm text-on-surface-variant px-2 py-1 bg-surface-container rounded-md border border-white/5 uppercase tracking-widest">
                    {plugin.tag}
                  </span>
                </div>
                <h3 className="text-headline-md text-xl mb-3 group-hover:text-primary transition-colors">{plugin.name}</h3>
                <p className="text-body-md text-on-surface-variant text-sm">
                  {plugin.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 border-primary/20 relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary-container/10 to-transparent pointer-events-none"></div>
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-16 h-16 bg-surface-container rounded-xl flex items-center justify-center shrink-0">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-headline-md text-2xl mb-2">Usage & Insights Blog</h3>
              <p className="text-body-md text-on-surface-variant max-w-xl">
                Explore our technical deep-dives, plugin documentation, and best practices for optimizing your WordPress architecture.
              </p>
            </div>
          </div>
          <button className="relative z-10 whitespace-nowrap bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface border border-outline-variant hover:border-primary transition-all px-8 py-4 rounded-lg font-bold cursor-pointer flex items-center gap-2">
            Read the Blog
          </button>
        </motion.div>
      </div>
    </section>
  );
}
