import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import OrganizationalStructure from '@/components/OrganizationalStructure';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <OrganizationalStructure />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
