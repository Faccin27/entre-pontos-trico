"use client";

import { FaRegHeart } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsEnvelopeHeart } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactModal from "./contactModal";

const Header = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5527997162667?text=Olá! Vim pelo site e gostaria de fazer um orçamento.",
      "_blank"
    );
  };

  return (
    <>
      <header className="bg-gradient-to-r from-wood-light/80 to-wood-medium/70 backdrop-blur-2xl  w-full fixed z-[99999] top-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FaRegHeart className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Ecione Rosario
                </h1>
                <p className="text-sm text-muted-foreground">
                  Crochê Artesanal com Amor
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="bg-background/80"
                onClick={() => setContactModalOpen(true)}
              >
                <BsEnvelopeHeart className="h-4 w-4 mr-2" />
                Contato
              </Button>
              <Button
                size="sm"
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <FaWhatsapp className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </>
  );
};

export default Header;
