import { Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section className="py-stack-lg bg-surface-container-lowest" id="contact">
      <div className="max-w-container mx-auto px-6 md:px-margin-desktop">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[24px] p-8 lg:p-24 overflow-hidden relative"
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-container/5 to-transparent"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-headline-lg mb-stack-sm">Initiate the<br/>Connection</h2>
              <p className="text-body-lg text-on-surface-variant mb-12">
                Ready to transform your conceptual vision into a technical reality? Let's discuss your next breakthrough.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-surface-container flex shrink-0 items-center justify-center rounded-lg">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <div className="text-label-md text-on-tertiary-container uppercase tracking-widest mb-1">Email</div>
                    <div className="text-body-lg">hello@kudesign.net</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-surface-container flex shrink-0 items-center justify-center rounded-lg">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <div className="text-label-md text-on-tertiary-container uppercase tracking-widest mb-1">HQ</div>
                    <div className="text-body-lg">Central, Hong Kong</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-2">
                <label className="text-label-md text-primary-container uppercase tracking-widest block mb-2">Name</label>
                <input 
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary-container focus:outline-none transition-all py-3 text-body-lg placeholder:text-on-surface-variant/50" 
                  placeholder="Enter your full name" 
                  type="text" 
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <label className="text-label-md text-primary-container uppercase tracking-widest block mb-2">Inquiry Type</label>
                <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary-container focus:outline-none transition-all py-3 text-body-lg appearance-none cursor-pointer">
                  <option className="bg-surface text-on-surface">Product Design</option>
                  <option className="bg-surface text-on-surface">Software Development</option>
                  <option className="bg-surface text-on-surface">E-commerce Operations</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-label-md text-primary-container uppercase tracking-widest block mb-2">Message</label>
                <textarea 
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary-container focus:outline-none transition-all py-3 text-body-lg placeholder:text-on-surface-variant/50 resize-none" 
                  placeholder="Briefly describe your vision" 
                  rows={3}
                ></textarea>
              </div>
              <button className="w-full bg-primary-container text-on-primary font-bold py-5 rounded-lg electric-glow hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4">
                Send Transmission
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
