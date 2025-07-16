'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { useState } from "react";
import ProductModal from "./productModal";
import ImageLightbox from "./imageLightBox";
import Image from "next/image";

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ image: "", title: "" });

  const portfolioItems = [
    {
      id: 1,
      title: "Bonecas Artesanais",
      description: "Bonecas únicas feitas com técnicas tradicionais de Crochê",
      image: '/images/dolls.png',
      category: "Bonecas",
      price: "A partir de R$ 80"
    },
    {
      id: 2,
      title: "Roupas e Acessórios",
      description: "Peças de vestuário confortáveis e elegantes",
      image: '/images/clothes.png',
      category: "Roupas",
      price: "A partir de R$ 120"
    },
    {
      id: 3,
      title: "Trabalhos Personalizados",
      description: "Peças sob medida criadas especialmente para você",
      image: '/images/hands.png',
      category: "Personalizado",
      price: "Orçamento sob consulta"
    },
    // Itens extras que aparecerão quando "Ver Todos" for clicado
    {
      id: 4,
      title: "Cachecóis e Mantas",
      description: "Peças aconchegantes para os dias frios",
      image: '/images/clothes.png',
      category: "Acessórios",
      price: "A partir de R$ 90"
    },
    {
      id: 5,
      title: "Brinquedos de Crochê",
      description: "Brinquedos seguros e divertidos para crianças",
      image: '/images/dolls.png',
      category: "Brinquedos",
      price: "A partir de R$ 60"
    },
    {
      id: 6,
      title: "Decoração para Casa",
      description: "Itens decorativos únicos para seu lar",
      image: '/images/hands.png',
      category: "Decoração",
      price: "A partir de R$ 45"
    }
  ];

  const displayedItems = showAll ? portfolioItems : portfolioItems.slice(0, 3);

  const handleViewImage = (item: any) => {
    setLightboxImage({ image: item.image, title: item.title });
    setLightboxOpen(true);
  };

  const handleProductInterest = (item: any) => {
    setSelectedProduct(item);
    setProductModalOpen(true);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-wood-light to-background" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Heart className="h-4 w-4 mr-2" />
            Meu Portfólio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trabalhos Feitos com <span className="text-primary">Amor</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada peça é única e carrega todo meu carinho e dedicação. Conheça alguns dos meus trabalhos mais especiais.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 bg-card pt-0">
              <div className="relative">
                <Image 
                  src={item.image}
                  width={1000}
                  height={1000} 
                  alt={item.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300 shadow-soft hover:shadow-warm"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    {item.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-primary">
                    {item.price}
                  </span>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleViewImage(item)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => handleProductInterest(item)}
                    >
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-background/80"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Ver Menos" : "Ver Todos os Trabalhos"}
          </Button>
        </div>
      </div>

      <ProductModal 
        open={productModalOpen}
        onOpenChange={setProductModalOpen}
        product={selectedProduct}
      />

      <ImageLightbox 
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
        image={lightboxImage.image}
        title={lightboxImage.title}
      />
    </section>
  );
};

export default Portfolio;