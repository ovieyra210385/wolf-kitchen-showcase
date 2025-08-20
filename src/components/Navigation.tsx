import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-wolf-dark/95 backdrop-blur-md shadow-glow' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
              <span className="text-2xl">🐺</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient-gold">WOLF KITCHEN</h1>
              <p className="text-xs text-wolf-light opacity-75">HEALTHY FOOD</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-wolf-light hover:text-wolf-gold transition-colors duration-300">
              Inicio
            </a>
            <a href="#menu" className="text-wolf-light hover:text-wolf-gold transition-colors duration-300">
              Menú
            </a>
            <a href="#nosotros" className="text-wolf-light hover:text-wolf-gold transition-colors duration-300">
              Nosotros
            </a>
            <a href="#contacto" className="text-wolf-light hover:text-wolf-gold transition-colors duration-300">
              Contacto
            </a>
          </div>

          {/* CTA Button */}
          <Button className="bg-gradient-gold hover:shadow-glow transition-all duration-300 text-wolf-dark font-semibold">
            Ordenar Ahora
          </Button>
        </div>
      </div>
    </nav>
  );
};