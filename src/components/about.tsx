import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Clock, Star, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Cada peça é criada com carinho e atenção aos detalhes"
    },
    {
      icon: Clock,
      title: "Experiência",
      description: "Mais de 10 anos criando peças únicas e especiais"
    },
    {
      icon: Star,
      title: "Qualidade",
      description: "Uso apenas materiais de primeira qualidade"
    },
    {
      icon: Award,
      title: "Exclusividade",
      description: "Trabalhos personalizados e únicos para cada cliente"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-wood-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4">
                <Heart className="h-4 w-4 mr-2" />
                Sobre Mim
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Arte do Tricô que <span className="text-primary">Encanta</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Olá! Sou Ecione Rosario Vitor, apaixonada pela arte do tricô há mais de uma década. 
                  O que começou como um hobby se transformou na minha maior paixão e forma de expressão artística.
                </p>
                <p>
                  Cada fio que trabalho conta uma história, cada ponto carrega meu amor e dedicação. 
                  Especializo-me em bonecas artesanais, roupas sob medida e acessórios únicos que 
                  trazem conforto e alegria para quem os recebe.
                </p>
                <p>
                  Meu objetivo é criar peças que não apenas aquecem o corpo, mas também o coração, 
                  levando um pouco de carinho e arte para o dia a dia de cada pessoa.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card shadow-soft hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;