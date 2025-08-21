
import { HeroSlider } from "@/components/HeroSlider";
import { AnimatedMenuSection } from "@/components/AnimatedMenuSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-wolf-dark">
      <main>
        <section id="inicio">
          <HeroSlider />
        </section>
        <section id="menu">
          <AnimatedMenuSection />
        </section>
        <section id="nosotros">
          <AboutSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
