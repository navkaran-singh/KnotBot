import Hero from "@/react-app/components/Hero";
import FeaturedIn from "@/react-app/components/FeaturedIn";
import PainVsSolution from "@/react-app/components/PainVsSolution";
import HowItWorks from "@/react-app/components/HowItWorks";
import Features from "@/react-app/components/Features";
import Testimonials from "@/react-app/components/Testimonials";
import Mission from "@/react-app/components/Mission";
import FAQ from "@/react-app/components/FAQ";
import Footer from "@/react-app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedIn />
      <PainVsSolution />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Mission />
      <FAQ />
      <Footer />
    </div>
  );
}
