import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ImageLightboxProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  image: string;
  title: string;
}

const ImageLightbox = ({ open, onOpenChange, image, title }: ImageLightboxProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 bg-transparent border-none">

          <img 
            src={image} 
            alt={title}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
          />
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;