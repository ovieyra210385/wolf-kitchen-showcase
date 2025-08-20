import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  const features = [
    {
      icon: "🥗",
      title: "Ingredientes Frescos",
      description: "Seleccionamos los mejores ingredientes para garantizar sabor y calidad en cada platillo"
    },
    {
      icon: "👨‍🍳",
      title: "Chefs Expertos",
      description: "Nuestro equipo culinario prepara cada platillo con pasión y dedicación"
    },
    {
      icon: "⚡",
      title: "Servicio Rápido",
      description: "Comida saludable y deliciosa, preparada con la agilidad que necesitas"
    },
    {
      icon: "💪",
      title: "Nutrición Balanceada",
      description: "Opciones saludables diseñadas para complementar tu estilo de vida activo"
    }
  ];

  return (
    <section id="nosotros" className="py-20 px-4 bg-wolf-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-6 animate-fade-up">
            Sobre Wolf Kitchen
          </h2>
          <p className="text-xl text-wolf-light max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            En Wolf Kitchen creemos que la alimentación saludable no debe comprometer el sabor. 
            Cada platillo es una experiencia culinaria diseñada para nutrir tu cuerpo y satisfacer 
            tus sentidos.
          </p>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-wolf-gold/20 hover-lift group animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-wolf-gold mb-4 group-hover:text-gradient-gold transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-card border border-wolf-gold/20 rounded-2xl p-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-3xl font-bold text-gradient-gold mb-4">
              "Enjoy the moment"
            </h3>
            <p className="text-lg text-wolf-light italic">
              Más que un lema, es nuestra filosofía. Cada momento de tu día merece 
              una experiencia gastronómica excepcional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};