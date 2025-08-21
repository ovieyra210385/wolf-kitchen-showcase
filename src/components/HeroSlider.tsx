
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "WOLF KITCHEN",
    subtitle: "Healthy Food",
    description: "Enjoy the moment"
  },
  {
    id: 2,
    title: "FRESH",
    subtitle: "Ingredients",
    description: "Natural & Organic"
  },
  {
    id: 3,
    title: "ARTISAN",
    subtitle: "Crafted",
    description: "Made with Love"
  },
  {
    id: 4,
    title: "PREMIUM",
    subtitle: "Quality",
    description: "Excellence in Every Bite"
  }
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-[10000ms] ease-out"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            transform: `scale(1.1) translateX(${currentSlide * -2}%)` 
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
        </div>
      </div>

      {/* Decorative stripe pattern */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/lovable-uploads/6de2ee17-e61b-414f-9af0-fb7d071d7e2d.png" 
          alt="Decorative stripes"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-wolf-gold rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-4 max-w-6xl mx-auto">
          {/* Logo with geometric wolf */}
          <div 
            className={`mb-12 transition-all duration-1000 ${
              isAnimating ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
            }`}
          >
            <div className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-gradient-card shadow-glow mb-8 hover-lift relative">
              {/* Geometric wolf logo */}
              <img 
                src="/lovable-uploads/61737990-efef-4c7c-a9ca-c9e55d3fdecb.png" 
                alt="Wolf Kitchen Logo"
                className="w-24 h-24 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-gold opacity-20 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Sliding content */}
          <div className="relative h-96 flex items-center justify-center">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              const isPrev = index === (currentSlide - 1 + slides.length) % slides.length;
              const isNext = index === (currentSlide + 1) % slides.length;

              let transform = 'translateX(100%) scale(0.8)';
              let opacity = 0;
              let zIndex = 1;

              if (isActive) {
                transform = 'translateX(0%) scale(1)';
                opacity = 1;
                zIndex = 10;
              } else if (isPrev) {
                transform = 'translateX(-100%) scale(0.8)';
                opacity = 0.3;
                zIndex = 5;
              } else if (isNext) {
                transform = 'translateX(100%) scale(0.8)';
                opacity = 0.3;
                zIndex = 5;
              }

              return (
                <div
                  key={slide.id}
                  className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-out"
                  style={{
                    transform,
                    opacity,
                    zIndex
                  }}
                >
                  <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-gradient-gold mb-6 tracking-tighter leading-none">
                    {slide.title}
                  </h1>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-wolf-light mb-4 tracking-wide">
                    {slide.subtitle}
                  </h2>
                  <div className="w-32 h-1 bg-gradient-gold mb-8 animate-pulse"></div>
                  
                  {/* Enjoy the moment script */}
                  {slide.id === 1 && (
                    <div className="mb-4">
                      <img 
                        src="/lovable-uploads/b195ab70-744b-4689-9656-9791f3f448de.png" 
                        alt="Enjoy the moment social club"
                        className="h-16 opacity-90 animate-float"
                      />
                    </div>
                  )}
                  
                  <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light tracking-wider">
                    {slide.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-4 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-wolf-gold scale-125 shadow-glow'
                    : 'bg-wolf-light opacity-50 hover:opacity-80 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-wolf-gray/80 border border-wolf-gold text-wolf-gold hover:bg-wolf-gold hover:text-wolf-dark transition-all duration-300 disabled:opacity-50 hover-lift"
      >
        <ChevronLeft className="w-6 h-6 mx-auto" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-wolf-gray/80 border border-wolf-gold text-wolf-gold hover:bg-wolf-gold hover:text-wolf-dark transition-all duration-300 disabled:opacity-50 hover-lift"
      >
        <ChevronRight className="w-6 h-6 mx-auto" />
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-wolf-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-wolf-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Decorative elements with branding */}
      <div className="absolute top-20 left-20 w-20 h-20 border border-wolf-gold/30 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 border border-wolf-gold/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      
      {/* Brand stripe elements */}
      <div className="absolute top-1/4 right-10 opacity-20">
        <div className="w-32 h-2 bg-gradient-gold transform rotate-45"></div>
      </div>
      <div className="absolute bottom-1/4 left-10 opacity-20">
        <div className="w-24 h-2 bg-gradient-gold transform -rotate-45"></div>
      </div>
    </section>
  );
};
