import { Terminal, ShoppingCart, Layout } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Layout,
    title: 'Product Design',
    desc: 'Focusing on UX/UI and industrial-grade digital design. We bridge the gap between human intuition and technical functionality.',
    checks: ['UX Strategy', 'Interface Architecture', 'Prototyping']
  },
  {
    icon: Terminal,
    title: 'Software Dev',
    desc: 'Custom solutions and high-performance architecture built for scalability, security, and extreme computational efficiency.',
    checks: ['Cloud Native Systems', 'API Ecosystems', 'Legacy Modernization']
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    desc: 'Global logistics and digital storefront management. End-to-end solutions that drive conversion and operational excellence.',
    checks: ['Logistics Automation', 'Conversion Optimization', 'Global Distribution']
  }
];

export function Services() {
  return (
    <section className="py-stack-lg bg-surface-container-lowest" id="services">
      <div className="max-w-container mx-auto px-6 md:px-margin-desktop">
        <div className="mb-24 text-center">
          <h2 className="text-headline-lg mb-4">Core Competencies</h2>
          <div className="w-24 h-1 bg-primary-container mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card p-8 md:p-margin-desktop rounded-xl group hover:border-primary-container transition-all duration-500"
              >
                <div className="w-16 h-16 bg-surface-container-highest rounded-lg flex items-center justify-center mb-stack-md group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-headline-md mb-stack-sm text-primary">{svc.title}</h3>
                <p className="text-body-md text-on-surface-variant mb-stack-md">
                  {svc.desc}
                </p>
                <ul className="space-y-3 text-label-md text-on-tertiary-container capitalize">
                  {svc.checks.map((check, j) => (
                    <li key={j} className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-secondary-fixed"></span> 
                       {check}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
