import { Globe } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section className="py-stack-lg relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-container/20 rounded-full blur-3xl"></div>
          <h2 className="text-headline-lg mb-stack-md">
            Hong Kong Roots,<br/><span className="text-primary-container">Global Vision.</span>
          </h2>
          <div className="space-y-6">
            <p className="text-body-lg text-on-surface-variant">
              KuDesign Limited is a multi-disciplinary firm registered in Hong Kong, operating at the intersection of aesthetic precision and technical power. 
            </p>
            <p className="text-body-md text-on-surface-variant/80">
              We bridge the gap between abstract concept and global commerce. Our teams work across timezones to deliver digital infrastructure that supports thousands of users daily. From the vibrant streets of HK to the global digital frontier, we are architects of the modern web.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">120+</div>
              <div className="text-label-md text-on-tertiary-container uppercase tracking-widest">Global Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-label-md text-on-tertiary-container uppercase tracking-widest">System Uptime</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="aspect-square glass-card rounded-2xl overflow-hidden p-3 electric-glow">
            <img 
              alt="Hong Kong Origin" 
              className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL6iJfaMWicyFMdUqWa9DGJveNBT-LzcnPb94PoJMRLdaWUr4MmrpcTMXLa1C2tUdaOFVhDjL7U_TlcQ8zAFfVpobJEsISulkSDSlU96V8LcQ0iZERecFtZxdtQ6InK2uqKS9jGOF8H6bTVcKtw6XrRwNkTpEG__hP6fCUpvFSDWawS7B2pkII6ZFQgTXS4zaiH3QCF1bScdAZ53_kxvgXgEJB_omfcT_wjNJfF03Jfrxn5Dq8tOPRpU-N5XypPN2Js4aZ9UJsUOyX"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 md:-right-6 glass-card p-6 rounded-xl border-primary/20">
            <div className="flex items-center gap-3">
              <Globe className="text-primary w-8 h-8" />
              <div>
                <div className="text-label-md text-primary font-bold uppercase tracking-widest">Registry No.</div>
                <div className="text-mono-sm text-on-surface-variant">HK-KD-2024-X99</div>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
