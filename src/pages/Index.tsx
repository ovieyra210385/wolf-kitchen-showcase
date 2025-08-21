import { HeroSlider } from "@/components/HeroSlider";
import { AnimatedMenuSection } from "@/components/AnimatedMenuSection";
import { BaguetteSection } from "@/components/BaguetteSection"; // Importamos la nueva sección
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-wolf-dark">
      <Navigation />
      <main>
        <section id="inicio">
          <HeroSlider />
        </section>
        <section id="menu">
          <AnimatedMenuSection />
        </section>
        <BaguetteSection /> {/* Añadimos la nueva sección aquí */}
        <section id="nosotros">
          <AboutSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;