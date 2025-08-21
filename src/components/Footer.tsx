
export const Footer = () => {
  return (
    <footer id="contacto" className="bg-wolf-dark border-t border-wolf-gold/20 py-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/lovable-uploads/6de2ee17-e61b-414f-9af0-fb7d071d7e2d.png" 
          alt="Decorative background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo y descripción con elementos de marca mejorados */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center relative">
                <img 
                  src="/lovable-uploads/61737990-efef-4c7c-a9ca-c9e55d3fdecb.png" 
                  alt="Wolf Kitchen Logo"
                  className="w-12 h-12 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-gold opacity-20 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient-gold">WOLF KITCHEN</h1>
                <p className="text-sm text-wolf-light opacity-75">HEALTHY FOOD</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Donde cada platillo cuenta una historia de sabor y calidad. 
              Disfruta de una experiencia culinaria única que nutre tu cuerpo y alma.
            </p>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/b195ab70-744b-4689-9656-9791f3f448de.png" 
                alt="Enjoy the moment social club"
                className="h-12 opacity-80"
              />
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-xl font-bold text-wolf-gold mb-6 flex items-center">
              <div className="w-8 h-8 rounded-full bg-wolf-gold/20 flex items-center justify-center mr-3">
                <img 
                  src="/lovable-uploads/61737990-efef-4c7c-a9ca-c9e55d3fdecb.png" 
                  alt="Wolf logo"
                  className="w-4 h-4 opacity-60"
                />
              </div>
              Horarios
            </h3>
            <div className="space-y-3 text-wolf-light">
              <div>
                <p className="font-semibold">Lunes - Viernes</p>
                <p className="text-muted-foreground">7:00 AM - 10:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Sábados</p>
                <p className="text-muted-foreground">8:00 AM - 11:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Domingos</p>
                <p className="text-muted-foreground">9:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold text-wolf-gold mb-6 flex items-center">
              <div className="w-8 h-8 rounded-full bg-wolf-gold/20 flex items-center justify-center mr-3">
                <img 
                  src="/lovable-uploads/61737990-efef-4c7c-a9ca-c9e55d3fdecb.png" 
                  alt="Wolf logo"
                  className="w-4 h-4 opacity-60"
                />
              </div>
              Contacto
            </h3>
            <div className="space-y-3 text-wolf-light">
              <div>
                <p className="font-semibold">📍 Ubicación</p>
                <p className="text-muted-foreground">Centro de la Ciudad</p>
              </div>
              <div>
                <p className="font-semibold">📞 Teléfono</p>
                <p className="text-muted-foreground">+52 (555) 123-4567</p>
              </div>
              <div>
                <p className="font-semibold">📧 Email</p>
                <p className="text-muted-foreground">hola@wolfkitchen.com</p>
              </div>
              <div>
                <p className="font-semibold">📱 Redes Sociales</p>
                <div className="flex space-x-3 mt-2">
                  <span className="text-2xl hover:text-wolf-gold cursor-pointer transition-colors">📘</span>
                  <span className="text-2xl hover:text-wolf-gold cursor-pointer transition-colors">📷</span>
                  <span className="text-2xl hover:text-wolf-gold cursor-pointer transition-colors">🐦</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria con elementos de marca */}
        <div className="border-t border-wolf-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/61737990-efef-4c7c-a9ca-c9e55d3fdecb.png" 
                alt="Wolf logo"
                className="w-6 h-6 opacity-40 mr-3"
              />
              <p className="text-muted-foreground text-center md:text-left">
                © 2024 Wolf Kitchen. Todos los derechos reservados.
              </p>
            </div>
            <p className="text-muted-foreground text-center md:text-right">
              Hecho con ❤️ para los amantes de la buena comida
            </p>
          </div>
        </div>
      </div>

      {/* Decorative brand elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <div className="w-20 h-20 border border-wolf-gold/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <div className="w-16 h-16 border border-wolf-gold/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>
    </footer>
  );
};
