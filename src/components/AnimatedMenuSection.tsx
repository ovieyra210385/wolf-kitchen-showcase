
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MenuItem {
  name: string;
  price: string;
  description: string;
  category: string;
  image?: string;
}

interface MenuCategory {
  title: string;
  icon: string;
  items: MenuItem[];
}

const menuData: Record<string, MenuCategory> = {
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

export const AnimatedMenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("baguettes");
  const [featuredItem, setFeaturedItem] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        const currentItems = menuData[activeCategory]?.items || [];
        setFeaturedItem((prev) => (prev + 1) % currentItems.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [activeCategory, isAnimating]);

  const handleCategoryChange = (category: string) => {
    if (category !== activeCategory) {
      setIsAnimating(true);
      setActiveCategory(category);
      setFeaturedItem(0);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const currentCategory = menuData[activeCategory];
  const currentFeaturedItem = currentCategory?.items[featuredItem];

  return (
    <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-wolf-gold/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-gold/20 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-wolf-gold rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-bold text-gradient-gold mb-6 animate-fade-up">
            Nuestro Menú
          </h2>
          <p className="text-xl text-wolf-light max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Descubre nuestra selección de platillos preparados con los mejores ingredientes
          </p>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mt-6 animate-fade-up" style={{ animationDelay: '0.4s' }}></div>
        </div>

        {/* Featured Item Display */}
        <div className="mb-20 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Featured item info */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-gold/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              
              <Card className="bg-gradient-card border-wolf-gold/30 p-8 hover-lift relative z-10">
                <div className="mb-6">
                  <Badge className="bg-wolf-gold text-wolf-dark mb-4">
                    Especialidad {currentCategory?.icon}
                  </Badge>
                  <h3 className="text-4xl font-bold text-gradient-gold mb-2">
                    {currentFeaturedItem?.name}
                  </h3>
                  <div className="text-3xl font-bold text-wolf-light mb-4">
                    {currentFeaturedItem?.price}
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {currentFeaturedItem?.description}
                </p>
                
                <Badge variant="outline" className="border-wolf-gold text-wolf-gold">
                  {currentFeaturedItem?.category}
                </Badge>
              </Card>
            </div>

            {/* Right side - Visual representation */}
            <div className="relative flex items-center justify-center">
              {/* Main plate circle */}
              <div className="relative w-80 h-80">
                <div className={`absolute inset-0 bg-gradient-gold/30 rounded-full transition-all duration-1000 ${isAnimating ? 'scale-0 rotate-180' : 'scale-100 rotate-0'}`}></div>
                
                {/* Plate shadow */}
                <div className={`absolute inset-4 bg-wolf-dark/40 rounded-full blur-lg transition-all duration-1000 ${isAnimating ? 'scale-0' : 'scale-100'}`}></div>
                
                {/* Main plate */}
                <div className={`absolute inset-8 bg-gradient-card rounded-full border-4 border-wolf-gold/50 transition-all duration-1000 flex items-center justify-center ${isAnimating ? 'scale-0 rotate-360' : 'scale-100 rotate-0'}`}>
                  <div className="text-6xl animate-bounce" style={{ animationDuration: '2s' }}>
                    {currentCategory?.icon}
                  </div>
                </div>

                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s' }}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-wolf-gold rounded-full flex items-center justify-center text-wolf-dark font-bold">
                      {featuredItem + 1}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating price */}
              <div className="absolute top-8 right-8 bg-gradient-gold text-wolf-dark px-4 py-2 rounded-full font-bold animate-pulse">
                Especial
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(menuData).map(([key, category]) => (
            <button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-gold border-wolf-gold text-wolf-dark'
                  : 'border-wolf-gold/30 text-wolf-light hover:border-wolf-gold hover:bg-wolf-gold/10'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory?.items.map((item, index) => (
            <Card
              key={index}
              className={`bg-gradient-card border-wolf-gold/20 hover-lift group transition-all duration-500 ${
                index === featuredItem ? 'ring-2 ring-wolf-gold scale-105' : ''
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? 'translateY(20px)' : 'translateY(0)'
              }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-wolf-gold group-hover:text-gradient-gold transition-all duration-300">
                    {item.name}
                  </h4>
                  <Badge variant="outline" className="border-wolf-gold text-wolf-gold">
                    {item.category}
                  </Badge>
                </div>
                
                <div className="text-2xl font-bold text-wolf-light mb-4">
                  {item.price}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
