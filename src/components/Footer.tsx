export const Footer = () => {
  return (
    <footer id="contacto" className="bg-wolf-dark border-t border-wolf-gold/20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
                <span className="text-3xl">🐺</span>
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
            <div className="text-2xl font-script text-primary mb-4">
              Enjoy the moment
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-xl font-bold text-wolf-gold mb-6">Horarios</h3>
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
            <h3 className="text-xl font-bold text-wolf-gold mb-6">Contacto</h3>
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

        {/* Línea divisoria */}
        <div className="border-t border-wolf-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-center md:text-left">
              © 2024 Wolf Kitchen. Todos los derechos reservados.
            </p>
            <p className="text-muted-foreground text-center md:text-right mt-4 md:mt-0">
              Hecho con ❤️ para los amantes de la buena comida
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};