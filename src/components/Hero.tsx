import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo Area */}
        <div className="mb-8 animate-fade-up">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-card shadow-glow mb-6">
            <div className="text-6xl">🐺</div>
          </div>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-gradient-gold mb-4 tracking-tight">
            WOLF KITCHEN
          </h1>
          <p className="text-xl md:text-2xl text-wolf-light opacity-90 mb-2">
            HEALTHY FOOD
          </p>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-2xl md:text-3xl font-light text-wolf-light mb-4">
            Enjoy the moment
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubre una experiencia culinaria única donde cada bocado cuenta una historia de sabor y calidad
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-gold hover:shadow-glow transition-all duration-300 text-wolf-dark font-semibold px-8 py-4 text-lg hover-lift"
          >
            Ver Menú
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-wolf-gold text-wolf-gold hover:bg-wolf-gold hover:text-wolf-dark transition-all duration-300 px-8 py-4 text-lg hover-lift"
          >
            Conoce Más
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-wolf-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-wolf-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};