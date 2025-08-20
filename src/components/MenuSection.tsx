import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menuData = {
  bebidas: {
    title: "Bebidas",
    icon: "🥤",
    items: [
      {
        name: "Jugos Frescos",
        price: "$25",
        description: "Zanaranja (Zanahoria y naranja), Verde (Apio, perejil, nopal, naranja y piña), Desinflama Abdómen (Papaya, piña y avena)",
        category: "Saludable"
      },
      {
        name: "Licuados (1/2 L)",
        price: "$25",
        description: "Fresa, Plátano con chocolate",
        category: "Cremoso"
      },
      {
        name: "Protein Iron Wolf",
        price: "$47",
        description: "Proteína Gold Standard, leche deslactosada y light, y hasta 3 complementos a elegir",
        category: "Proteína"
      },
      {
        name: "Power Iron",
        price: "$25",
        description: "Café, leche y chocolate",
        category: "Energía"
      },
      {
        name: "Aguas del Día",
        price: "$20 - $70",
        description: "Jamaica, Horchata (1/2L $20, Jarra 2L $70)",
        category: "Refrescante"
      }
    ]
  },
  desayunos: {
    title: "Desayunos",
    icon: "🍳",
    items: [
      {
        name: "Hot Cakes",
        price: "$60",
        description: "3 piezas con toppings a elegir",
        category: "Dulce"
      },
      {
        name: "Bowl Parridge",
        price: "$45",
        description: "Tazón de avena",
        category: "Saludable"
      },
      {
        name: "Bowl con Yogurt",
        price: "$50",
        description: "Avena con yogurt griego y fruta",
        category: "Proteína"
      },
      {
        name: "Huevos",
        price: "$70",
        description: "Revueltos, estrellados u omelette con ingrediente a elegir. Acompañados con frijoles y tortilla o pan",
        category: "Tradicional"
      },
      {
        name: "Chilaquiles",
        price: "$75 - $89",
        description: "Rojos o verdes. Sencillos $75, Con pollo $85, Con carne $89, Con huevo $80",
        category: "Mexicano"
      }
    ]
  },
  baguettes: {
    title: "Baguettes",
    icon: "🥖",
    items: [
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
    ]
  },
  ensaladas: {
    title: "Ensaladas",
    icon: "🥗",
    items: [
      {
        name: "Clásica",
        price: "$45 / $85",
        description: "Pollo, lechuga mixta, zanahoria, col morada, frituras, queso cheddar y aderezo ranch (Mediana / Grande)",
        category: "Tradicional"
      },
      {
        name: "César Pollo",
        price: "$45 / $85",
        description: "Pollo, lechuga orejona, queso parmesano, croutones y aderezo César (Mediana / Grande)",
        category: "César"
      },
      {
        name: "Buffalo",
        price: "$55 / $100",
        description: "Pechuga empanizada, salsa buffalo, lechuga, zanahoria, queso cheddar, tocino, frituras y aderezo ranch (Mediana / Grande)",
        category: "Picante"
      },
      {
        name: "Wolf César",
        price: "$50 / $95",
        description: "Pollo marinado, chipotle, lechuga orejona, champiñones, tomate, croutones, queso parmesano y aderezo César (Mediana / Grande)",
        category: "Especial"
      }
    ]
  },
  wraps: {
    title: "Wraps",
    icon: "🌯",
    items: [
      {
        name: "Pollo",
        price: "$80",
        description: "Pechuga de pavo sazonada, lechuga, jitomate, cebolla y aderezo ranch o césar",
        category: "Clásico"
      },
      {
        name: "Jamones",
        price: "$80",
        description: "Jamón de pavo, jamón de pierna, queso manchego, lechuga, jitomate y cebolla",
        category: "Tradicional"
      },
      {
        name: "Chicken Crunch",
        price: "$85",
        description: "Pechuga de pollo empanizada, queso cheddar, lechuga, jitomate, mayostaza y aderezo o buffalo",
        category: "Crujiente"
      },
      {
        name: "Beef and Guacamole",
        price: "$95",
        description: "Tiras de res con pico de gallo y guacamole",
        category: "Premium"
      }
    ]
  }
};

export const MenuSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-6 animate-fade-up">
            Nuestro Menú
          </h2>
          <p className="text-xl text-wolf-light max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Descubre nuestra selección de platillos preparados con los mejores ingredientes
          </p>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mt-6"></div>
        </div>

        <Tabs defaultValue="baguettes" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-wolf-gray border border-wolf-gold/20 mb-12">
            {Object.entries(menuData).map(([key, category]) => (
              <TabsTrigger 
                key={key} 
                value={key} 
                className="text-wolf-light data-[state=active]:bg-gradient-gold data-[state=active]:text-wolf-dark"
              >
                <span className="mr-2">{category.icon}</span>
                <span className="hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(menuData).map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <Card 
                    key={index} 
                    className="bg-gradient-card border-wolf-gold/20 hover-lift group animate-fade-up"
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
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};