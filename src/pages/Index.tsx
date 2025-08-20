import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-wolf-dark">
      <Navigation />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="menu">
          <MenuSection />
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
