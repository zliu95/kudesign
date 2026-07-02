import { Check, X, Server, Cloud, Zap, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function ImageIOPlugin() {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'lifetime'>('annual');
  const [siteCount, setSiteCount] = useState<1 | 5 | 20>(1);

  const pricing = {
    annual: {
      1: 39,
      5: 99,
      20: 249,
    },
    lifetime: {
      1: 99,
      5: 249,
      20: 599,
    }
  };

  return (
    <main className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-fixed-dim/10 to-transparent"></div>
        </div>
        <div className="max-w-container mx-auto px-6 md:px-margin-desktop relative z-10 text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full border border-white/10">
            <span className="text-label-md text-primary tracking-widest uppercase">KuDesign Plugin</span>
          </div>
          <h1 className="text-display-lg mb-6 leading-tight">
            image<span className="text-primary-container">IO</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-12">
            The ultimate image optimization and storage solution for WordPress. Next-gen format conversion, OSS object storage integration, and extreme performance tuning.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#pricing" className="bg-primary-container text-on-primary font-bold px-8 py-4 rounded-lg flex items-center gap-2 transition-all cursor-pointer hover:brightness-110 no-underline">
              Get Pro Version
            </a>
            <a href="https://wordpress.org/plugins/" target="_blank" rel="noreferrer" className="border border-outline-variant text-on-surface hover:border-primary transition-all px-8 py-4 rounded-lg cursor-pointer flex items-center gap-2 no-underline">
              Download Free Version
            </a>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-container mx-auto px-6 md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg mb-4">Core Architecture</h2>
            <div className="w-24 h-1 bg-primary-container mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-10 rounded-2xl border-white/5">
              <div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center mb-6 text-primary">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-headline-md mb-4">Community Edition</h3>
              <p className="text-body-md text-on-surface-variant mb-6">
                Available for free on the WordPress plugin repository. Designed for standard blogs and small businesses.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary-fixed shrink-0 mt-0.5" />
                  <span className="text-on-surface">Auto-convert Media Library JPG/PNG to WebP and AVIF.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary-fixed shrink-0 mt-0.5" />
                  <span className="text-on-surface">Lossless and smart lossy compression algorithms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary-fixed shrink-0 mt-0.5" />
                  <span className="text-on-surface">Server auto-negotiation to deliver lightweight versions to compatible browsers.</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-10 rounded-2xl border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full blur-[60px] pointer-events-none"></div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary relative z-10">
                <Cloud className="w-7 h-7" />
              </div>
              <h3 className="text-headline-md mb-4 relative z-10">Pro Edition</h3>
              <p className="text-body-md text-on-surface-variant mb-6 relative z-10">
                Engineered for enterprise scale. Offload storage and compute for extreme performance.
              </p>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-on-surface">FTP Storage Functionality & OSS Object Storage Integration (AWS S3, Cloudflare R2, Aliyun OSS).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-on-surface">Automated incremental image conversion background processing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-on-surface">Advanced API accessibility for headless setups.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-on-surface">Native OSS Lazy Load support for zero-layout-shift rendering.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-surface" id="pricing">
        <div className="max-w-4xl mx-auto px-6 md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg mb-4">Pricing Architecture</h2>
            <p className="text-body-lg text-on-surface-variant">Simple, predictable pricing for developers and agencies.</p>
          </div>
          
          <div className="glass-card rounded-[24px] p-8 md:p-12 border-white/10">
            {/* Toggles */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
              <div className="bg-surface-container rounded-lg p-1 inline-flex">
                <button 
                  onClick={() => setBillingCycle('annual')}
                  className={`px-6 py-2 rounded-md text-label-md tracking-widest uppercase transition-all ${billingCycle === 'annual' ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'}`}
                >
                  Annual License
                </button>
                <button 
                  onClick={() => setBillingCycle('lifetime')}
                  className={`px-6 py-2 rounded-md text-label-md tracking-widest uppercase transition-all ${billingCycle === 'lifetime' ? 'bg-primary-container text-on-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'}`}
                >
                  Lifetime License
                </button>
              </div>
              
              <div className="bg-surface-container rounded-lg p-1 inline-flex">
                {[1, 5, 20].map((num) => (
                  <button 
                    key={num}
                    onClick={() => setSiteCount(num as 1 | 5 | 20)}
                    className={`px-6 py-2 rounded-md text-label-md tracking-widest uppercase transition-all ${siteCount === num ? 'bg-surface-container-highest text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'}`}
                  >
                    {num} Site{num > 1 ? 's' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Display */}
            <div className="text-center mb-12">
              <div className="flex justify-center items-baseline gap-2 mb-4">
                <span className="text-headline-md text-on-surface-variant">$</span>
                <span className="text-display-lg text-primary">{pricing[billingCycle][siteCount]}</span>
                <span className="text-body-lg text-on-surface-variant">/{billingCycle === 'annual' ? 'year' : 'one-time'}</span>
              </div>
              <p className="text-body-md text-on-surface-variant max-w-md mx-auto">
                Includes all Pro features, 1 year of premium support, and {billingCycle === 'annual' ? 'continuous updates' : 'lifetime updates'}.
              </p>
            </div>

            <button className="w-full bg-primary-container text-on-primary font-bold py-5 rounded-lg electric-glow hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer">
              Purchase License
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
