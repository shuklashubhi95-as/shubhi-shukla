import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PracticeAreas } from './components/PracticeAreas';
import { Team } from './components/Team';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Statistics } from './components/Statistics';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Team />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

