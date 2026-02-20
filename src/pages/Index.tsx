import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProductsSection from "@/components/landing/ProductsSection";
import WhyProteam from "@/components/landing/WhyProteam";
import WhoWeServe from "@/components/landing/WhoWeServe";
import CoverageSection from "@/components/landing/CoverageSection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductsSection />
      <WhyProteam />
      <WhoWeServe />
      <CoverageSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
