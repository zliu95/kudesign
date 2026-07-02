import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { WPPlugins } from '../components/WPPlugins';
import { About } from '../components/About';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <WPPlugins />
      <About />
      <Contact />
    </main>
  );
}
