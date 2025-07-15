import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Heart } from "lucide-react";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: string;
}

interface ProductModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product | null;
}

const ProductModal = ({ open, onOpenChange, product }: ProductModalProps) => {
  if (!product) return null;

  const handleWhatsAppOrder = () => {
    const message = `Olá! Vim pelo site e tenho interesse no produto "${product.title}". Gostaria de mais informações e orçamento. Obrigado!`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Heart className="h-5 w-5 mr-2 text-primary" />
            Produto Selecionado
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
              {product.category}
            </Badge>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              {product.title}
            </h3>
            <p className="text-muted-foreground">
              {product.description}
            </p>
            <div className="text-xl font-medium text-primary">
              {product.price}
            </div>
          </div>
          
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <p className="text-sm text-muted-foreground mb-4">
              💝 <strong>Como funciona:</strong> Ao continuar, você será direcionado para o WhatsApp da Ecione. 
              Uma mensagem será enviada informando seu interesse neste produto e que você veio pelo site.
            </p>
          </div>
          
          <Button 
            onClick={handleWhatsAppOrder}
            size="lg" 
            className="w-full h-12 bg-green-600 hover:bg-green-700 text-white"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Tenho Interesse - WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;