import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import ModelComparison from '@/components/ModelComparison';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <ModelComparison />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}