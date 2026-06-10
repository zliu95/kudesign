import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    title: "Aura / Next-Gen E-Commerce",
    category: "Web Architecture",
    description: "High-performance headless storefront designed for luxury automotive accessories. Custom WebGL product configurator.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    metrics: ["120ms Latency", "3x Conversion"]
  },
  {
    title: "Nexus Global Logistics",
    category: "Enterprise System",
    description: "Global supply chain tracking dashboard with real-time geospatial data integration and predictive analytics.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    metrics: ["Real-time Sync", "Multi-region"]
  },
  {
    title: "Syndicate / Defi Protocol",
    category: "DeFi & Web3",
    description: "Institutional-grade decentralized exchange interface. Focuses on absolute data density and transaction speed.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    metrics: ["Zero-downtime", "Secured"]
  },
  {
    title: "Vanguard Design System",
    category: "UI/UX Engineering",
    description: "Comprehensive React component library spanning 40+ enterprise applications. Built for absolute accessibility.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    metrics: ["A11y Compliant", "40+ Integrations"]
  }
];

export function Portfolio() {
  return (
    <section className="py-stack-lg border-t border-white/5 bg-background relative overflow-hidden" id="portfolio">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-container mx-auto px-6 md:px-margin-desktop relative z-10">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="text-headline-lg mb-4">Digital Concepts</h2>
            <div className="w-24 h-1 bg-primary-container"></div>
          </div>
          <p className="text-body-md text-on-surface-variant max-w-md">
            A selection of high-performance digital ecosystems, spanning industrial Web3 interfaces to luxury e-commerce platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group block cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[20px] glass-card border-none mb-6 aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131314] via-transparent to-transparent opacity-90"></div>
                
                {/* Floating Metric Tags */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2 pr-6">
                  {project.metrics.map(metric => (
                    <span key={metric} className="px-3 py-1.5 bg-[#131314]/60 backdrop-blur-md rounded-lg text-mono-sm text-primary border border-white/10 uppercase tracking-widest whitespace-nowrap box-border">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-start gap-4 px-2">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span>
                    <div className="text-label-md text-on-tertiary-container uppercase tracking-widest">{project.category}</div>
                  </div>
                  <h3 className="text-headline-md mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-body-md text-on-surface-variant max-w-md">{project.description}</p>
                </div>
                
                <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary text-on-surface group-hover:text-on-primary transition-all duration-300">
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 flex justify-center relative z-10">
          <button className="border border-outline-variant text-on-surface hover:border-primary transition-all px-8 py-4 rounded-lg cursor-pointer flex items-center gap-2 group">
            <span className="font-bold">View All Archives</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
