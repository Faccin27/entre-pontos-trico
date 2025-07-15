import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999?text=Olá! Vim pelo site e gostaria de mais informações sobre seus trabalhos.", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/ecione.trico", "_blank");
  };

  const handleFacebook = () => {
    window.open("https://facebook.com/ecione.trico", "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-center">Entre em Contato</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-4 p-6">
          <Button 
            onClick={handleWhatsApp}
            size="lg" 
            variant="outline"
            className="h-16 rounded-2xl border-green-500 text-green-600 hover:bg-green-50"
          >
            <FaWhatsapp className="h-6 w-6 mr-3" />
            WhatsApp
          </Button>
          
          <Button 
            onClick={handleInstagram}
            size="lg" 
            variant="outline"
            className="h-16 rounded-2xl border-pink-500 text-pink-600 hover:bg-pink-50"
          >
            <Instagram className="h-6 w-6 mr-3" />
            Instagram
          </Button>
          
          <Button 
            onClick={handleFacebook}
            size="lg" 
            variant="outline"
            className="h-16 rounded-2xl border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            <Facebook className="h-6 w-6 mr-3" />
            Facebook
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;