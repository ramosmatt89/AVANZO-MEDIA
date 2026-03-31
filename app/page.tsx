import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import StarShield from '@/components/StarShield';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <StarShield />
      <About />
      <ContactForm />
      <Footer />
    </main>
  );
}
