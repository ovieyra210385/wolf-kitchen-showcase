import { useState, useEffect } from "react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  icon: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Baguette de Pollo",
    description: "Deliciosa baguette rellena de pollo a la parrilla, vegetales frescos y aderezo especial.",
    price: 8.99,
    icon: "🥖",
    category: "Baguettes"
  },
  {
    id: 2,
    name: "Wrap de Vegetales",
    description: "Wrap nutritivo con una variedad de vegetales frescos, hummus y un toque de especias.",
    price: 7.49,
    icon: "🌯",
    category: "Wraps"
  },
  {
    id: 3,
    name: "Ensalada Mediterránea",
    description: "Refrescante ensalada con aceitunas, tomate, pepino, queso feta y aderezo de hierbas.",
    price: 9.99,
    icon: "🥗",
    category: "Ensaladas"
  },
  {
    id: 4,
    name: "Jugo Verde Detox",
    description: "Jugo revitalizante con espinaca, pepino, manzana verde y limón.",
    price: 5.49,
    icon: "🥤",
    category: "Bebidas"
  },
  {
    id: 5,
    name: "Baguette de Jamón y Queso",
    description: "Clásica baguette con jamón de primera calidad y queso suizo, perfecta para un almuerzo rápido.",
    price: 7.99,
    icon: "🥪",
    category: "Baguettes"
  },
  {
    id: 6,
    name: "Wrap de Pollo y Aguacate",
    description: "Wrap cremoso con pollo, aguacate, lechuga y un aderezo ligero de cilantro y limón.",
    price: 8.49,
    icon: "🥙",
    category: "Wraps"
  },
  {
    id: 7,
    name: "Ensalada de Quinoa",
    description: "Ensalada nutritiva con quinoa, frijoles negros, maíz, pimiento rojo y aderezo de lima.",
    price: 10.49,
    icon: "🥣",
    category: "Ensaladas"
  },
  {
    id: 8,
    name: "Limonada de Fresa",
    description: "Limonada refrescante con fresas naturales, ideal para acompañar cualquier comida.",
    price: 4.99,
    icon: "🍹",
    category: "Bebidas"
  },
  {
    id: 9,
    name: "Baguette Vegetariana",
    description: "Baguette con hummus, berenjena asada, pimientos y un toque de aceite de oliva.",
    price: 8.49,
    icon: "🥖",
    category: "Baguettes"
  },
  {
    id: 10,
    name: "Wrap de Salmón",
    description: "Wrap elegante con salmón ahumado, espinacas, alcaparras y crema de queso.",
    price: 9.49,
    icon: "🍣",
    category: "Wraps"
  },
  {
    id: 11,
    name: "Ensalada César",
    description: "Clásica ensalada César con lechuga romana, crutones, parmesano y aderezo César.",
    price: 8.99,
    icon: "🥬",
    category: "Ensaladas"
  },
  {
    id: 12,
    name: "Té Helado de Durazno",
    description: "Té helado refrescante con sabor a durazno, perfecto para un día caluroso.",
    price: 4.49,
    icon: "🍑",
    category: "Bebidas"
  }
];

const categories: string[] = ["Baguettes", "Wraps", "Ensaladas", "Bebidas"];

export const AnimatedMenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("Baguettes");
  const [featuredItem, setFeaturedItem] = useState<MenuItem | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentItems = menuItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (currentItems.length > 0) {
      setFeaturedItem(currentItems[0]);
    }
  }, [activeCategory, currentItems]);

  const handleItemClick = (item: MenuItem) => {
    setIsAnimating(true);
    setFeaturedItem(item);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <section className="min-h-screen bg-wolf-dark py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/lovable-uploads/6de2ee17-e61b-414f-9af0-fb7d071d7e2d.png" 
          alt="Decorative background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating geometric wolf elements */}
      <div className="absolute top-20 right-20 opacity-10 animate-float">
        <img 
          src="/lovable-uploads/61737990-efef-4c7c-a9ca-c9e55d3fdecb.png" 
          alt="Wolf logo"
          className="w-32 h-32"
        />
      </div>
      
      <div className="absolute bottom-20 left-20 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
        <img 
          src="/lovable-uploads/61737990-efef-4c7c-a9ca-c9e55d3fdecb.png" 
          alt="Wolf logo"
          className="w-24 h-24"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header with branding */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-card shadow-glow mb-8">
            <img 
              src="/lovable-uploads/61737990-efef-4c7c-a9ca-c9e55d3fdecb.png" 
              alt="Wolf Kitchen Logo"
              className="w-16 h-16 opacity-80"
            />
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-gradient-gold mb-6 tracking-tight">
            MENÚ
          </h2>
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/b195ab70-744b-4689-9656-9791f3f448de.png" 
              alt="Enjoy the moment"
              className="h-12 opacity-80"
            />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección de platos saludables y deliciosos
          </p>
        </div>

        {/* Menu Categories with enhanced branding */}
        <div className="flex justify-center mb-16">
          <div className="flex space-x-8 bg-wolf-gray/30 rounded-full p-2 backdrop-blur-md border border-wolf-gold/20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-gold text-wolf-dark shadow-glow scale-105'
                    : 'text-wolf-light hover:text-wolf-gold hover:bg-wolf-gold/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Central Plate Animation Area */}
        <div className="relative min-h-[600px] flex items-center justify-center mb-20">
          {/* Animated Background Circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 rounded-full bg-gradient-to-r from-wolf-gold/20 to-transparent animate-spin-slow"></div>
            <div className="absolute w-80 h-80 rounded-full bg-gradient-to-l from-wolf-gold/10 to-transparent animate-spin-reverse"></div>
          </div>

          {/* Main Plate */}
          <div 
            className={`relative z-10 w-96 h-96 rounded-full bg-gradient-card shadow-glow flex items-center justify-center transition-all duration-1000 ${
              isAnimating ? 'animate-pulse scale-110' : 'hover-lift'
            }`}
          >
            {/* Plate Border */}
            <div className="absolute inset-4 rounded-full border-2 border-wolf-gold/30"></div>
            
            {/* Featured Item Display */}
            <div className="text-center p-8">
              {featuredItem && (
                <div className="animate-fade-up">
                  <div className="text-6xl mb-4 animate-bounce">{featuredItem.icon}</div>
                  <h3 className="text-2xl font-bold text-gradient-gold mb-2">
                    {featuredItem.name}
                  </h3>
                  <p className="text-wolf-light text-sm mb-3">
                    {featuredItem.description}
                  </p>
                  <div className="text-3xl font-bold text-wolf-gold">
                    ${featuredItem.price}
                  </div>
                </div>
              )}
            </div>

            {/* Brand elements on plate */}
            <div className="absolute top-4 right-4 opacity-20">
              <img 
                src="/lovable-uploads/61737990-efef-4c7c-a9ca-c9e55d3fdecb.png" 
                alt="Wolf logo"
                className="w-8 h-8"
              />
            </div>
          </div>

          {/* Floating Menu Items */}
          {currentItems.map((item, index) => {
            const angle = (index * (360 / currentItems.length)) * (Math.PI / 180);
            const radius = 280;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={item.id}
                className={`absolute w-20 h-20 rounded-full bg-gradient-card shadow-glow flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-125 hover:shadow-xl border-2 ${
                  item.id === featuredItem?.id ? 'border-wolf-gold' : 'border-wolf-gold/20'
                }`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  animationDelay: `${index * 0.1}s`
                }}
                onClick={() => handleItemClick(item)}
              >
                <span className="text-2xl">{item.icon}</span>
              </div>
            );
          })}
        </div>

        {/* Menu Grid with enhanced styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-gradient-card rounded-xl p-6 shadow-glow hover-lift transition-all duration-300 border border-wolf-gold/20 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </span>
                <div className="opacity-20 group-hover:opacity-40 transition-opacity">
                  <img 
                    src="/lovable-uploads/61737990-efef-4c7c-a9ca-c9e55d3fdecb.png" 
                    alt="Wolf logo"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gradient-gold mb-2 group-hover:text-wolf-gold transition-colors">
                {item.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 group-hover:text-wolf-light transition-colors">
                {item.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-wolf-gold">${item.price}</span>
                <div className="px-3 py-1 bg-wolf-gold/20 rounded-full text-xs text-wolf-gold">
                  {activeCategory}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional decorative stripe elements */}
      <div className="absolute top-1/3 left-0 w-40 h-1 bg-gradient-gold opacity-30 transform rotate-45"></div>
      <div className="absolute bottom-1/3 right-0 w-32 h-1 bg-gradient-gold opacity-30 transform -rotate-45"></div>
    </section>
  );
};
