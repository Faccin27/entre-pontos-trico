import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageCircle, MapPin, Clock, Heart } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-wood-light to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <MessageCircle className="h-4 w-4 mr-2" />
            Entre em Contato
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vamos Criar Algo <span className="text-primary">Especial</span> Juntos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tem uma ideia? Quer uma peça personalizada? Entre em contato comigo e vamos transformar seus sonhos em realidade.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-primary" />
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Telefone</h4>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">E-mail</h4>
                    <p className="text-muted-foreground">ecione.trico@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Localização</h4>
                    <p className="text-muted-foreground">São Paulo, SP</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Horário de Atendimento</h4>
                    <p className="text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  💝 Encomendas Especiais
                </h3>
                <p className="text-muted-foreground mb-4">
                  Aceito encomendas personalizadas! Entre em contato para discutirmos sua ideia especial.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Bonecas temáticas</li>
                  <li>• Roupas sob medida</li>
                  <li>• Acessórios únicos</li>
                  <li>• Presentes personalizados</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;