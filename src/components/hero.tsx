import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Star } from "lucide-react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-background to-wood-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-medium">Artesanato com Amor</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Tricô que
                <span className="text-primary"> Aquece</span> o
                <span className="text-primary"> Coração</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Peças únicas feitas à mão com carinho e dedicação. Bonecas,
                roupas e acessórios que contam histórias e trazem conforto para
                sua vida.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-warm">
                <Heart className="h-5 w-5 mr-2" />
                Ver Meus Trabalhos
              </Button>
              <Button variant="outline" size="lg" className="bg-background/80">
                <Star className="h-5 w-5 mr-2" />
                Fazer Encomenda
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">
                  Anos de Experiência
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">
                  Peças Criadas
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Feito à Mão</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="overflow-hidden shadow-warm bg-card py-0 ">
              <Image
                src={"/images/hero.jpg"}
                alt="Hero image"
                width={1000}
                height={1000}
                className="w-full h-96 transition-all duration-300 object-cover hover:scale-105"
              />
            </Card>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-full shadow-soft">
              <Heart className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
