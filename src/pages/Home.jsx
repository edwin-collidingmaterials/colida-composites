import Navbar from '../components/landing/Navbar';
import BackgroundShapes from '../components/landing/BackgroundShapes';
import WaveBackground from '../components/WaveBackground';
import HeroSection from '../components/landing/HeroSection';
import CompanyAbout from '../components/landing/CompanyAbout';
import ServicesSection from '../components/landing/ServicesSection';
import WhyChooseColida from '../components/landing/WhyChooseColida';
import InquiryForm from '../components/landing/InquiryForm';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <BackgroundShapes />
      <WaveBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <CompanyAbout />
        <ServicesSection />
        <WhyChooseColida />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
}