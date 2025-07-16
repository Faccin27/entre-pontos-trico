import { Heart, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-wood-dark text-wood-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Heart className="h-6 w-6 text-wood-accent" />
              <h3 className="text-xl font-bold">Ecione Rosario</h3>
            </div>
            <p className="text-wood-light/80">
              Crochê artesanal feito com amor e dedicação. Cada peça conta uma
              história única.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-wood-accent" />
                <span className="text-wood-light/80">(27) 99716-2667</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-wood-accent" />
                <span className="text-wood-light/80">
                  ecione.trico@email.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-wood-accent" />
                <span className="text-wood-light/80">São Paulo, SP</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Especialidades</h4>
            <ul className="text-wood-light/80 space-y-1">
              <li>• Bonecas Artesanais</li>
              <li>• Roupas Personalizadas</li>
              <li>• Acessórios Únicos</li>
              <li>• Encomendas Especiais</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-wood-light/20 mt-8 pt-8 text-center">
          <p className="text-wood-light/70">
            © 2025 Ecione Rosario - Crochê Artesanal. Feito com ❤️ e muito
            carinho.
          </p>
        </div>
        <div className=" mt-2 pt-2 text-center">
          <p className="text-wood-light/80">
            <Link href={"https://faccindev.pro"} target="_blank">
              Criado e desenvolvido por{" "}
              <span className="font-semibold text-red-500 hover:text-red-500/80">
                FaccinDev
              </span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
