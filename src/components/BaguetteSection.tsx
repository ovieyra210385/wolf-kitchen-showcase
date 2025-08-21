import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const baguetteItems = [
    {
        name: "Wolf",
        price: "$55 / $100",
        description: "Jamón de pavo con queso manchego (15cm / 30cm)",
        category: "Clásico"
    },
    {
        name: "Fit",
        price: "$55 / $100",
        description: "Jamón de pavo y queso panela (15cm / 30cm)",
        category: "Saludable"
    },
    {
        name: "Chicken BBQ",
        price: "$60 / $105",
        description: "Pollo de la casa con salsa BBQ (15cm / 30cm)",
        category: "BBQ"
    },
    {
        name: "Buffalo Bacon",
        price: "$60 / $115",
        description: "Pollo buffalo con tocino, mix de queso cheddar y queso gouda (15cm / 30cm)",
        category: "Especial"
    },
    {
        name: "Mexican",
        price: "$60 / $115",
        description: "Jamón de pavo y queso panela a la plancha con pico de gallo, tocino, guacamole y mayostaza (15cm / 30cm)",
        category: "Mexicano"
    }
];

export const BaguetteSection = () => {
  return (
    <section id="baguettes" className="py-20 px-4 bg-wolf-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-6 animate-fade-up">
            Nuestros Baguettes
          </h2>
          <p className="text-xl text-wolf-light max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Elaborados con pan artesanal y los ingredientes más frescos.
          </p>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {baguetteItems.map((item, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-wolf-gold/20 hover-lift group animate-fade-up border-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-wolf-gold group-hover:text-gradient-gold transition-all duration-300">
                    {item.name}
                  </CardTitle>
                  <Badge variant="outline" className="border-wolf-gold text-wolf-gold">
                    {item.category}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-wolf-light">
                  {item.price}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};